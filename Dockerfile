FROM node

COPY ["package.json", "/usr/src/"]

WORKDIR /usr/src

RUN npm install

EXPOSE 3000

COPY [".", "/usr/src/"]

CMD ["npm", "start"]