# 使い方

## 基本的な使い方

引数なしで ``dammy.sh`` を実行すると、カレントディレクトリにダミーの `.txt` ファイルが1つ生成されます。

```bash
$ dammy.sh
$ tree
.
└── 0hi)_mB.wf.txt
```

---

## ファイルの生成

### ファイル数の指定

`-n` オプションで生成するファイル数を指定します。

```bash
$ dammy.sh -n 3
$ tree
.
├── $qxT2+_'uW.txt
├── pdK:gXwu.Q.txt
└── tl4NUT(q7b.txt
```

### 拡張子の指定

`-e` オプションで拡張子を指定します。デフォルトは `txt` です。

```bash
$ dammy.sh -n 3 -e csv
$ tree
.
├── ;mSu179.QE.csv
├── JGElYbT3d\.csv
└── tyP+\woXGQ.csv
```

---

## 画像ファイルの生成

`-e` に画像フォーマットを指定すると、空ファイルの代わりに ImageMagick を使って**実際の画像ファイル**を生成します。グレー一色の背景に画像サイズが中央に表記されたシンプルな画像で、Web 開発のモックアップやフロントエンドのテストにすぐ使えます。

対応フォーマット: `jpg` `jpeg` `png` `gif` `bmp` `tiff` `webp`

ファイル名は画像サイズになります（例: `100x100.jpg`）。複数生成時は連番が付きます。

```bash
$ dammy.sh -n 3 -e jpg
$ tree
.
├── 100x100_1.jpg
├── 100x100_2.jpg
└── 100x100_3.jpg
```

### 画像サイズの指定

`-s` オプションで画像サイズを `幅x高さ` の形式で指定します。デフォルトは `100x100` です。

```bash
$ dammy.sh -n 3 -e png -s 320x240
$ tree
.
├── 320x240_1.png
├── 320x240_2.png
└── 320x240_3.png
```

::: tip
画像生成には ImageMagick のインストールが必要です。未インストールの場合、dammy はインストール方法を案内してエラー終了します。
:::

---

## ファイル名オプション

### 記号なし

``--no-symbol`` を付けると、英数字のみのファイル名でファイルを生成します。

```bash
$ dammy.sh -n 3 --no-symbol
$ tree
.
├── Q5aocxH9uI.txt
├── TfxZIic3Rg.txt
└── ucmiz657Ae.txt
```

### 空白入り

``--with-whitespace`` を付けると、ファイル名にスペースを含めます。スペース入りパスの処理をテストしたいときに便利です。

```bash
$ dammy.sh -n 3 --with-whitespace
$ tree
.
├── J L $ A ( .txt
├── T w N V c .txt
└── V n 0 ) Z .txt
```

### 全角文字入り

``--zenkaku`` を付けると、ファイル名に全角文字（日本語）を含めます。マルチバイトファイル名の処理をテストしたいときに便利です。

```bash
$ dammy.sh -n 3 --zenkaku
$ tree
.
├── 3aしにmう.txt
├── Xたれ9かi.txt
└── ゆBwはZ1.txt
```

---

## ディレクトリの生成

引数にパスを渡すと、ディレクトリを作成してその中にファイルを生成します。中間ディレクトリが存在しない場合は自動で作成されます。

```bash
$ dammy.sh hoge/foo/bar -n 2
$ tree
.
└── hoge
    └── foo
        └── bar
            ├── :w9a@DmC~N.txt
            └── Ab3Kp!mQvX.txt
```

### 複数のディレクトリ

複数のパスを渡すと、それぞれのディレクトリにファイルを生成します。

```bash
$ dammy.sh hoge foo bar
$ tree
.
├── bar
│   └── J(q=E.@Ma0.txt
├── foo
│   └── x&bY,2s)qg.txt
└── hoge
    └── 9BcTRkOgLw.txt
```

### 中間ディレクトリにもファイルを生成

``--each`` を付けると、最深のディレクトリだけでなく、パス上の全ディレクトリにファイルを生成します。

```bash
$ dammy.sh hoge/foo/bar --each
$ tree
.
└── hoge
    ├── &dGzWh!F2f.txt
    ├── foo
    │   ├── Pq7mNzKsYo.txt
    │   └── bar
    │       └── %\'fRw2z,h.txt
    └── yLv*lTz\BG.txt
```

---

## シェルのブレース展開

シェルのブレース展開と組み合わせることができます。

```bash
$ dammy.sh hoge/{foo,bar}/piyo -n 2
$ tree
.
└── hoge
    ├── bar
    │   └── piyo
    │       ├── ey\%lAFx2V.txt
    │       └── 9k~MYXwoH!.txt
    └── foo
        └── piyo
            ├── Kd4pRmTzWq.txt
            └── Vu8nXjBsLe.txt
```

---

## Cold run（事前確認）

``--cold-run`` を付けると、実際にはファイルを生成せず、生成される予定のディレクトリツリーだけを表示します。実行前の確認に使えます。

```bash
$ dammy.sh hoge/{foo,bar}/piyo --each -n 3 --cold-run
.
└── hoge
    ├── +_60SaTUoh.txt
    ├── COrDP*WZ2X.txt
    ├── S:0myGYPX(.txt
    ├── bar
    │   ├── 9\\=o7y5):e.txt
    │   ├── CJso1@z)ZD.txt
    │   ├── Lg7)ruOtbH.txt
    │   └── piyo
    │       ├── &:u-BmLSa3.txt
    │       ├── _j,eoIl1nZ.txt
    │       └── gd,5xhU(!o.txt
    ├── d6g.pTULy9.txt
    ├── foo
    │   ├── 0A)T=qK@Uh.txt
    │   ├── R8*.40;B_u.txt
    │   ├── kd$%K,)24l.txt
    │   └── piyo
    │       ├── (\\3p0ibK1S.txt
    │       ├── B0dGSQxzmv.txt
    │       └── ~L3\\SGc$X9.txt
    ├── n(x5@_alTr.txt
    └── nCH:qsx\\(f.txt

5 directories, 18 files
```

問題なければ ``--cold-run`` だけを外して同じコマンドを実行してください。

---

## オプション一覧

| オプション | 説明 |
|---|---|
| `-h`, `--help` | ヘルプを表示して終了 |
| `-v`, `--version` | バージョンを表示して終了 |
| `-n`, `--number` | 生成するファイル数（デフォルト: 1） |
| `-e`, `--ext` | ファイル拡張子（デフォルト: `txt`） |
| `-s`, `--size` | 画像サイズを `幅x高さ` で指定（デフォルト: `100x100`）。画像フォーマット指定時のみ有効 |
| `-w`, `--with-whitespace` | ファイル名に空白を含める |
| `-z`, `--zenkaku` | ファイル名に全角文字を含める |
| `--no-symbol` | ファイル名から記号を除外する |
| `--each` | 全ての中間ディレクトリにもファイルを生成する |
| `--cold-run` | 実際にはファイルを生成せず、プレビューのみ表示 |
| `--verbose` | デバッグ情報を出力する |
