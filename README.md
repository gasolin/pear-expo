# Pear-Expo

React Native web (Expo) setup for pear desktop

## structure

- app/ - [expo](https://docs.expo.dev/) folder, host the main code and can export web UI as `dist/` folder for pear use
- pear/ - [pear](https://docs.pears.com/guides/starting-a-pear-desktop-project) folder

## Run as Web

1. cd app && npx expo start
1. press `w`

FYR add PWA https://docs.expo.dev/guides/progressive-web-apps/

## Run as Android or iOS App

1. cd app && npx expo start
1. press `a` (Android) or `i` (iOS)

## Run as Pear Desktop

Will export web UI from `app/` to `pear/dist`. Also need change the default import path in `pear/dist/index.html`

1. cd app && npx expo export -p web
1. cp -r app/dist pear/dist
1. sed -i "s@/_expo@./_expo@g" pear/dist/index.html

Then open the pear desktop with command:

1. cd pear && pear dev
