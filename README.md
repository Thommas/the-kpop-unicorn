The Kpop Unicorn
================

Author: Thomas Bullier <thomasbullier@gmail.com>
Description: Mini Music Hack Day for kpop fans.

Stack
-----

NodeJS
Express
React


## Node API

    cd node
    npm install

#### Generate self signed certificates

    mkdir -p ssl
    openssl genrsa 1024 > ssl/server.key
    openssl req -new -x509 -nodes -sha1 -days 365 -key ssl/server.key -out ssl/server.crt

#### Setup environments

    cp environments/environment.dist environments/environment.dev
    cp environments/environment.dist environments/environment.prod
    cp environments/environment.dist environments/environment.test

Edit files with your local configuration.

#### Develop

In environments/environment.dev, empty the SSL variables:

    SSL_CERT=
    SSL_KEY=

npm start

Access the API here: http://localhost:[PORT]

#### Test

npm run test

Code coverage

npm run coverage

#### Production

npm run prod

Access the API here: https://localhost:[PORT]


## React frontend

    cd react
    npm install
