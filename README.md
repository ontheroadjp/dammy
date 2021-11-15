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

If you add the ``--cold-run`` option, the output will be displayed in a tree, so you can check the output beforehand.

When the ``--cold-run`` option is specified, the actual output is not performed.

```bash
$ dammy hoge foo/bar piyo -n 3 --each --cold-run                                                                                           
/xxx/xxx/xxx/xxx/xxx
├── 1hWu7xAY.txt
├── 5xRs80KF.txt
├── 8yWPaPh3.txt
├── 9LIk6nMb.txt
├── FNaQ609p.txt
├── foo
│   ├── Cj7zP93w.txt
│   ├── bar
│   │   ├── Egc2l8YA.txt
│   │   ├── HEAIQfnT.txt
│   │   └── z0WmX1Ke.txt
│   ├── dEJkvAiy.txt
│   └── edA1kOqA.txt
├── hoge
│   ├── 9Sk79651.txt
│   ├── vCVT4iJR.txt
│   └── y6zQb8m3.txt
├── piyo
│   ├── ZzsnUIvP.txt
│   ├── qDJrGwmD.txt
│   └── qwl5FaNj.txt
└── sQlh1BA1.txt
```





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
- You can output only under the HOME directory.
- Specify the output destination as a relative path.
- In the relative path of the output destination ``../`` cannot be used.

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

