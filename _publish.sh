#!/bin/bash
bundle exec jekyll build
rsync -crz _site/* NFSN:urbanmountain/
