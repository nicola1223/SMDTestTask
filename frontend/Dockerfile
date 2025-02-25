FROM node:latest
WORKDIR /app
COPY yarn.lock package.json package-lock.json ./
COPY . .
RUN npm install