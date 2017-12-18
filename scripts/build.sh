#!/usr/bin/env bash

format=${1:-tex_pdf}

cd dist || exit

json_resume convert --out="$format" ../rosshadden.json
if [ -f resume.pdf ]; then mv resume.pdf rosshadden.pdf; fi

cd .. || exit

# ext=${1:-pdf}
# theme=${2:-paper}
#
# resume export -t "$theme" "dist/rosshadden.$ext"
