# Usage

## Pattern 1 — The simplest usage

Run `dammy.sh` with no arguments. One `.txt` file with a random name is created in the current directory.

```bash
$ dammy.sh
$ tree
.
└── 0hi)_mB.wf.txt
```

---

## Pattern 2 — Create multiple files at once

Use `-n` to create several files in one shot.

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

## Pattern 3 — Specify the file extension

Use `-e` to generate files with any extension.

```bash
$ dammy.sh -n 3 -e csv
$ tree
.
├── ;mSu179.QE.csv
├── JGElYbT3d\.csv
└── tyP+\woXGQ.csv
```

---

## Pattern 4 — Generate actual image files

When you specify an image format, dammy generates real image files using ImageMagick — a gray canvas with the size printed at the center. Perfect as placeholder images for web development.

Supported: `jpg` `jpeg` `png` `gif` `bmp` `tiff` `webp`

```bash
$ dammy.sh -n 3 -e jpg
$ tree
.
├── 100x100_1.jpg
├── 100x100_2.jpg
└── 100x100_3.jpg
```

### Specify the image size with `-s`

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

## Pattern 5 — Create files inside a directory

Pass a directory path as an argument. The directory is created automatically if it does not exist.

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

## Pattern 6 — Create files in multiple directories

Pass multiple paths to populate several directories at once.

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

## Pattern 7 — Create a deeply nested directory tree

Slashes create intermediate directories automatically.

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

## Pattern 8 — Place files in every level with `--each`

`--each` creates files not just in the deepest directory, but in every directory along the path.

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

## Pattern 9 — Use shell brace expansion

Combine dammy with the shell's brace expansion to build branching trees.

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

## Pattern 10 — Brace expansion with `--each`

Combine brace expansion and `--each` to fill every directory level in a branching tree.

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

## Pattern 11 — Images into multiple directories

Place dummy images into several directories using brace expansion — great for building a front-end asset structure.

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

## Pattern 12 — Special character file names

### Symbol-free names

Use `--no-symbol` to generate alphanumeric-only file names.

```bash
$ dammy.sh -n 3 --no-symbol
$ tree
.
├── Q5aocxH9uI.txt
├── TfxZIic3Rg.txt
└── ucmiz657Ae.txt
```

### Names with spaces

Use `--with-whitespace` to include spaces — useful for testing how your app handles paths with spaces.

```bash
$ dammy.sh -n 3 --with-whitespace
$ tree
.
├── J L $ A ( .txt
├── T w N V c .txt
└── V n 0 ) Z .txt
```

### Names with 2-byte (Japanese) characters

Use `--zenkaku` to include Japanese characters — useful for testing multibyte filename handling.

```bash
$ dammy.sh -n 3 --zenkaku
$ tree
.
├── 3aしにmう.txt
├── Xたれ9かi.txt
└── ゆBwはZ1.txt
```

---

## Pattern 13 — Preview with `--cold-run`

Not sure what will be created? Add `--cold-run` to preview the output tree without touching the filesystem.

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

Once you are happy with the preview, remove `--cold-run` and run the same command for real.

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
