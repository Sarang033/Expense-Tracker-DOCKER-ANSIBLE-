FROM node:18 as build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

FROM node:18

WORKDIR /app

COPY --from=build /app ./

EXPOSE 5001
CMD ["npm", "start"]
