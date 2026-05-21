# 使い方

インストールが済んでいない場合は、先にインストールをしてください。

インストールが完了したら早速 ``dammy.sh`` を使ってみましょう。

## ファイルの生成

``dammy.sh`` コマンドを実行すると、実行したディレクトリにダミーファイルが1つ生成されます。

```bash
$ dammy.sh
$ tree
.
└── 0hi)_mB.wf.txt
```

### 生成するファイルの数

``-n`` オプションを付与すると生成するファイル数を変更できます。

```bash
$ dammy.sh -n 3
$ tree
.
├── $qxT2+_'uW.txt
├── pdK:gXwu.Q.txt
└── tl4NUT(q7b.txt
```

### 生成するファイルの拡張子

``-e`` オプションを付与することによって生成されるファイルの拡張子を変更できます。

```bash
$ dammy.sh -n 3 -e txt
$ tree
.
├── ;mSu179.QE.txt
├── JGElYbT3d\.txt
└── tyP+\woXGQ.txt
```

### 画像ファイルの生成

``-e`` に画像フォーマットを指定すると、ImageMagick を使って実際の画像ファイルを生成します。
画像はグレー一色で、中央に画像サイズが表記されます。

対応フォーマット: ``jpg`` ``jpeg`` ``png`` ``gif`` ``bmp`` ``tiff`` ``webp``

ファイル名は画像サイズになります（例: ``100x100.jpg``）。複数生成時は連番が付きます。

```bash
$ dammy.sh -n 3 -e jpg
$ tree
.
├── 100x100_1.jpg
├── 100x100_2.jpg
└── 100x100_3.jpg
```

#### 画像サイズの指定

``-s`` オプションで画像サイズを ``幅x高さ`` の形式で指定できます。デフォルトは ``100x100`` です。

```bash
$ dammy.sh -n 3 -e png -s 200x150
$ tree
.
├── 200x150_1.png
├── 200x150_2.png
└── 200x150_3.png
```

### 記号なしファイル名

``--no-symbol`` オプションを付与することによって、記号を含まないファイル名でファイルを生成します。

```bash
$ dammy.sh -n 3 --no-symbol
$ tree
.
├── Q5aocxH9uI.txt
├── TfxZIic3Rg.txt
└── ucmiz657Ae.txt
```

### 空白入りファイル名

``--with-whitespace`` オプションを付与することによって空白入りのファイル名でファイルを生成します。

```bash
$ dammy.sh -n 3 --with-whitespace
$ tree
.
├── J L $ A ( .txt
├── T w N V c .txt
└── V n 0 ) Z .txt
```

### 全角文字入りファイル名

``--zenkaku`` オプションを付与することによって全角文字（日本語）入りのファイル名でファイルを生成します。

```bash
$ dammy.sh -n 3 --zenkaku
$ tree
.
├── 3aしにmう.txt
├── Xたれ9かi.txt
└── ゆBwはZ1.txt
```

## ディレクトリの生成

``dammy.sh`` に引数を渡すとディレクトリが作成されて、その中にファイルが1つ生成されます。

```bash
$ dammy.sh hoge
$ tree
.
└── hoge
    └── YQ_7eEW5bH.txt
```

ディレクトリのみを生成することはできません。ディレクトリのみを生成したい場合は ``mkdir`` を使ってください。

::: tip
もちろん ``-e`` オプションや ``-n`` オプションを併用することが可能です。
:::

### 複数のディレクトリ

同時に複数のディレクトリを生成することもできます。

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

### 入れ子にする

ディレクトリは入れ子に出来ます。事前にディレクトリを生成する必要はありません。

```bash
$ dammy.sh hoge/foo/bar
$ tree
.
└── hoge
    └── foo
        └── bar
            └── :w9a@DmC~N.txt
```

``--each`` オプションを付与すると、それぞれのディレクトリにファイルが作成されます。

```bash
$ dammy.sh hoge/foo/bar --each
$ tree
.
└── hoge
    ├── foo
    │   ├── &dGzWh!F2f.txt
    │   └── bar
    │       └── %\'fRw2z,h.txt
    └── yLv*lTz\BG.txt
```

## シェルのブレース展開

``dammy.sh`` はシェルのブレース展開と組み合わせることも可能です。

```bash
$ dammy.sh hoge/{foo,bar}/piyo
$ tree
.
└── hoge
    ├── bar
    │   └── piyo
    │       └── ey\%lAFx2V.txt
    └── foo
        └── piyo
            └── 9k~MYXwoH!.txt
```

## Cold run

``--cold-run`` オプションを付与すると、実際にファイル/ディレクトリは生成されません。

その代わりに ``--cold-run`` オプションを付与しなかった場合に生成されるディレクトリツリーの内容が表示されます。

問題がなければ、``--cold-run`` オプションだけを外して ``dammy.sh`` コマンドを実行してください。

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

## オプション一覧

```bash
Options:
  -h, --help                     ヘルプを表示します
  -v, --version                  バージョンを表示します
  -n, --number                   生成するファイル数を指定します
  -e, --ext                      生成するファイル拡張子を指定します
  -s, --size                     画像サイズを指定します 例: 200x150（デフォルト: 100x100）
                                 画像フォーマット指定時のみ有効: jpg jpeg png gif bmp tiff webp
  -w, --with-whitespace          空白文字入りのファイル名でファイルを生成します
  -z, --zenkaku                  全角文字入りのファイル名でファイルを生成します
      --no-symbol                記号を含まないファイル名でファイルを生成します
      --each                     全ての階層にファイルを生成します
      --cold-run                 コールドランで実行します
      --verbose                  デバッグ情報を出力します
```
