# Topo

A small guide to climbing built with Sanity.io, Next.js and Chakra UI.

Deployed frontend: https://topo-imakero.vercel.app/
Deployed studio: https://topo.sanity.studio/

## Local development

1. First clone this repo.

### The studio

1. In the project directory `cd studio`
2. `npm install`
3. Create a new project at [sanity.io](http://sanity.io)
4. Create a `.env.local` file and add the values from your newly created project:

```
NEXT_PUBLIC_SANITY_DATASET=
NEXT_PUBLIC_SANITY_PROJECT_ID=
```

5. Run `npm start`, still in the `studio` folder. The studio can now be visited at [http://localhost:3333](http://localhost:3333)

### The frontend.

1. Clone this repo
2. `npm install`
3. `npm run dev` to start the development server at [http://localhost:3000](http://localhost:3000)

## Deployment

### The studio

1. `cd studio`
2. `npx @sanity/cli@dev-preview deploy` and follow the instructions.

### The frontend

1. `vercel` and follow the instructions
2. For the deployment to work the following environment variables need to be set at vercel:

```
NEXT_PUBLIC_SANITY_DATASET=
NEXT_PUBLIC_SANITY_PROJECT_ID=
```
