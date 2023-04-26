#nodejs 18.15を使いたいので、nodejsのイメージを使う
FROM node:18.15
#作業ディレクトリを作成
WORKDIR /app
#package.jsonをコピー,jsonfileはnnpm installで使うための設計書てきなやつ
COPY package.json /app
#package.jsonに記載されているパッケージをインストール
RUN npm install
#.をappにコピー
COPY . /app
ENV NODE_ENV=development
#ポート3000を開放
EXPOSE 3000
#コンテナ起動時に実行するコマンド
CMD ["npm", "run", "dev"]
