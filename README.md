[![Build Status](https://travis-ci.org/DanDeller/sputnik.svg?branch=master)](https://travis-ci.org/DanDeller/sputnik)
[![npm](https://img.shields.io/npm/v/npm.svg?maxAge=2592000)]()
[![npm version](https://badge.fury.io/js/express.svg)](https://badge.fury.io/js/express)
[![devDependency Status](https://david-dm.org/dwyl/esta/dev-status.svg)](https://david-dm.org/dwyl/esta#info=devDependencies)

# Sputnik
<h2>A node/express app built on docker.</h2>

<h2>Prerequisites</h2>
<h3>Install Dinghy:</h3>
[https://github.com/codekitchen/dinghy](https://github.com/codekitchen/dinghy)

<h3>Install Docker for Mac:</h3>
[https://docs.docker.com/docker-for-mac/](https://docs.docker.com/docker-for-mac/)

<h3>Install Docker for Windows:</h3>
[https://docs.docker.com/docker-for-windows/](https://docs.docker.com/docker-for-windows/)

<h3>Clone sputnik repo</h3>
```
git clone https://github.com/DanDeller/sputnik.git
```

<h3>Get npm modules</h3>
```
npm install
```

<h3>Start dinghy</h3>
```
dinghy up
```

>Quick note: If you run dinghy up and get the error: `To connect the Docker client to the Docker daemon, please set:` simply copy, paste, and run each of the exports in the same terminal window. Once finished run `dinghy up` again. When it's started your terminal should read: `Your environment variables are already set correctly`.

<h3>Build docker container:</h3>
```
docker-compose build
```

>Quick note: You will only have to run this command line once UNLESS you make changes to your dockerfile. If changes are made the build will have to be run again.

<h3>Start up Rethinkdb:</h3>
```
docker-compose up -d rethinkdb
```

>Quick note: Alternatively you can run both of those commands by running `docker-compose up --build`

<h3>Run tests</h3>
```
mocha test
```


<h3>View front end:</h3>
[http://0.0.0.0:3000/](http://0.0.0.0:3000/)

<h3>View rethinkdb data explorer</h3>
[http://0.0.0.0:8080/](http://0.0.0.0:8080/)

<br>
<br>
<hr>
<br>
<br>

<h2>Useful Commands</h2>
<h3>Check all containers:</h3>
```
docker ps -a
```

<h3>Check all images:</h3>
```
docker images
```

<h3>Delete containers that are not running:</h3>
```
docker rm $(docker ps -a -q)
```

<h3>Delete containers that are still running:</h3>
```
docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)
```

<h3>Delete images</h3>
```
docker rmi 'image-id'
```

<h3>Delete all images</h3>
```
docker rmi $(docker images -q)
```

<h3>Force delete images</h3>
```
docker rmi -f $(docker images -q)
```
