## structure

- [App.js](app/App.js) - entrypoint of React Native UI
- [worklet](app/worklet) - code for bare runtime (via [https://github.com/holepunchto/react-native-bare-kit](react-native-bare-kit))
  - app.cjs - bare code entrypoint, written with Common JS (Node) format
- src/hook/[useWorklet](app/src/hook/useWorklet.js) - react hook to access [https://github.com/holepunchto/react-native-bare-kit](react-native-bare-kit) APIs
- src/lib/rpc - define bare function calls via rpc
- bare-addon-1.0.0.tgz is compiled from [bare-addon](https://github.com/holepunchto/bare-addon) sample project, related install script is in [app/script](app/script)

## Overview

`App.js` and `src/` host normal React Native code, which will run in UI thread.

Pear/Bare code is run through a separate process (like web worker) called `worklet`.

For common usage:

1. write bare runtime code in `worklet/` and follow the Common JS pattern (Node JS), the entrypoint is `worklet/app.cjs`.
2. To run bare code with the React native UI, we'll bundle codes under `worklet/` by call `./script/bundle_worklet.sh` from root. (which is automatically run with `yarn android` command)

## Use Addon

Addon is the native code that can be run in node or bare.
Addon also need to be bundled.

For common usage:

1. put addon in root folder
2. (if a local package) npm install ./addon.x.x.x.tgz
3. call `./script/install_addon.sh` from root (need change `ADDON_NAME` if different) (do automatically with `yarn android` command)

Reference
- [bare-expo](https://github.com/holepunchto/bare-expo) official sample
- [bare-pack](https://www.npmjs.com/package/bare-pack) - Bundle packing for Bare
- [bare-addon](https://github.com/holepunchto/bare-addon#publishing)
