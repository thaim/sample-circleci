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

version 2.1はメタ的な機能をサポートしている。
version 2.1の設定ファイルを展開して version 2.0 にすると具体的な実行設定になる。

### workflow
CI/CDにおけるパイプラインの仕組みを実現する。
ワークフローを設定することで以下が実現できる：

- ジョブのオーケストレーション(実行順序の制御)
- ジョブ間のファイル共有 (時節のworkspace)
- スケジュールジョブ
- Git のタグやブランチによるフィルタリング

workflows では version: 2を指定する(他は不明)。


### workspace
ワークスペースを利用することでジョブ間でファイルを共有できる。
ワークスペースはワークフローの実行ごとに固有。
`persist_to_workspace` で保存して `attach_workspace` で利用する。

このとき、

- 上流のジョブは、それより下流のワークスペースレイヤを継承できない
- 同名ファイルを「上書き」した場合、下流のレイヤのファイルが使用される
- 同時実行ジョブで同名ファイルを永続化した場合、ワークスペースの展開ができない

類似機能として、キャッシュやアーティファクトがある。
キャッシュはワークフロー間で、アーティファクトはワークフロー終了後にファイルを利用する場合の機能である。
詳細は[Persisting data in workflows: when to use caching, artifacts, and workspaces](https://circleci.com/blog/persisting-data-in-workflows-when-to-use-caching-artifacts-and-workspaces/)を参照。
