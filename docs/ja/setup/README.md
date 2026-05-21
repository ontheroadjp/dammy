# セットアップ

## インストール

リポジトリを git clone して PATH を通すだけで、インストール完了です。

```bash
$ git clone https://github.com/ontheroadjp/dammy

# for bash
$ echo 'PATH=/path/to/dammy:$PATH' >> .bash_profile

# for zsh
$ echo 'PATH=/path/to/dammy:$PATH' >> .zprofile
```

### ImageMagick（オプション）

ImageMagick は画像ファイル（jpg, jpeg, png, gif, bmp, tiff, webp）を生成する場合のみ必要です。

```bash
# macOS
$ brew install imagemagick

# Ubuntu
$ sudo apt install imagemagick
```

## アンインストール

```bash
$ rm -rf /path/to/dammy
```
``.bash_profile`` または ``.zprofile`` に追加した PATH の設定を削除します。

以上で完了です。
