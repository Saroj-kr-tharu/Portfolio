FROM node:23-alpine

WORKDIR /portfolio/fortend

COPY package*.json /

RUN  npm ci 

COPY . .

CMD  ["npm", "run", "dev"]