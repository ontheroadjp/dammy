# dammy
This script generates dammy file.

[![docs](https://github.com/ontheroadjp/dammy/actions/workflows/docs.yml/badge.svg)](https://github.com/ontheroadjp/dammy/actions/workflows/docs.yml)

## Getting Started


```bash
git clone ontheroadjp/dammy

# for bash
echo 'path/to/clone/dammy-dir' >> .bashrc

# for zsh
echo 'path/to/clone/dammy-dir' >> .zshrc
```



## Usage

### Generate a dammy file in current directory

```bash
dammy
```

#### result

```bash
.
└── 2dxKEcUK.txt
```

- No arguments and no options you need.
- File extention of the dammy file generated will be '.txt' in default.
- You are able to change file extension with ``-e`` option.

### Generate three dammy files into hoge/ and foo/bar/ directory.

```bash
dammy hoge foo/bar -n 3
```

#### result

```bash
.
├── foo
│   └── bar
│       ├── BoIclQfM.txt
│       ├── Z0aA185Z.txt
│       └── vwoYJ03u.txt
└── hoge
    ├── 2neoJnI6.txt
    ├── DXgrDajK.txt
    └── m5rNjpY4.txt
```

- If there is not ``hoge/`` or ``foo/bar/`` directory it automatically created.
- You can output only under the ``HOME`` directory.
- Specify the output destination as a relative path.
- In the relative path of the output destination ``../`` cannot be used.



### The brace expansion is going to be work well.

```bash
dammy -n 3 hoge/{foo,bar}
```

#### result

```bash
.
└── hoge
    ├── bar
    │   ├── RSiLTWlk.txt
    │   ├── h6L9J9cA.txt
    │   └── s0cpZvdE.txt
    └── foo
        ├── fCAEjWIS.txt
        ├── uj9hoiTt.txt
        └── zwUpNxKz.txt
```

## Cold Run

If you add the ``--cold-run`` option, the output will be displayed in a tree, so you can check the output beforehand.

When the ``--cold-run`` option is specified, the actual output is not performed.

```bash
$ dammy hoge foo/bar piyo -n 3 --each --cold-run
.
├── foo
│   ├── JaOFPXtT.txt
│   ├── bar
│   │   ├── ChWqBDpc.txt
│   │   ├── FIqFQg2S.txt
│   │   └── PWL6yHyF.txt
│   ├── tBy4zN5v.txt
│   └── ystLA34m.txt
├── hoge
│   ├── 42Ch6Iev.txt
│   ├── Iq0UpSmA.txt
│   └── ibXAsoiP.txt
└── piyo
    ├── 0wb1VQy8.txt
    ├── GtaPgR4g.txt
    └── lfz9rUoX.txt

4 directories, 12 files
```

### Generate dummy image files

For image formats (`jpg`, `jpeg`, `png`, `gif`, `bmp`, `tiff`, `webp`), actual image files are generated instead of empty files. Each image is filled with gray and has the size label drawn in the center.

> **Requirement:** [ImageMagick](https://imagemagick.org/) must be installed.
> ```bash
> # macOS
> brew install imagemagick
> # Ubuntu
> sudo apt install imagemagick
> ```

#### Generate three 100x100 JPEGs (default size)

```bash
dammy -n 3 -e jpg
```

```
.
├── 3Kp9mXtA.jpg
├── hR2nQvLw.jpg
└── uZ7bYcFe.jpg
```

#### Generate three 200x150 PNGs with `-s` option

```bash
dammy -n 3 -e png -s 200x150
```

```
.
├── 4Jd8wNkR.png
├── aX1mBqTy.png
└── sF6vUzPc.png
```

#### Generate images into subdirectories

```bash
dammy -n 2 -e jpg -s 300x200 images/{thumbnails,originals}
```

```
.
└── images
    ├── originals
    │   ├── bH3nKpQm.jpg
    │   └── tY7wVxLa.jpg
    └── thumbnails
        ├── cR5mZdFs.jpg
        └── uN2kXjWo.jpg
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
  -w, --whitespace               Contain whitespace characters
  -z, --zenkaku                  Contain 2-bits characters
      --no-symbol                No containing symbol characters
      --each                     Create a file in the specified intermediate directory
      --cold-run                 Run script as test running
      --verbose                  Print various logging information
```

