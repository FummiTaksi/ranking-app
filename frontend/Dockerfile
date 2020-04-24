FROM node:13

RUN mkdir -p /usr/app
WORKDIR /usr/app

COPY package*.json /usr/app/

RUN npm ci

COPY . /usr/app/


EXPOSE 3000

CMD ["npm", "start"]