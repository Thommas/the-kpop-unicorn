# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [0.3.0] - 2017-09-08
### Node API
#### Added
- Google trends score
- Twitter score

#### Improved
- Computed concert hall for band based on total digital score

#### Fixed
- Renamed environment twitter variables

### React Frontend
#### Added
- Displaying error message when API is not working
- Displaying loader when data is loading

#### Improved
- Band final digital score and hall display

## [0.2.0] - 2017-09-07
### Node API
#### Added
- Band detail page will display combined data from multiple APIs
- Cache service to minimize API calls
- Scraped data from Nautiljon to get the best accuracy of album count
- Added static slug to better query bands
- Added Musixmatch data

### React Frontend
#### Improved
- Home with i18n and link to ranking
- Ranking and band index use a different sort criteria
- Added more data to band view


## [0.1.0] - 2017-09-06
### Node API
#### Added
- Basic node/express stack with logging, SSL and environments
- First spotify API call
- Static data for French halls
- Musixmatch, musicbrainz and twitter API calls
- Static data for kpop bands with spotify extra data

### React Frontend
#### Added
- Basic react stack with i18n, routing and environments
- All views with static data
- First API call to /api/halls
- First API call to /api/bands
