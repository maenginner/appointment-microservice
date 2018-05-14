FROM node:8
ADD . /
RUN cd /; \
    npm install
EXPOSE 8081
CMD ["babel-node", "index.js"]