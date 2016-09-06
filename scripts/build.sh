#!/usr/bin/env bash

cd dist || exit
json_resume convert --out=tex_pdf ../rosshadden.json
cd .. || exit
