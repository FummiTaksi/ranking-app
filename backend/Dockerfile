FROM node:9

RUN mkdir -p /usr/app
WORKDIR /usr/app

COPY package*.json /usr/app/

RUN npm install

COPY . /usr/app/

EXPOSE 3001

CMD ["npm", "run", "watch"]