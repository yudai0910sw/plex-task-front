# 株式会社プレックスのインターン選考課題

## 課題内容
- 提出期限　2週間以内
- 要件<br>課題は自身のGitHubアカウントにパブリックな状態で公開すること<br>下記の技術スタックで開発し、バックエンドとフロントエンドでレポジトリを1つずつ作成すること<br>各レポジトリ直下のREADME.mdにローカルで実行するための方法をまとめること
- 制作物に関して<br>Twitterのような掲示板サイト<br>閲覧/投稿ができること<br>画面数は1ページで良い<br>ログイン機能は無くて良い<br>ローカルで動かせれば良いので、サーバーなどをホスティングする必要はない<br>デザインは必要最低限で良い
- 技術スタック<br>
 --バックエンド<br>
Ruby<br>
Ruby on Rails<br>
graphql-ruby<br>
--フロントエンド<br>
TypeScript<br>
Next.js<br>
Apollo Client<br>
--データベース<br>
PostgreSQL<br>

## 制作環境
|名前|バージョン|役割|
|---|---|---|
|Next.js|v16.14.0|フロントエンド|
|Ruby on rails|Ruby2.6.2 Rails6.1.4.6|バックエンド|
|PostgreSQL|---|データベース|

## 実際に動作を確認する
動作させるにはNode.jsをインストールした環境が必要。
環境が用意できたら下記手順を実行してください
1. 任意のディレクトリでリポジトリの取得
```
$ git clone git@github.com:YUDAI0910/kadai-front.git
```

2. next.jsの動作に必要なnode_modulesをインストール
```
$ cd kadai-front
$ npm install
```

3. プロジェクトの実行  
※[API側](https://github.com/yudai0910sw/plex-task-api)とは別のターミナルを開いて実行
```
$ npm run dev
```

4. アプリのページを開く
[http://localhost:8080/](http://localhost:8080/)にアクセスしてください。  
バックエンド側が正常に起動できていればアプリの動作を確認できます。

## 苦労した点
・Windowsを使っているので環境構築に50時間くらいかかりました。

## 完成までの流れ
1. ReactのProgateを2日でキャッチアップ
2. next.js ＋ rails について調べ、調べて初めに出てきたDockerを使うやり方で制作する。
3. しかし、うまく環境構築ができず多くの時間がかかる。
4. 兄からの助言でローカルでやればという言葉でローカルに切り替える。
5. そこでWindowsではWSL2をインストールしてUbuntu上でやることを知る。
6. しかし、なぜかうまくいかないのでまた兄から助言をもらいNuxt.jsで一回やってみなと言われる
7. Nuxt.jsを使ったことでうまく制作、ruby-Graphql,ApolloClientについて理解が深まる。
8. ようやくNext.jsを使って制作に取り組み、完成に至った。

## フロント側で参考にした記事
https://zenn.dev/kei178/articles/43172ba33eece4
https://qiita.com/kazama1209/items/5c07d9a65ef07a02a4f5
https://nakatanorihito.com/programming/docker-rails-postgresql/
https://qiita.com/soutaschool/items/2f65d9bec3753d48bbc0
https://tns-blog.com/1
https://tech.fusic.co.jp/posts/2019-08-23-rails-nuxt-graphql-todoapp/
https://qiita.com/ryubb_SU/items/b430eb77f779257c2a48
