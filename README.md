# Pear-Expo

React Native web (Expo) setup for pear desktop

> [!Note]
> in current stage its not include hypercore related example

> [!Note]
> android/ios integration through react-native-bare-kit

## structure

- app/ - [expo](https://docs.expo.dev/) folder, host the main code and can export web UI as `dist/` folder for pear use
- pear/ - [pear](https://docs.pears.com/guides/starting-a-pear-desktop-project) folder

## Setup

1. `cd app && yarn` (or `cd app && npm install`)

## Run on Android or iOS App 📱

(Same as expo)

1. from root, run `cd app && npx expo start`
1. press `a` (Android) or `i` (iOS)

----

## Run on Web 🕸️

(Same as expo)

1. from root, run `cd app && npx expo start`
1. press `w`

> [!Note]
> `worklet` related code might not work in web mode

> [!Note]
> Can turn the app as [progressive web app](https://docs.expo.dev/guides/progressive-web-apps/) (PWA) for more advanced usage

----

## Run on Pear Desktop App 💻

See [pear/README.md](pear/README.md)

## What's next 🛤️

Can follow [Making a Pear Desktop Application](https://docs.pears.com/guides/making-a-pear-desktop-app) to continue the journey.
