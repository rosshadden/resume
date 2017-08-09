#!/usr/bin/env bash

format=${1:-tex_pdf}

cd dist || exit

json_resume convert --out="$format" --template=../templates/pdf.mustache ../rosshadden.json
if [ -f resume.pdf ]; then mv resume.pdf rosshadden.pdf; fi

cd .. || exit
