[![Build Status](https://travis-ci.org/DanDeller/sputnik.svg?branch=master)](https://travis-ci.org/DanDeller/sputnik)
[![Node version](https://img.shields.io/node/v/npm.svg?style=flat)](http://nodejs.org/download/)

# Sputnik
<h2>A node/express app built on docker.</h2>

<h2>Prerequisites</h2>
<h3>Install Dinghy:</h3>
[https://github.com/codekitchen/dinghy](https://github.com/codekitchen/dinghy)

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

<h3>Start gulp (new tab)</h3>
```
cd public
gulp
```

<h3>Build docker image:</h3>
```
docker-compose up
```

<h3>View front end:</h3>
[http://mynodeapp.docker:3000/](http://mynodeapp.docker:3000/)

<h3>View rethinkdb data explorer</h3>
[http://mynodeapp.docker:8080/](http://mynodeapp.docker:8080/)

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
docker rm 'container-name'
```

<h3>Delete images</h3>
```
docker rmi 'image-id'
```

<h3>Delete all images</h3>
```
docker rmi $(docker images -q)
```
