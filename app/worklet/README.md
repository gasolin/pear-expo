## Pack addon

Can follow below commands to pack for android addon

```sh
npm install -g bare-make
git clone https://github.com/holepunchto/bare-addon.git
cd bare-addon
npm install
bare-make generate --platform android --arch arm64
bare-make generate --platform ios --arch arm64
bare-make generate --platform ios --arch arm64 --simulator
bare-make build
npm pack
```

> [!Note]
> When addon code change, need remove `build/`, `prebuild/` folder then run `bare-dev` command
