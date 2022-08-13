FROM node:16-alpine

RUN mkdir -p /api
WORKDIR /api

COPY package.json /api/package.json
RUN npm install
COPY . /api

EXPOSE 4000
CMD [ "npm", "start" ]
