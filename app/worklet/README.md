## Pack addon

Can follow below commands to pack for android addon

```sh
npm install -g bare-runtime bare-dev
git clone https://github.com/holepunchto/bare-addon.git
cd bare-addon
npm install
bare-dev install --platform android --arch arm64 --android-ndk 26.1.10909125 --android-api 34
npm pack
```

> [!Note]
> When addon code change, need remove `build/`, `prebuild/` folder then run `bare-dev` command
