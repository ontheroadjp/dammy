# Usage

## Basic usage

Running ``dammy.sh`` with no arguments creates a single dummy `.txt` file in the current directory.

```bash
$ dammy.sh
$ tree
.
└── 0hi)_mB.wf.txt
```

---

## File generation

### Number of files

Use `-n` to specify how many files to create.

```bash
$ dammy.sh -n 3
$ tree
.
├── $qxT2+_'uW.txt
├── pdK:gXwu.Q.txt
└── tl4NUT(q7b.txt
```

### File extension

Use `-e` to set the file extension. Default is `txt`.

```bash
$ dammy.sh -n 3 -e csv
$ tree
.
├── ;mSu179.QE.csv
├── JGElYbT3d\.csv
└── tyP+\woXGQ.csv
```

---

## Image file generation

When you specify an image format with `-e`, dammy generates **actual image files** using ImageMagick instead of empty files. Each image is a gray canvas with the dimensions printed at the center — useful as placeholder images in web development and UI mockups.

Supported formats: `jpg` `jpeg` `png` `gif` `bmp` `tiff` `webp`

The filename is set to the image dimensions (e.g. `100x100.jpg`). When generating multiple files, a sequential number is appended.

```bash
$ dammy.sh -n 3 -e jpg
$ tree
.
├── 100x100_1.jpg
├── 100x100_2.jpg
└── 100x100_3.jpg
```

### Image size

Use `-s` to specify the image dimensions in `WxH` format. Default is `100x100`.

```bash
$ dammy.sh -n 3 -e png -s 320x240
$ tree
.
├── 320x240_1.png
├── 320x240_2.png
└── 320x240_3.png
```

::: tip
ImageMagick must be installed to use image generation. If it is not installed, dammy will show an error with installation instructions.
:::

---

## File name options

### No symbols

``--no-symbol`` generates file names using only alphanumeric characters.

```bash
$ dammy.sh -n 3 --no-symbol
$ tree
.
├── Q5aocxH9uI.txt
├── TfxZIic3Rg.txt
└── ucmiz657Ae.txt
```

### Include whitespace

``--with-whitespace`` includes spaces in file names. Useful for testing how your application handles paths with spaces.

```bash
$ dammy.sh -n 3 --with-whitespace
$ tree
.
├── J L $ A ( .txt
├── T w N V c .txt
└── V n 0 ) Z .txt
```

### Include 2-byte characters

``--zenkaku`` includes Japanese (2-byte) characters in file names. Useful for testing multibyte filename handling.

```bash
$ dammy.sh -n 3 --zenkaku
$ tree
.
├── 3aしにmう.txt
├── Xたれ9かi.txt
└── ゆBwはZ1.txt
```

---

## Directory generation

Pass a path as an argument to create the directory and place files inside it. Non-existent intermediate directories are created automatically.

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

### Multiple directories

Pass multiple paths to create files in several directories at once.

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

### Create files in every intermediate directory

``--each`` places files in every directory in the path, not just the deepest one.

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

## Shell brace expansion

dammy works naturally with shell brace expansion.

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

## Cold run

``--cold-run`` shows you the directory tree that *would* be created, without actually creating anything. Use it to verify the output before committing.

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

Once you are happy with the preview, remove ``--cold-run`` and run the same command for real.

---

## Options reference

| Option | Description |
|---|---|
| `-h`, `--help` | Show help and exit |
| `-v`, `--version` | Show version and exit |
| `-n`, `--number` | Number of files to create (default: 1) |
| `-e`, `--ext` | File extension (default: `txt`) |
| `-s`, `--size` | Image size in `WxH` format (default: `100x100`). Image formats only. |
| `-w`, `--with-whitespace` | Include spaces in file names |
| `-z`, `--zenkaku` | Include 2-byte (Japanese) characters in file names |
| `--no-symbol` | Exclude symbol characters from file names |
| `--each` | Create files in every intermediate directory |
| `--cold-run` | Preview output without creating files |
| `--verbose` | Print debug information |
