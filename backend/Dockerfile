
FROM node:16

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

EXPOSE 5001
CMD ["node", "server"]