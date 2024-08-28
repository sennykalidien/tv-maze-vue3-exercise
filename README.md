# TV Maze Vue 3 with Nuxt
This Repo serves as an exercise in using Nuxt 3 with Vue 3 to create a simple TV show search application using the TV Maze API.

## Type of Application
- Client Side Rendered App

## Technology Stack
- Vue 3
- Nuxt
- Tailwind CSS
- 
## Dependencies
- Nuxt
  - Icon
  - UI
  - Image
  - Eslint
- API
  - Nuxt API Party - easily make REST calls
  - Tanstack - Easily make pages REST calls


## Features
- View TV shows categorized and sorted by highest rating first
- View overview of all TV show in a grid or list
- Search for TV shows
- View TV show details


## Completed Assignment
- [x] Create a Vue / Nuxt 3 project
- [x] Use the TV Maze API to search for TV shows
- [x] Display search results
- [x] Display TV show details
- [x] Categorize TV Shows
- [x] Sort TV Shows by rating 
- [ ] Responsive & Finetune Design
- [ ] Create unit tests

### Extras
- [x] Switch between GRID or LIST view on the `/shows` and `/search` page.
- [ ] Add a loading spinner or skeleton when fetching data
- [ ] Paged TV Shows & Search Results (using `@tanstack/vue-query`)
- [ ] Componentize the `<Overview />` further into child components (and make use of useOverviewLayout() in child components to get the state)

## My Approach
- All contextual logic is handles in `/components/shows` & `/components/show`. All other components should be 'generic' components without knowledge about TV Shows.
- Utils functions in /utils/data helps tranform the API Data (which can vary per query) to a more simplistic data format so that it can be used by `components/overview/[components].
  - This helps get the data in a fixed format so it can be typed accordingly and used generic components (like `overview`).
  - There are also util functions available to sort and categorize the TV shows based on their genres.
- The Overview component in `/components/overview`  is used to display the transformed data in a grid, list or horizontal scrolling view.

## Future Improvement
- Add more unit tests
- Finetune design
- Use more of Vue, like:
  - Provide / Inject
  - Create Composables using the Composition API

----

## Setup

Make sure to install the dependencies:

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

## Development Server

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

## Production

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

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
