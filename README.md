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
- CSR (Client Side Rendering) App

### Technology Stack
- Vue 3
- Nuxt - used for paged routing & SSG (Static Site Generation) 
- Tailwind CSS - for rapid fast css styling
- Vitest - for writing unit tests

### Dependencies
- Nuxt
  - Icon - Easy add icons
  - UI - Easy add UI components
  - Image - Responsive image handeling
  - Eslint - Linting code quality
- API
  - Nuxt API Party - Generates composables to do cached REST API calls
  - Tanstack - Easily make **paged** REST API calls

## Features & Functionality

### Features
- First view of TV Shows on Home which are categorized and sorted by highest rating first
- View overview of all TV Show in a grid or list
- Search for TV Shows
- View TV Show details

## Future Improvement
- Add more unit tests
- Fine-tune design
- State Management with Pinia for storing favourite shows
- Use more of Vue / Nuxt, like:
  - Provide / Inject
  - Reactive
  - LazyComponents
  

## Approach
- All contextual logic (TV Shows) is scoped and handled in components located in `/components/shows` & `/components/show`. 
- All other components are 'generic' components without contextual knowledge about TV Shows or API structures.
- Utils in `/utils/data` helps transform the API Data to a generic data format. 
  - This helps to get the data in a fixed format so we can easily sort, map, filter and reduce data, i.e. sort and categorize the TV shows based on their genres.
- We use the `<Overview>` component `components/overview/[component].vue to use this data format to display the shows.
- The Overview component in `/components/overview`  is used to display the transformed data in a grid, list or horizontal scrolling view.

### Showcase of coding principles
- DRY
  - <content
### Abstraction & separation of concerns
**This is over-engineerd for what it needs to do.**

The data didn't need to be transformed and logic didn't need to be abstracted. 

The decision behind this is that I want to display my thinking process and how I would approach a project the best. i.e. by thinking more abstract and future-proof.
- Use different apis to get shows or additional information about a show
- Seperate the data from the view (usually done with a dataLayer from a server)
- Business logic from the view
- Handle things outside of components
  - Component only focus on the presentation as much as possible
  - Outside of components we determine the HTML5 elements, margins and spacings


### TO DO
- [x] Create a Vue / Nuxt 3 project
- [x] Use the TV Maze API to search for TV shows
- [x] Display search results
- [x] Display TV show details
- [x] Categorize TV Shows
- [x] Sort TV Shows by rating
- [x] Responsive & Fine tune Design
- [x] Create unit tests
  - [x] Utils
  - [ ] Components
  - [ ] Composables

### Extras
- [x] Dark mode switcher
- [x] Switch between GRID or LIST view on the `/shows` and `/search` page.
- [x] Paged TV Shows & Search Results (using `@tanstack/vue-query`)
- [x] Componentize the `<Overview />` further into child component
- [x] Add a loading spinner or skeleton when fetching data on Home
- [ ] Add a loading spinner or skeleton when fetching data on other pages
- [ ] Save favourite shows in local storage with Pinia
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
Tests are written using Vitest, run:

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
