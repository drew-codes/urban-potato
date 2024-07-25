import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: [
    {
      "https://0kadddxyh3.execute-api.us-east-1.amazonaws.com/graphql": {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_MOVIE_API_TOKEN}`,
        },
      },
    },
  ],
  // this assumes that all your source files are in a top-level `src/` directory - you might need to adjust this to your file structure
  documents: ["src/**/*.{ts,tsx}"],
  generates: {
    "./src/__generated__/": {
      preset: "client",
      plugins: [],
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
