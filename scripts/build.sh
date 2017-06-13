#!/usr/bin/env bash

format=${1:-tex_pdf}

cd dist || exit
if [ -f resume.pdf ]; then
	json_resume convert --out="$format" --template=../templates/pdf.mustache ../rosshadden.json
	mv resume.pdf rosshadden.pdf
else
	json_resume convert --out="$format" ../rosshadden.json
fi
cd .. || exit
