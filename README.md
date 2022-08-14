# ProjectU Simple clean NodeJS API

A simple clean REST API built with NodeJS, express with a n-tier architecture (organized into layers). My Udemy course explaining how to build it is available at:

## Setting Up

- Make sure you have [NodeJS](https://nodejs.org/en/download) v14 or newer innstalled.
- Run `npm ci` to install all dependencies.
- `npm start` to start your API on port `4000`.
  - You can change the port by editing `src/server.js` and changing `const port = 4000;` to another port number.
- Download [Insomnia](https://insomnia.rest/download) or [Postman](https://www.postman.com/downloads/) to send easily HTTP requests to your API.
  - In this Udemy course, I will be using Insomnia v4.2, so Insomnia would be the recommended one.

## Running unit tests

```console
npm test
```

Or with `npx`

```console
npx ava
```

## Running it with Podman

1. Make sure Podman is correctly installed on your machine - https://podman.io/getting-started/installation
2. From a command line opened , run `podman machine init` and then `podman machine start`
3. Then, in the project folder (still from your terminal), let's build the image with `podman build -t simple-api-image .`
4. Once it has finished and the image successfully built, you should be able to see it by typing `podman images`
5. Finally, let's run the image container by typing `podman run -p 4000:4000 simple-api-image` - Here, we use port `4000`, and map it to the local port `4000`.

## Author

I'm [Pierre-Henry Soria](https://ph7.me). A **super passionate** Belgian **software engineer** 🤗 And a true cheese 🧀 & chocolate 🍫 lover! 😋 You can reach me at _hi {[AT]} ph7 [{D0T}] me_

[![@phenrysay](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/phenrysay 'Follow Me on Twitter') [![pH-7](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/pH-7 'Follow Me on GitHub')

[![Pierre-Henry Soria](https://s.gravatar.com/avatar/a210fe61253c43c869d71eaed0e90149?s=200)](https://ph7.me 'Pierre-Henry Soria personal website')

## Context

This is the source code of the final and completed project of my [Udemy Course](https://www.udemy.com/user/pierresoria/), **Learn how to build a Backend REST API with Node JS**.

## License

This project is distributed under [MIT license](https://opensource.org/licenses/MIT). Enjoy 🎉
