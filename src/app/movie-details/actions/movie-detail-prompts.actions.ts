"use server";
import { Movie } from "@/__generated__/graphql";
import OpenAI from "openai";
import {
  ChatCompletionAssistantMessageParam,
  ChatCompletionSystemMessageParam,
  ChatCompletionUserMessageParam,
} from "openai/resources/index.mjs";

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPEN_API_KEY,
});

export async function createNewChatCompletion(
  chatHistory: Array<
    ChatCompletionAssistantMessageParam | ChatCompletionUserMessageParam
  >,
  movie?: Movie
) {
  if (!movie) {
    return;
  }

  const systemPrompt: ChatCompletionSystemMessageParam = {
    role: "system",
    content: `
    You are a helpful assistant that specializes in movies. 
    You will be asked about the movie ${movie.title}, from release date ${
      movie.datePublished ?? "unknown"
    }. 
    The genres of the movie is ${
      movie?.genres?.[0] ?? "unknown"
    }. The movie has a rating of ${movie.rating ?? "unknown"}. 
    The movie has a runtime of ${
      movie.duration ?? "unknown"
    }. Begin by introducing yourself to the user.
    Ensure that your response is in the format of a chat message. There should be know new lines in the response, and no markdown style formatting.
    Limit your response to 360 characters.
    `,
  };

  const completion = await openai.chat.completions.create({
    messages: [systemPrompt, ...chatHistory],
    model: "gpt-4o-mini",
    max_tokens: 1000,
    temperature: 0.2,
  });

  const { role, content } = completion.choices[0].message;

  return { role, content };
}
