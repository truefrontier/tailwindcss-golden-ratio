#!/bin/sh
# Smoke test: build a sample page with Tailwind 3 and Tailwind 4 using this
# plugin, then check each build for the :root variables and a few utilities.
# Installs from npm into a temp folder outside the repo and removes it after.
# Usage: sh scripts/smoke-v3-v4.sh
# Test other versions with TW3=3.3.2 TW4=4.0.0 sh scripts/smoke-v3-v4.sh
set -eu
tw3=${TW3:-3}
tw4=${TW4:-4}

repo=$(cd "$(dirname "$0")/.." && pwd)
tmp=$(mktemp -d "${TMPDIR:-/tmp}/golden-ratio-smoke.XXXXXX")
trap 'rm -rf "$tmp"' EXIT INT TERM

# Install the packed plugin, the same files npm would publish.
(cd "$tmp" && npm pack "$repo" --silent >/dev/null)
tgz=$(ls "$tmp"/tailwindcss-golden-ratio-*.tgz)

html='<div class="p-gr-5 m-grf-6 w-grp-5 aspect-gr-5 leading-gr-5 scale-grp-5 p-golden-5"></div>'
fail=0

setup() { # dir, npm packages...
  dir=$1
  shift
  mkdir -p "$dir"
  printf '{"private":true}\n' >"$dir/package.json"
  printf '%s\n' "$html" >"$dir/index.html"
  (cd "$dir" && npm install --no-audit --no-fund --loglevel=error "$@" "$tgz" >/dev/null)
  echo "  tailwindcss $(cd "$dir" && node -p "require('tailwindcss/package.json').version")"
}

check() { # label, css file, regex (matched against the CSS with spaces and newlines removed)
  match=$(tr -d ' \n' <"$2" | grep -oE "$3" | head -1 || true)
  if [ -n "$match" ]; then
    echo "  ok   $1: $(printf '%s' "$match" | sed 's/{.*;/{…;/')"
  else
    echo "  FAIL $1: no match for $3"
    fail=1
  fi
}

build() { # label, dir, css input file, then the build command
  label=$1 dir=$2 css=$3
  shift 3
  if (cd "$dir" && "$@" -i "$css" -o "${css%.css}.out.css") >"$dir/build.log" 2>&1; then
    echo "  ok   $label build"
  else
    echo "  FAIL $label build:"
    sed 's/^/         /' "$dir/build.log"
    fail=1
  fi
}

checks() { # css output file
  check ':root vars' "$1" ':root\{[^}]*--golden-ratio-5:[0-9.]+rem'
  check 'spacing' "$1" '\.p-gr-5\{[^}]*padding:var\(--golden-ratio-5\)'
  check 'fixed' "$1" '\.m-grf-6\{[^}]*margin:var\(--golden-ratio-fixed-6\)'
  check 'percent' "$1" '\.w-grp-5\{[^}]*width:61\.8[0-9]*%'
  check 'aspect' "$1" '\.aspect-gr-5\{[^}]*aspect-ratio:0\.618[0-9]*/1'
  check 'leading' "$1" '\.leading-gr-5\{[^}]*line-height:var\(--golden-ratio-5\)'
  check 'scale' "$1" '\.scale-grp-5\{[^}]*--tw-scale-x:61\.8[0-9]*%'
}

echo 'Tailwind 3 (plugins in tailwind.config.js)'
v3="$tmp/v3"
setup "$v3" "tailwindcss@$tw3"
cat >"$v3/tailwind.config.js" <<'EOF'
module.exports = {
  content: ['./index.html'],
  plugins: [require('tailwindcss-golden-ratio')],
};
EOF
printf '@tailwind base;\n@tailwind components;\n@tailwind utilities;\n' >"$v3/app.css"
build 'v3' "$v3" app.css ./node_modules/.bin/tailwindcss
[ -f "$v3/app.out.css" ] && checks "$v3/app.out.css"

echo 'Tailwind 4 (@plugin in CSS)'
v4="$tmp/v4"
# Pin node and oxide too: @tailwindcss/cli@4.0.0 accepts any ^4 of them, and a newer oxide breaks it.
setup "$v4" "tailwindcss@$tw4" "@tailwindcss/cli@$tw4" "@tailwindcss/node@$tw4" "@tailwindcss/oxide@$tw4"
printf '@import "tailwindcss";\n@plugin "tailwindcss-golden-ratio";\n' >"$v4/app.css"
build 'v4' "$v4" app.css ./node_modules/.bin/tailwindcss
[ -f "$v4/app.out.css" ] && checks "$v4/app.out.css"

echo 'Tailwind 4 (@config with a custom goldenRatio.prefix)'
cat >"$v4/tailwind.config.js" <<'EOF'
module.exports = {
  theme: { goldenRatio: { prefix: 'golden-' } },
  plugins: [require('tailwindcss-golden-ratio')],
};
EOF
printf '@import "tailwindcss";\n@config "./tailwind.config.js";\n' >"$v4/config.css"
build 'v4 @config' "$v4" config.css ./node_modules/.bin/tailwindcss
[ -f "$v4/config.out.css" ] && check 'custom prefix' "$v4/config.out.css" '\.p-golden-5\{[^}]*padding:var\(--golden-ratio-5\)'

[ "$fail" -eq 0 ] && echo 'All checks passed.' || echo 'Some checks failed.'
exit "$fail"
