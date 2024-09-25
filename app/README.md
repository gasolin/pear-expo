## structure

- [App.js](app/App.js) - entrypoint of React Native UI
- [worklet](app/worklet) - code for bare runtime (via [https://github.com/holepunchto/react-native-bare-kit](react-native-bare-kit))
  - app.cjs - bare code entrypoint, written with Common JS (Node) format
- src/hook/[useWorklet](app/src/hook/useWorklet.js) - react hook to access [https://github.com/holepunchto/react-native-bare-kit](react-native-bare-kit) APIs
- bare-addon-1.0.0.tgz is compiled from [bare-addon](https://github.com/holepunchto/bare-addon) sample project, related install script is in [app/script](app/script)
