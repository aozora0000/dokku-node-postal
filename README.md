# dokku用郵便番号変換くん

## 概要
node.jsで動作する日本郵政スクレイピングツールです。

レスポンスはjson形式です。

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

## 実行
```shell
$ curl -X GET http://dokku-node-postal.[DOKKU_HOST]/1000001
{"error":false,"zipcode":"100-0001","region":"東京都","city":"千代田区","town":["千代田","チヨダ"]}
```

## レスポンス
パラメータ |  形式   | 内容
:---------:|:-------:|:----:
error      | boolean | エラーの有無
zipcode    | string  | ヒットした郵便番号
region     | string  | 都道府県
city       | string  | 市
town       | array   | 町(漢字/カタカナ)
