# 1. For build React app
FROM node:lts AS development

# Set working directory
WORKDIR /app

# 
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

# Same as npm install
RUN npm install

COPY . /app

ENV CI=true
ENV PORT=3000

FROM development AS build

RUN npm run build

CMD [ "npm", "start" ]
