# TV Maze Vue 3 with Nuxt
This Repo serves as an exercise in using Vue 3 with Nuxt to create a TV show application using the TV Maze API.

## Index
- [Application Overview](#application-overview)
- [Features & Functionality](#features--functionality)
- [Approach](#approach)
- [Setup & Run Application](#setup--run-application)
- [Code & Type checks & Tests](#code--type-checks--tests)

## Application Overview

### Type of Application
- Client Side Rendered App

### Technology Stack
- Vue 3
- Nuxt
- Tailwind CSS
- Vitest

### Dependencies
- Nuxt
  - Icon
  - UI
  - Image
  - Eslint
- API
  - Nuxt API Party - easily setup REST endpoints globally and do calls
  - Tanstack - Easily make **paged** REST calls

## Features & Functionality

### Features
- View TV shows categorized and sorted by highest rating first
- View overview of all TV show in a grid or list
- Search for TV shows
- View TV show details

## Future Improvement
- Add more unit tests
- Fine tune design
- Use more of Vue, like:
  - Provide / Inject
  - Create more Composables using the Composition API

## Approach
- All contextual logic is handles in `/components/shows` & `/components/show`. 
- All other components should be 'generic' components without knowledge about TV Shows.
- Utils functions in /utils/data helps transform the API Data (which can vary per query) to a more simplistic data format so that it can be used by `components/overview/[components].
  - This helps to get the data in a fixed format so it can be typed accordingly and used generic components (like `overview`).
  - There are also util functions available to sort and categorize the TV shows based on their genres.
- The Overview component in `/components/overview`  is used to display the transformed data in a grid, list or horizontal scrolling view.

### TO DO
- [x] Create a Vue / Nuxt 3 project
- [x] Use the TV Maze API to search for TV shows
- [x] Display search results
- [x] Display TV show details
- [x] Categorize TV Shows
- [x] Sort TV Shows by rating
- [x] Responsive & Fine tune Design
- [x] Create unit tests
  - [x] Data utils
  - [ ] Typechecks

### Extras
- [x] Dark mode switcher
- [x] Switch between GRID or LIST view on the `/shows` and `/search` page.
- [ ] Add a loading spinner or skeleton when fetching data
- [ ] Paged TV Shows & Search Results (using `@tanstack/vue-query`)
- [ ] Componentize the `<Overview />` further into child components (and make use of useOverviewLayout() in child components to get the state)
- [ ] Add more unit tests, also for components
- [ ] e2e tests using Playwright

----

## Setup & Run Application
Please use the following instructions to setup and run the application.

### Requirements
- node@18.x.x
- npm@9.x.x 

### Not tested
These package managers are not tested and might fail when running the application:
- pnpm@9.x.x
- yarn@1.x.x
- bun@1.x.x

### Installation

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

### Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

### Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the Nuxt [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Code & Type checks & Tests

### Eslint
To run the linter, run:

```bash
# npm
npm run test

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

### Test
Tests are written using Vitest. To run the tests, run:

```bash
Run:

```bash
# npm
npm run test

# pnpm
pnpm run test

# yarn
yarn test

# bun
bun run test
```
