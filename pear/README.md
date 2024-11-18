## Run on Pear Desktop App 💻

pear-expo export the web code (via react-native-web) to run in Pear Desktop App (which is an Electron-like environment)

> [!Note]
> `worklet` related code might not work

Firstly need export web UI in `app/`:

From root folder, run

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
