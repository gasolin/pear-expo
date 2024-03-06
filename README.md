fangzai 防災 - 台灣災前災時應變 APP

## 目錄

app/
pear/

## 網頁

1. cd app && npx expo start
1. 按 w

FYR 加入 PWA https://docs.expo.dev/guides/progressive-web-apps/

## App

1. cd app && npx expo start
1. 按 a (Android) 或 i (iOS)

## 桌面

從 app/ 匯出成網站並複製到 pear/dist 資料夾

1. cd app && npx expo export -p web
1. cp -r app/dist pear/dist
1. sed -i "s@/_expo@./_expo@g" pear/dist/index.html

開啟 pear desktop

1. cd pear && pear dev
