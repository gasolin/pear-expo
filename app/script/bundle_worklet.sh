#!/bin/bash

echo "current bare-pack version:"
npx bare-pack --version

# start compile bundles
npx bare-pack --out worklet/app.bundle.js worklet/app.mjs
