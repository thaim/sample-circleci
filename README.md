# sample-circleci

## 実行
### 設定のコンバート
設定ファイルを version 2.1 準拠から 2.0に変更する。
ローカル実行時は version 2.0が必要。

```
$ circleci config process .circleci/config.yml > .circleci/processed.yml
```

### ローカルでの設定バリデーション
config.ymlがyaml文法およびCircleCIフォーマットに準拠しているかチェックする。

```
$ circleci config validate
```

### ローカルでの実行
ジョブ単位であればローカルのDockerでジョブを実行することができる。

```
# default: --config -> .circleci/config.yml, --job build
$ circleci local execute --config .circleci/config.yml --job welcome/run
```
