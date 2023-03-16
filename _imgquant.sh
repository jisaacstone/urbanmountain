#!/usr/bin/env bash
set -euxo pipefail
folder=$1

pngquant --speed 1 --quality 20-80 assets/"${folder}"/*.png
for file in $(ls assets/"${folder}"/*-fs8.png); do
  mv "${file}" "${file%-fs8.png}.png"
done
for file in $(ls assets/"${folder}"/*.png); do
  webp="${file%.png}.webp"
  if [ ! -f "${webp}" ]; then
    magick convert -quality 70 "${file}" "${webp}"
  fi
done
for file in $(ls assets/"${folder}"/*.jpg); do
  webp="${file%.jpg}.webp"
  if [ ! -f "${webp}" ]; then
    magick convert -quality 70 "${file}" "${webp}"
  fi
done
