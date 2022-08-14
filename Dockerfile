FROM node:16-alpine

RUN mkdir -p /api
WORKDIR /api

COPY package.json /api/package.json
RUN npm install
COPY . /api

# Although optional, always good practice to add EXPOSE here to document the port behavior
EXPOSE 4000
CMD [ "npm", "start" ]
