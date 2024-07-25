# Cheapflix
Just like netflix, but you have to use your imagination.

https://urban-potato-flame.vercel.app/

## Project Details

Here are a few details about the implementation of the application.

### Leveraging SSR for performance

With Next.js 14, components are React Server Components by default. This means that the components are rendered on the server and sent to the client as HTML. This is great for performance as the client doesn't have to wait for the JavaScript to load and render the components.

I've put an emphasis on leveraging RSC for simple components that don't need to be interactive, and using client-side rendering for components that need to be interactive.

For example, on the [movie details page](https://urban-potato-flame.vercel.app/movie-details/llNU1NFpijiLc1udSYxBG), the movie details are rendered on the server, but the AI Chat widget is rendered on the client.

### A feature that I am pleased about: AI Chat Widget

I leveraged OpenAI's GPT-4o model to create an AI chat widget that can answer questions about the movie. It takes in a system prompt that includes movie metadata if its available, then waits for the user to ask a question. The user's question (and the entire chat history) is then appended to the system prompt and sent to the model to generate a response. The AI chat widget is available on the [movie details page](https://urban-potato-flame.vercel.app/movie-details/llNU1NFpijiLc1udSYxBG).

### A small but neat feature: Recently viewed movies

Once you visit a movie details page, the movie is added to the recently viewed movies list. This list is stored in local storage and displayed on the home page. This is a small feature that provides a way for users to quickly navigate back to movies they have recently viewed.

### What I would like to add

#### Ratings and Reviews

I would like to add a feature that allows users to rate movies and leave reviews. This would require a backend to store the ratings and reviews, and a way to display the ratings and reviews on the movie details page.

#### Genre Pages

I would like to add genre pages that display a list of movies in a particular genre entities contain a list of movies that belong to that genre. This would provide users with another way to discover movies other than just searching for them.

#### Improve AI prevalance and capabilities

I would like to make the AI chat widget more prevalent by adding it to more pages. For example, I could add it to the home page for more general movie related chat interactions, or even have it as a floating widget that follows the user around the site. The prompts could update dynamically based on the user's interactions with the site.

It would also be neat to explore the function calling capabilities of OpenAI's API to allow the AI to make network requests to retrieve additional data related to a movie.
 
--- 

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
