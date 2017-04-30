#!/usr/bin/env bash

cd dist || exit
json_resume convert --out=tex_pdf ../rosshadden.json
mv resume.pdf rosshadden.pdf
cd .. || exit
