#!/bin/bash

ADDON_NAME="bare-addon-1.0.0.tgz"

cp "$ADDON_NAME" worklet/. && cd worklet && npm i "$ADDON_NAME"
