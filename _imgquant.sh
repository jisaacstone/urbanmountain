#!/usr/bin/env bash
set -euxo pipefail
folder=$1

pngquant --speed 1 --quality 20-80 assets/"${folder}"/*.png
for file in $(ls assets/"${folder}"/*-fs8.png); do
  mv "${file}" "${file%-fs8.png}.png"
done
for file in $(ls assets/"${folder}"/*.png); do
  magick convert -quality 70 "${file}" "${file%.png}.webp"
done
