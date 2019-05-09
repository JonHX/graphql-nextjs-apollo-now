# Server-less Star Wars Wiki

A small proof of concept server-less website, fetching and displaying information from an GraphQL API.

Check out the [Live demo.](https://graphql-nextjs-apollo-now.jontarrant.now.sh/)

Check the [TO-DO LIST.](#todo-list)

## Built with
- [NextJS](https://nextjs.org/)
- [Express](https://expressjs.com/) (For local development)
- [GraphQL](https://github.com/graphql)
- [React Apollo](https://github.com/apollographql/react-apollo)
- [React](https://reactjs.org/)
- [A GraphQL server](https://github.com/JonHX/swapi-graphql) running with [Apollo Server](https://www.apollographql.com/server) & [Engine](https://www.apollographql.com/engine), [Playground here](https://swapi-graphql-api.herokuapp.com/)

### The project also consumes:
- [Babel](https://github.com/babel/babel)
- [Eslint](https://github.com/eslint/eslint)
- [Mocha](https://github.com/mochajs/mocha)
- [Webpack](https://github.com/webpack)

Images are served from **images.jonsmedia.com**, using a dynamic image cropper hosted in [AWS lambda and S3](https://aws.amazon.com/)
`images.jonsmedia.com/**width**x**height**/image.jpg`


## Pipeline & Pull request process
Hosted on Deploy.now by Zeit for serverless

- Tests are run before build and deployment.
- Builds must pass to deploy

[![Deploy to now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=https://github.com/JonHX/graphql-nextjs-apollo-now)

## Install & run locally

```bash
$ nvm use
$ npm i
$ npm run dev
```
## Testing (##Incomplete)
**Automation tests are in progress**. Component tests are present.

```bash
$ npm run test
```
## Routing
Express routing is used for an accurate development environment. New routes will require adding upon new category types.

Using NextJS and Zeit Serverless the routing is server-less dynamic. GraphQL wrappers on initial page load are SSR, all following are a manipulation of the browser's [History API](https://developer.mozilla.org/en-US/docs/Web/API/History) and client-side fetch's.

## Todo list
* [ ] Automation tests in nightwatch
* [ ] Accessibility tests ( partially implemented in linting and //WAVE accessibility)
* [ ] Category page e.g person / vehicle
* [ ] Add planets, films and starship types
* [ ] Breadcrumb
* [ ] S.E.O Optimisation and tests
* [ ] Performance optimisation, webpack updates
* [ ] Search by all types
