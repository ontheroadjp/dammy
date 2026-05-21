# 使い方

## パターン 1 — 一番シンプルな使い方

引数なしで `dammy.sh` を実行すると、カレントディレクトリにランダムな名前の `.txt` ファイルが1つ生成されます。

```bash
$ dammy.sh
$ tree
.
└── 0hi)_mB.wf.txt
```

---

## パターン 2 — 複数のファイルを一気に作成

`-n` オプションで生成するファイル数を指定します。

```bash
$ dammy.sh -n 5
$ tree
.
├── $qxT2+_'uW.txt
├── Hk3mNzKs.txt
├── pdK:gXwu.Q.txt
├── tl4NUT(q7b.txt
└── Vu8nXjBsLe.txt
```

---

## パターン 3 — 拡張子を指定する

`-e` オプションで任意の拡張子のファイルを生成します。

```bash
$ dammy.sh -n 3 -e csv
$ tree
.
├── ;mSu179.QE.csv
├── JGElYbT3d\.csv
└── tyP+\woXGQ.csv
```

---

## パターン 4 — 実際の画像ファイルを生成する

画像フォーマットを指定すると、ImageMagick を使って実際の画像ファイルを生成します。グレー一色の背景にサイズが中央に表記されたシンプルな画像で、Web 開発のプレースホルダーとしてすぐ使えます。

対応フォーマット: `jpg` `jpeg` `png` `gif` `bmp` `tiff` `webp`

```bash
$ dammy.sh -n 3 -e jpg
$ tree
.
├── 100x100_1.jpg
├── 100x100_2.jpg
└── 100x100_3.jpg
```

### `-s` で画像サイズを指定

```bash
$ dammy.sh -n 4 -e png -s 320x240
$ tree
.
├── 320x240_1.png
├── 320x240_2.png
├── 320x240_3.png
└── 320x240_4.png
```

---

## パターン 5 — ディレクトリの中にファイルを作成

引数にディレクトリパスを渡します。存在しないディレクトリは自動で作成されます。

```bash
$ dammy.sh -n 3 work
$ tree
.
└── work
    ├── 9BcTRkOgLw.txt
    ├── J(q=E.@Ma0.txt
    └── x&bY,2s)qg.txt
```

---

## パターン 6 — 複数のディレクトリに同時に作成

複数のパスを渡すと、それぞれのディレクトリにファイルを生成します。

```bash
$ dammy.sh -n 2 assets/images assets/css assets/js
$ tree
.
└── assets
    ├── css
    │   ├── 4Jd8wNkR.txt
    │   └── hR2nQvLw.txt
    ├── images
    │   ├── 3Kp9mXtA.txt
    │   └── uZ7bYcFe.txt
    └── js
        ├── aX1mBqTy.txt
        └── sF6vUzPc.txt
```

---

## パターン 7 — 深い階層のディレクトリツリーを作成

スラッシュ区切りで指定すると、中間ディレクトリも自動で作成されます。

```bash
$ dammy.sh -n 2 project/src/components
$ tree
.
└── project
    └── src
        └── components
            ├── :w9a@DmC~N.txt
            └── Ab3Kp!mQvX.txt
```

---

## パターン 8 — 全階層にファイルを作成（`--each`）

`--each` を付けると、最深ディレクトリだけでなくパス上の全ディレクトリにファイルを生成します。

```bash
$ dammy.sh -n 2 project/src/components --each
$ tree
.
└── project
    ├── Pq7mNzKsYo.txt
    ├── Vu8nXjBsLe.txt
    └── src
        ├── &dGzWh!F2f.txt
        ├── Hk3mNzKs.txt
        └── components
            ├── %\'fRw2z,h.txt
            └── yLv*lTz\BG.txt
```

---

## パターン 9 — シェルのブレース展開と組み合わせる

シェルのブレース展開を使って、分岐したディレクトリツリーを一発で構築できます。

```bash
$ dammy.sh -n 2 src/{components,pages,utils}
$ tree
.
└── src
    ├── components
    │   ├── Kd4pRmTzWq.txt
    │   └── Vu8nXjBsLe.txt
    ├── pages
    │   ├── 9k~MYXwoH!.txt
    │   └── ey\%lAFx2V.txt
    └── utils
        ├── Ab3Kp!mQvX.txt
        └── :w9a@DmC~N.txt
```

---

## パターン 10 — ブレース展開 ＋ `--each`

ブレース展開と `--each` を組み合わせると、分岐した全ディレクトリレベルにファイルを配置できます。

```bash
$ dammy.sh -n 2 hoge/{foo,bar}/piyo --each
$ tree
.
└── hoge
    ├── ) R a Y A .txt
    ├── H t 8 9 h .txt
    ├── bar
    │   ├── ! + w 2 q .txt
    │   ├── , ) R ; c .txt
    │   └── piyo
    │       ├── % U 2 P L .txt
    │       └── 5 R J j c .txt
    └── foo
        ├── $ A P H _ .txt
        ├── J Z d ' a .txt
        └── piyo
            ├── : L w & I .txt
            └── A e @ j & .txt
```

---

## パターン 11 — 複数ディレクトリにダミー画像を配置

ブレース展開と組み合わせて、複数のディレクトリにダミー画像をまとめて配置できます。フロントエンドのアセット構造を素早く作るのに便利です。

```bash
$ dammy.sh -n 3 -e jpg -s 800x600 images/{pc,sp,tablet}
$ tree
.
└── images
    ├── pc
    │   ├── 800x600_1.jpg
    │   ├── 800x600_2.jpg
    │   └── 800x600_3.jpg
    ├── sp
    │   ├── 800x600_1.jpg
    │   ├── 800x600_2.jpg
    │   └── 800x600_3.jpg
    └── tablet
        ├── 800x600_1.jpg
        ├── 800x600_2.jpg
        └── 800x600_3.jpg
```

---

## パターン 12 — 特殊なファイル名

### 記号なし

`--no-symbol` で英数字のみのファイル名を生成します。

```bash
$ dammy.sh -n 3 --no-symbol
$ tree
.
├── Q5aocxH9uI.txt
├── TfxZIic3Rg.txt
└── ucmiz657Ae.txt
```

### 空白入り

`--with-whitespace` でファイル名にスペースを含めます。スペース入りパスの処理をテストするのに便利です。

```bash
$ dammy.sh -n 3 --with-whitespace
$ tree
.
├── J L $ A ( .txt
├── T w N V c .txt
└── V n 0 ) Z .txt
```

### 全角文字入り

`--zenkaku` でファイル名に日本語（全角）を含めます。マルチバイトファイル名の処理をテストするのに便利です。

```bash
$ dammy.sh -n 3 --zenkaku
$ tree
.
├── 3aしにmう.txt
├── Xたれ9かi.txt
└── ゆBwはZ1.txt
```

---

## パターン 13 — `--cold-run` で事前確認

実行前に生成されるファイル構造を確認したい場合は `--cold-run` を付けます。実際にはファイルを生成せず、ツリーのプレビューだけを表示します。

```bash
$ dammy.sh -n 3 -e jpg hoge/{foo,bar}/piyo --each --cold-run
.
└── hoge
    ├── 100x100_1.jpg
    ├── 100x100_2.jpg
    ├── 100x100_3.jpg
    ├── bar
    │   ├── 100x100_1.jpg
    │   ├── 100x100_2.jpg
    │   ├── 100x100_3.jpg
    │   └── piyo
    │       ├── 100x100_1.jpg
    │       ├── 100x100_2.jpg
    │       └── 100x100_3.jpg
    └── foo
        ├── 100x100_1.jpg
        ├── 100x100_2.jpg
        ├── 100x100_3.jpg
        └── piyo
            ├── 100x100_1.jpg
            ├── 100x100_2.jpg
            └── 100x100_3.jpg
```

問題なければ `--cold-run` だけを外して同じコマンドを実行してください。

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
