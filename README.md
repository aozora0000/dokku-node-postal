# dokku用郵便番号変換くん

## 概要
node.jsで動作する日本郵政スクレイピングツールです。

dockerで動作するので、気軽にデプロイ出来ます。

自社サービスや仮組みで使う場合に使えるかもしれません。

[dokku](https://github.com/progrium/dokku),[dokku-alt](dokku-alt/dokku-alt)で動作します。
もしかするとherokuでも動作するかもしれません。

## インストール
*** dokku/dokku-altのインストールは割愛 ***

### dokkuの場合
```shell
$ git clone https://github.com/aozora0000/dokku-node-postal
$ cd dokku-node-postal
$ git remote add dokku dokku@[DOKKU_HOST]:dokku-node-postal
```

### ローカル(node.js導入前提)
```shell
$ git clone https://github.com/aozora0000/dokku-node-postal
$ cd dokku-node-postal
$ npm install
$ gulp run
```
