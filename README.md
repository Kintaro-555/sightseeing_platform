# sightseeing_platform
バラバラに点在する観光地の情報の一元化を図るプラットフォームです。

# Demo
![スクリーンショット 2022-03-08 18 29 51](https://user-images.githubusercontent.com/86187215/157208441-92cc1497-b192-455c-961e-a6a3d284254e.png)
![スクリーンショット 2022-03-08 18 30 00](https://user-images.githubusercontent.com/86187215/157208454-67e343b3-fcde-4d00-9b31-6152c7e19e65.png)

# Requirement
* node v14.14.4
# Usage
```bash
git clone git@github.com:Kodai-Okimoto/sightseeing_platform.git
docker-compose up -d
docker-compose exec app bash
node index.js
```
# Memo
- 観光地ランキング（観光地の動的収集（スクレイピング）、データベース格納）
- 掲示板（ 画像投稿機能、絞り込み機能（国名））
- 各種SNSとの連携（ Twitter API、Instagram Graph API）
- セキュリティ（XSS、SQLインジェクション、CSRF）
- デプロイ(パブリッククラウド)
