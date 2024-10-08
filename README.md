# Pear-Expo

React Native web (Expo) setup for pear desktop

> Note in current stage its not include hypercore support and no android/ios integration.

## structure

- app/ - [expo](https://docs.expo.dev/) folder, host the main code and can export web UI as `dist/` folder for pear use
- pear/ - [pear](https://docs.pears.com/guides/starting-a-pear-desktop-project) folder

## Setup

1. `cd app && yarn` (or `cd app && npm install`)

## Run on Android or iOS App 📱

1. cd app && npx expo start
1. press `a` (Android) or `i` (iOS)

----

## Run on Web 🕸️

1. cd app && npx expo start
1. press `w`

> [!Note]
> `worklet` related code might not work

> [!Note]
> Can turn the app as [progressive web app](https://docs.expo.dev/guides/progressive-web-apps/) (PWA) for more advanced usage

----

## Run on Pear Desktop App 💻

pear-expo export the web code (via react-native-web) to run in Pear Desktop App (which is an Electron-like environment)

> [!Note]
> `worklet` related code might not work

Firstly need export web UI in `app/`:

```sh
cd app && npx expo export -p web
```

Then copy the `app/dist` folder to `pear/dist`

```sh
cd .. && cp -r app/dist pear/dist
```

In `pear/dist` need change the default import path in `pear/dist/index.html` from `/_expo` (absolute path) to `./_expo` (relative path)

```sh
sed -i "s@/_expo@./_expo@g" pear/dist/index.html
```

Then we open the pear desktop with command:

```sh
cd pear && pear dev
```

Then you can use react-native UI with pear desktop

## What's next 🛤️

Can follow [Making a Pear Desktop Application](https://docs.pears.com/guides/making-a-pear-desktop-app) to continue the journey.
