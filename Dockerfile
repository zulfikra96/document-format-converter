FROM node:14

WORKDIR /home/app

COPY . .

RUN npm install && npm run build

RUN npm run build

EXPOSE 3400