FROM node:latest
WORKDIR /app
COPY yarn.lock package.json ./
COPY . .
RUN yarn install
ENV PATH="./node_modules/.bin:$PATH"