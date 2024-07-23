FROM node:18.17.1

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "start"]
