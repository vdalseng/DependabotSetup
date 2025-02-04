#Uses the Official Node.js image based on Debian slim
FROM node:slim

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]