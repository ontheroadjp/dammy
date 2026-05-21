# セットアップ

## 必要環境

- **Bash** — dammy は Bash スクリプトです。macOS および Linux で動作します。
- **ImageMagick** — 画像ファイル（jpg, png, gif など）を生成する場合のみ必要です。未インストールの状態で画像フォーマットを指定すると、エラーとインストール方法を表示して終了します。

### ImageMagick のインストール

```bash
# macOS
$ brew install imagemagick

# Ubuntu / Debian
$ sudo apt install imagemagick

# CentOS / RHEL
$ sudo yum install imagemagick
```

## dammy のインストール

リポジトリを clone して、ディレクトリを `PATH` に追加します。

```bash
$ git clone https://github.com/ontheroadjp/dammy
```

```bash
# bash の場合
$ echo 'export PATH=/path/to/dammy:$PATH' >> ~/.bash_profile

# zsh の場合
$ echo 'export PATH=/path/to/dammy:$PATH' >> ~/.zprofile
```

シェルを再読み込みして動作確認します。

```bash
$ dammy.sh --version
dammy v1.3.5
```

::: tip
dammy はホームディレクトリ配下にのみファイルを生成します。絶対パスや `../` を含むパスはセキュリティのため拒否されます。
:::

## アンインストール

```bash
$ rm -rf /path/to/dammy
```

`.bash_profile` または `.zprofile` に追加した `PATH` の設定を削除して完了です。
