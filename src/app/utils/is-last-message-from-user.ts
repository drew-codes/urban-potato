import {
  ChatCompletionAssistantMessageParam,
  ChatCompletionUserMessageParam,
} from "openai/resources/index.mjs";

export const isLastMessageFromUser = (
  messages: Array<
    ChatCompletionAssistantMessageParam | ChatCompletionUserMessageParam
  >
): boolean => {
  return messages.length > 0 && messages[messages.length - 1].role === "user";
};
