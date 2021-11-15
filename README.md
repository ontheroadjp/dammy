# dammy
This script generates dammy file.



## Getting Started

This script require dazai script.
see: [ontheroadjp/dazai](https://github.com/ontheroadjp/dazai.git)


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

- No arguments and no options you need.
- File extention of the dammy file generated will be '.txt' in default.
- You are able to change file extension with ``-e`` option.

### Generate a dammy file with jpg extention into test/ directory.

```bash
dammy -e jpg test
```

- If there is not test directory it automatically created.

### Generate five dammy files into test/ directory.

```bash
dammy test -n 5
```

### Generate dammy file into multiple directories

```bash
dammy test/tokyo_{00..02}
```

- The brace expansion is going to be work well.



## Options
```bash
Options:
  -h, --help                     Show help.
  -v, --version                  Show script version.
  -n, --number                   Specify the number of files to create.
  -e, --ext                      Specify the extension of the file to be created.
      --verbose                  Print various logging information
```

