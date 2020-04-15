FROM node:9

RUN mkdir -p /usr/app

COPY . /usr/app/

WORKDIR /usr/app

RUN npm install

EXPOSE 3001

CMD ["npm", "start"]