#!/bin/bash

echo "current bare-pack version:"
npx bare-pack --version


# Define the function
barepack() {
    if [ $# -ne 2 ]; then
        echo "Usage: barepack <arg1> <arg2>"
        return 1
    fi

    local arg1=$1
    local arg2=$2
    local targets=(
        "ios-arm64"
        "ios-arm64-simulator"
        "ios-x64-simulator"
        "android-arm"
        "android-arm64"
        "android-ia32"
        "android-x64"
    )

    # Construct target flags
    local target_flags=""
    for target in "${targets[@]}"; do
        target_flags+=" --target ${target}"
    done

    # Execute the command
    npx bare-pack --out "${arg1}" "${arg2}" ${target_flags} --linked
}

# start compile bundles
barepack worklet/app.bundle.js worklet/app.mjs
