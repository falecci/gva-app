# Giving Assistant Components

These components were made by Federico Alecci. The app was built with [Snowpack](https://www.snowpack.dev/), [TailwindCSS](tailwindcss.com/), [React](https://reactjs.org/) and [TypeScript](https://www.typescriptlang.org/).

# Table Of Contents

- [Giving Assistant Components](#giving-assistant-components)
- [Table Of Contents](#table-of-contents)
  - [Requirements](#requirements)
  - [Setup](#setup)
    - [Requirements](#requirements-1)
  - [Installing dependencies](#installing-dependencies)
  - [Running the application](#running-the-application)
  - [Testing](#testing)
  - [Building the application](#building-the-application)
  - [Considerations](#considerations)

## Requirements

To read about the requirements, please go to [requirements.pdf](/requirements.pdf).

## Setup

### Requirements

**Node**  
[https://nodejs.org/es/](https://nodejs.org/es/) or install using [nvm](https://github.com/nvm-sh/nvm)

**Yarn**  
[https://classic.yarnpkg.com/en/docs/install](https://classic.yarnpkg.com/en/docs/install)

**VSCode** (optional)  
[https://code.visualstudio.com/](https://code.visualstudio.com/) was used for developing this app.

## Installing dependencies

To install the app dependencies, just run `yarn` in the terminal.

## Running the application

To run the application, you could run one this script in your terminal:

- `yarn start`: this script will just start the application.

## Testing

The tests were written with [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro). To run the application tests, just run `yarn test` in the terminal.

## Building the application

To build the application, you could run this script in your terminal:

- `yarn build`: this script will just start the application.

That script builds a static copy of your site to the `build/` folder, and the app will be ready to be deployed!

## Considerations

- App was built using [Snowpack](https://www.snowpack.dev/), just to give it a try instead of Webpack. Totally worth it.
- The app is really small to be using Redux or SCSS modules for instance. Should this scale, we should reconsider these decisions.
- Some testing is missing, precisely with API integrations. [`msw`](https://redd.gitbook.io/msw/) should be the way to go, just need to configure it for Snowpack.
- **For the best production performance:** Add a build bundler plugin like "@snowpack/plugin-webpack" or "@snowpack/plugin-parcel" to your `snowpack.config.json` config file.
- Should find a better way to configure TailwindCSS with Snowpack, to use `@apply` in style files.
- Mobile design should be reviewed for large coupon content.
- Everything could have been done with vanilla JavaScript, CSS and HTML.
- Right now, the API is mocked with [Beeceptor](https://beeceptor.com/). Unfortunately, it has a limit of 50 requests per day. However, it’s free and anyone would just need to modify the `.env` file with the new endpoint to mock success or failure responses.