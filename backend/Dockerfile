FROM node:9

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY . /usr/app/

EXPOSE 3001

CMD ["npm", "start"]