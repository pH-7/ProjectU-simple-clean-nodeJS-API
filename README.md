# ProjectU-simple-clean-nodeJS-API

A simple clean REST API built with NodeJS, express with a n-tier architecture (organized into layers). My Udemy course explaining how to build it is available at:


## Setting Up
* Make sure you have [NodeJS](https://nodejs.org/en/download) v14 or newer innstalled.
* Run `npm ci` to install all dependencies.
* `npm start` to start your API on port `4000`.
  * You can change the port by editing `src/server.js` and changing `const port = 4000;` to another port number.


## Running unit tests

```console
npm test
```

Or with `npx`

```console
npx ava
```
