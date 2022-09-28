FROM node:latest as angular
WORKDIR /app
COPY package.json /app
RUN npm install --silent
COPY . .
RUN npm run build

FROM nginx:latest
VOLUME /var/cache/nginx
COPY --from=angular /app/dist/oab-app /usr/share/nginx/html

EXPOSE 80

