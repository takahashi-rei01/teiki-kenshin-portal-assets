# kViewerポータル画面の制御について

このメモは、定期健診提出ポータルで使っているJavaScriptとCSSの役割を説明するものです。

## 使っているファイル

### hc_portal_button.js

kViewerの画面に表示されているリンクを探して、提出ポータル用のボタンに変えるJavaScriptです。

主に次のことをしています。

- 「領収書を提出する」ボタンを作る
- 「健診結果を提出する」ボタンを作る
- 「よくある質問を見る」ボタンを作る
- 各ボタンの下に説明文を追加する
- kViewerのカード部分にCSS用のクラスを付ける

画面上部のヘッダーは、このJSでは追加していません。
ヘッダーはkViewer側のヘッダーコンテンツで管理します。

ページ上部のタイトルは、次のHTMLにします。

```html
<div class="hc-page-title">
  <h1>定期健診提出ポータル</h1>
</div>
```

このタイトル部分は、枠なし・背景色と同じ・中央揃えで表示します。

提出の流れを説明する枠は、次のHTMLを使います。

```html
<div class="hc-flow-box">
  <h2>提出の流れ</h2>

  <ol>
    <li>
      <strong>健康診断を受診後</strong><br>
      まずは、領収書を提出してください。
    </li>
    <li>
      <strong>健診結果が届いた後</strong><br>
      健診結果を提出してください。
    </li>
  </ol>

  <p class="hc-note">
    提出フォームの入力方法については、以下のマニュアルをご確認ください。
  </p>

  <a class="hc-manual-button" href="PDFのURL" target="_blank" rel="noopener noreferrer">
    提出フォーム入力マニュアルを開く
  </a>
</div>
```

### kviewer_custom.css

ポータル画面の見た目を整えるCSSです。

主に次のことをしています。

- 画面全体の背景色を変える
- ヘッダーの余白や枠線を整える
- ボタンをカード型に見せる
- ボタンの色を提出内容ごとに変える
- PCでは横並び、スマホでは縦並びにする

## JSとCSSの分担

| 変更したい内容 | 触る場所 |
| --- | --- |
| ヘッダーの文言を変えたい | kViewer側のヘッダーコンテンツ |
| ボタンの文字を変えたい | hc_portal_button.js |
| 説明文を変えたい | hc_portal_button.js |
| ボタンの色を変えたい | kviewer_custom.css |
| 余白や横幅を変えたい | kviewer_custom.css |
| スマホ表示を調整したい | kviewer_custom.css |

## 現在の制御の流れ

1. kViewerの画面が読み込まれる
2. `hc_portal_button.js` が画面内のリンクを探す
3. URLに `hc-receipt` が含まれていれば、領収書提出用のボタンに変える
4. URLに `hc-result` が含まれていれば、健診結果提出用のボタンに変える
5. URLに `hc-faq` が含まれていれば、FAQ用のボタンに変える
6. ボタンやカードにCSS用のクラスを付ける
7. `kviewer_custom.css` がそのクラスに対して見た目を適用する

## よく触る場所

### ボタン名を変更したい場合

`hc_portal_button.js` の `label` を変更します。

例:

```js
label: '領収書を提出する',
```

### ボタン下の説明文を変更したい場合

`hc_portal_button.js` の `description` を変更します。

例:

```js
description: '受診後に発行された領収書のPDFを提出してください。',
```

### ボタン色を変更したい場合

`kviewer_custom.css` の次の部分を変更します。

```css
--hc-receipt: #c7661d;
--hc-result: #16725d;
--hc-faq: #315f9d;
```

それぞれ、領収書・健診結果・FAQのボタン色です。
