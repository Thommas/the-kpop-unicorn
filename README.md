The Kpop Unicorn
================

Author: Thomas Bullier <thomasbullier@gmail.com>
Description: Mini Music Hack Day for kpop fans.

Features:
- A selection of the most popular kpop bands according to French kpop fans
- Display metrics to gauge each band popularity in France
- Digital presence in western public APIs compared to the reality in Korea
- Based on popularity match potential concert halls in France they could perform at

Stack
-----

NodeJS
Express
React


## Node API

cd node
npm install

#### Generate self signed certificate

    mkdir -p ssl
    openssl genrsa 1024 > ssl/server.key
    openssl req -new -x509 -nodes -sha1 -days 365 -key ssl/server.key -out ssl/server.crt

#### Setup environments

    cp environments/environment.dist environments/environment.dev
    cp environments/environment.dist environments/environment.prod
    cp environments/environment.dist environments/environment.test

Edit files with your local configuration.

#### Develop

npm start

Access the API here: http://localhost:[PORT]

#### Test

npm run test

Code coverage

npm run coverage

#### Production

In environments/environment.prod, put the absolute path to self signed certificate:

    SSL_CERT=/[path]/ssl/server.crt
    SSL_KEY=/[path]/ssl/server.key

npm run prod

Access the API here: https://localhost:[PORT]


## React frontend

cd react
npm install

#### Develop

npm start
