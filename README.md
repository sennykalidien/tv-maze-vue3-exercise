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
- More unit tests
- State Management with Pinia for storing favourite shows
- Use more of Vue / Nuxt, like:
  - Provide / Inject
  - Reactive
  - LazyComponents
  

## Approach
- Logical components (contextual) 
  - API calls, data transformation and rendering are being handled in its own components `/components/shows` & `/components/show`. These components could be standalone and used in many other contexts (pages, other components, sharable within apps as packages). 
- Generic Components
  - All other components are 'generic' components without contextual knowledge about TV Shows or API structures. It used the generic `Data` type to render data and uses some inheritance.
  - Mainly for UI components.
  - We use components in `components/overview` & `components/overview-item` to render the transformed data to display the TV Shows in different layouts.
- Clear separation of concerns within components
  - Component are separated by logic or presentation of data
  - Outside of components we determine things like data handling, which HTML5 elements we wrap them, margins and spacings
- Utils 
  - `/utils/data` helps transform the API Data to a generic data format. 
    - This helps to get the data in a fixed format so we can easily sort, map, filter and reduce data, i.e. sort and categorize the TV shows based on their genres.
- Composables
  - `/composables/shows` & `/composables/show` are used to fetch the data from the API and transform the data to a generic format.

### Showcase of coding principles
DRY, Single Responsibility Principle, Composition over inheritance, Separation of concerns, Abstraction, Future-proofing, Scalability, Reusability & Maintainability.

### Why this level of abstraction & separation of concerns?
**I agree, this is over-engineerd for what it needs to do for such a small application.**

The data didn't need to be transformed and logic didn't need to be abstracted. 

The rationale behind this is that I want to display my thought process and how I would normally approach a project, by thinking more abstract and steps ahead.

Because what if we would:
- use other api services to get additional information about a show or we would like to also display movies later on?
- seperate the data from the view (usually done with a dataLayer from a server)
- get a lot of business logic


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
- [x] Add a skeleton when fetching data on Home
- [ ] Add a loading spinner or skeleton when fetching data on other pages
- [ ] Store favourite shows in a state manager like `Pinia`
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
