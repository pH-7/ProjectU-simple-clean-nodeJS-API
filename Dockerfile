# Set the desire Node version
ARG NODE_VERSION=16

# Use Node image with Alpine as lot more lightweight than Debian
ARG BASE_IMAGE=alpine


FROM node:${NODE_VERSION}-${BASE_IMAGE}

RUN mkdir -p /api
WORKDIR /api

COPY package.json /api/package.json
RUN npm install
COPY . /api

# Although optional, always good practice to add EXPOSE here to document the port behavior
EXPOSE 4000
CMD [ "npm", "start" ]
