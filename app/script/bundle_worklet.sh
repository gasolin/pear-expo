#!/bin/bash

echo "current bare-pack version:"
npx bare-pack --version


# Define the function
barepack() {
    if [ $# -ne 3 ]; then
        echo "Usage: barepack <platform> <arg1> <arg2>"
        echo "Platforms: android, ios"
        return 1
    fi

    local platform=$1
    local arg1=$2
    local arg2=$3
    local targets=()

    # Platform-specific target configurations
    case "$platform" in
        "android")
            targets=(
                "android-arm"
                "android-arm64"
                "android-ia32"
                "android-x64"
            )
            ;;
        "ios")
            targets=(
                "ios-arm64"
                "ios-arm64-simulator"
                "ios-x64-simulator"
            )
            ;;
        *)
            echo "Invalid platform. Use 'android' or 'ios'."
            return 1
            ;;
    esac

    # Construct target flags
    local target_flags=""
    for target in "${targets[@]}"; do
        target_flags+=" --target ${target}"
    done

    # Execute the command
    # https://www.npmjs.com/package/bare-pack#cli
    npx bare-pack --linked --out "${arg1}" "${arg2}" ${target_flags}
}

# start compile bundles
echo "compiling android bundle"
barepack android worklet/app-android.bundle.js worklet/app.mjs
echo "compiling ios bundle"
barepack ios worklet/app-ios.bundle.js worklet/app.mjs
