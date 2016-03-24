FROM mhart/alpine-node:4.2

WORKDIR /src

ADD . .

# If you have native dependencies, you'll need extra tools
RUN apk add --update make gcc g++ python

ADD package.json /src/package.json
RUN npm install -g npm
RUN npm install

# If you had native dependencies you can now remove build tools
 RUN apk del make gcc g++ python && \
   rm -rf /tmp/* /var/cache/apk/* /root/.npm /root/.node-gyp

ADD app/nodemon.json /src/nodemon.json

# WebApp Ports
EXPOSE 3000

CMD npm start