#!/bin/bash

echo "current bare-dev version:"
bare-dev --version

# start compile bundles
bare-dev bundle --out worklet/app.bundle.js worklet/app.cjs
