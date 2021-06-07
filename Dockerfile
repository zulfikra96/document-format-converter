FROM node:14

WORKDIR /home/app

COPY . .

RUN npm install

RUN npm run build

CMD npm run start

EXPOSE 3400