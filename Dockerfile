FROM node:18
WORKDIR ./app
RUN npm cache clean --force
RUN npm install -g npm@8.19.4
COPY ./package*.json ./
RUN npm install
COPY ./ ./
RUN npm run build:front
EXPOSE 3000
CMD ["npx", "serve", "-s", "build", "-l", "3000"]
