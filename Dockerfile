FROM node:8
RUN npm install babel-cli@6.10.1 -g --save
ADD . /
RUN cd /; \
    npm install
EXPOSE 8081
CMD ["babel-node", "index.js"]