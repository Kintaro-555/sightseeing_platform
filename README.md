# sightseeing_platform
バラバラに点在する観光地の情報の一元化を図るプラットフォームです。

# Requirement
* node v14.14.4
*  
# Usage
```bash
git clone git@github.com:Kodai-Okimoto/sightseeing_platform.git
docker-compose up -d
docker-compose exec app bash
node index.js
```
# Note
- 観光地ランキング
 観光地の動的収集（スクレイピング）
 データベース格納
- 掲示板
 画像投稿機能
 絞り込み機能（国名）
- 各種SNSとの連携
 Twitter API
 Instagram Graph API
- セキュリティ（XSS、SQLインジェクション、CSRF）
- デプロイ(パブリッククラウド)
