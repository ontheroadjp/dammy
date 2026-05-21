# Setup

## Requirements

- **Bash** — dammy is a Bash script. It runs on macOS and Linux.
- **ImageMagick** — Required only when generating image files (jpg, png, gif, etc.). If ImageMagick is not installed and you specify an image format, dammy will show an error with installation instructions and exit.

### Install ImageMagick

```bash
# macOS
$ brew install imagemagick

# Ubuntu / Debian
$ sudo apt install imagemagick

# CentOS / RHEL
$ sudo yum install imagemagick
```

## Install dammy

Clone the repository and add the directory to your `PATH`.

```bash
$ git clone https://github.com/ontheroadjp/dammy
```

```bash
# for bash
$ echo 'export PATH=/path/to/dammy:$PATH' >> ~/.bash_profile

# for zsh
$ echo 'export PATH=/path/to/dammy:$PATH' >> ~/.zprofile
```

Reload your shell and verify:

```bash
$ dammy.sh --version
dammy v1.3.5
```

::: tip
dammy only creates files under your `HOME` directory. Absolute paths and paths containing `../` are rejected for safety.
:::

## Uninstall

```bash
$ rm -rf /path/to/dammy
```

Then remove the `PATH` line you added to `.bash_profile` or `.zprofile`.
