# Overview

## What is dammy?

**dammy** is a Bash script that instantly generates dummy files and directory trees for testing and development purposes.

Setting up test fixtures by hand — running `mkdir`, `touch`, and other commands one by one — is tedious and error-prone. dammy eliminates that friction with a single command.

### What you can do

- **Generate test dummy files** — Create any number of files with randomized names in one shot. Choose any file extension.
- **Build directory hierarchies** — Create deeply nested directories automatically. No need to pre-create parent directories.
- **Use special characters in names** — Generate files and directories whose names include symbols, whitespace, or Japanese (2-byte) characters. Useful for testing edge cases in file name handling.
- **Generate dummy images for web development** — When an image format is specified (jpg, png, gif, etc.), dammy produces actual image files using ImageMagick. Each image is a gray canvas with the resolution printed at the center — ready to drop into mockups or front-end tests.
- **Preview before creating** — The `--cold-run` flag shows you exactly what would be created, without touching the filesystem.

## Example

Run this single command:

```bash
dammy.sh hoge/{foo,bar}/piyo -n 3 --each --with-whitespace
```

And you get the following tree instantly:

```
hoge
├── ) R a Y A .txt
├── H t 8 9 h .txt
├── \ U X , ! .txt
├── bar
│   ├── ! + w 2 q .txt
│   ├── , ) R ; c .txt
│   ├── d P 9 6 i .txt
│   └── piyo
│       ├── % U 2 P L .txt
│       ├── 5 R J j c .txt
│       └── O S : 3 E .txt
├── d M 6 2 x .txt
├── foo
│   ├── $ A P H _ .txt
│   ├── J Z d ' a .txt
│   ├── i W S _ 1 .txt
│   └── piyo
│       ├── : L w & I .txt
│       ├── A e @ j & .txt
│       └── r W 2 * ( .txt
├── v @ R q j .txt
└── y g R , 9 .txt
```
