# Usage

If you haven't installed it yet, please do so first.

After the installation is complete, let's try using dammy.

## Generating a file

When the ``dammy.sh`` command is executed, a dummy file will be created in the directory where it was executed.

```bash
$ dammy.sh
$ tree
.
└── 0hi)_mB.wf.txt
```

### Number of files to generate

The number of files to be generated can be changed with the ``-n`` option.

```bash
$ dammy.sh -n 3
$ tree
.
├── $qxT2+_'uW.txt
├── pdK:gXwu.Q.txt
└── tl4NUT(q7b.txt
```

### Extension of the generated file

You can change the extension of the generated file by adding the ``-e`` option.

```bash
$ dammy.sh -n 3 -e txt
$ tree
.
├── ;mSu179.QE.txt
├── JGElYbT3d\.txt
└── tyP+\woXGQ.txt
```

### Generating image files

When an image format is specified with ``-e``, actual image files are generated using ImageMagick.
Each image is filled with gray and has the size label drawn in the center.

Supported formats: ``jpg`` ``jpeg`` ``png`` ``gif`` ``bmp`` ``tiff`` ``webp``

The filename is the image size (e.g. ``100x100.jpg``). For multiple files, a sequential number is appended.

```bash
$ dammy.sh -n 3 -e jpg
$ tree
.
├── 100x100_1.jpg
├── 100x100_2.jpg
└── 100x100_3.jpg
```

#### Specifying image size

Use the ``-s`` option to specify the image size in ``WxH`` format. Default is ``100x100``.

```bash
$ dammy.sh -n 3 -e png -s 200x150
$ tree
.
├── 200x150_1.png
├── 200x150_2.png
└── 200x150_3.png
```

### Symbol-free file names

By giving the ``--no-symbol`` option, files are generated with file names that do not contain symbols.

```bash
$ dammy.sh -n 3 --no-symbol
$ tree
.
├── Q5aocxH9uI.txt
├── TfxZIic3Rg.txt
└── ucmiz657Ae.txt
```

### File names with whitespace

The ``--with-whitespace`` option is used to generate files with whitespace in the file name.

```bash
$ dammy.sh -n 3 --with-whitespace
$ tree
.
├── J L $ A ( .txt
├── T w N V c .txt
└── V n 0 ) Z .txt
```

### File names with 2-byte characters

The ``--zenkaku`` option includes Japanese (2-byte) characters in the file name.

```bash
$ dammy.sh -n 3 --zenkaku
$ tree
.
├── 3aしにmう.txt
├── Xたれ9かi.txt
└── ゆBwはZ1.txt
```

## Creating a directory

When you pass the argument to ``dammy.sh``, a directory will be created and a file will be created in it.

```bash
$ dammy.sh hoge
$ tree
.
└── hoge
    └── YQ_7eEW5bH.txt
```

It is not possible to generate only directories. If you want to generate only a directory, use mkdir.

::: tip
Of course, the ``-e`` and ``-n`` options can be used together.
:::

### Multiple Directories

It is also possible to create multiple directories at the same time.

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

### Nesting

Directories can be nested. There is no need to create the directories in advance.

```bash
$ dammy.sh hoge/foo/bar
$ tree
.
└── hoge
    └── foo
        └── bar
            └── :w9a@DmC~N.txt
```

When the ``--each`` option is given, a file will be created in each directory.

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

## Shell brace expansion

``dammy.sh`` can also be combined with brace expansion of the shell.

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

When the ``--cold-run`` option is given, no files/directories are actually created.

Instead, the contents of the directory tree that would be generated without the ``--cold-run`` option will be displayed.

If there are no problems, just remove the ``--cold-run`` option and run the command.

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

## Options

```bash
Options:
  -h, --help                     Show help
  -v, --version                  Show script version
  -n, --number                   Specify the number of files to create
  -e, --ext                      Specify the extension of the file to be created
  -s, --size                     Specify the image size e.g. 200x150 (default: 100x100)
                                 Only valid for image formats: jpg jpeg png gif bmp tiff webp
  -w, --with-whitespace          Contain whitespace characters
  -z, --zenkaku                  Contain 2-byte characters
      --no-symbol                No containing symbol characters
      --each                     Create a file in the specified intermediate directory
      --cold-run                 Run script as test running
      --verbose                  Print various logging information
```
