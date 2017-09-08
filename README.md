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

#### Setup environments

    cp environments/environment.dist environments/environment.dev
    cp environments/environment.dist environments/environment.prod
    cp environments/environment.dist environments/environment.test

Edit files with your local configuration.

#### Documentation

    npm run doc

#### Develop

    npm start

Access the API here: http://localhost:[PORT]

#### Test

Check carefully environments/environment.test variables.

Run tests:

    npm run test

Generate code coverage html files:

    npm run coverage

#### Production

Use letsencrypt to get a valid HTTPS/SSL certificate.

In environments/environment.prod, put the absolute path to certificate:

    SSL_CERT=/[path]/ssl/server.crt
    SSL_KEY=/[path]/ssl/server.key

npm run prod

Access the API here: https://[PRODUCTION_URL]:[PORT]


## React frontend

    cd react
    npm install

#### Develop

    npm start
