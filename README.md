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

## 設定
### version 2.1
circleci config version 2.1を利用することで以下の機能が利用できる

- [executors](https://circleci.com/docs/2.0/configuration-reference/#executors-requires-version-21): 実行環境を定義して再利用できる
- [commands](https://circleci.com/docs/2.0/configuration-reference/#commands-requires-version-21): ステップを定義して再利用できる
- [Orbs](https://circleci.com/docs/2.0/configuration-reference/#orbs-requires-version-21): ジョブ設定を公開して再利用できる

### workflow

### workspace
ワークスペースを利用することでジョブ間でファイルを共有できる。
ワークスペースはワークフローの実行ごとに固有。
