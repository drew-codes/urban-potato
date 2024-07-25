"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { createNewChatCompletion } from "../movie-details/actions/movie-detail-prompts.actions";
import { Movie } from "@/__generated__/graphql";
import {
  ChatCompletionAssistantMessageParam,
  ChatCompletionUserMessageParam,
} from "openai/resources/index.mjs";
import { isLastMessageFromUser } from "../utils/is-last-message-from-user";

export const ChatWidget = ({ movie }: { movie?: Movie }) => {
  const [messages, setMessages] = useState<
    Array<ChatCompletionAssistantMessageParam | ChatCompletionUserMessageParam>
  >([]);
  const [isInitiated, setIsInitiated] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const handleChatSubmit = async (
    event:
      | React.FormEvent<HTMLFormElement>
      | React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    event.preventDefault();
    const newMessage: ChatCompletionUserMessageParam = {
      role: "user",
      content: inputValue,
    };

    setMessages([...messages, newMessage]);
    setInputValue("");
  };

  useEffect(() => {
    const initChat = async () => {
      const newMessage = await createNewChatCompletion(messages, movie);
      if (newMessage) {
        setMessages([...messages, newMessage]);
        setIsInitiated(true);
      }
    };

    if (!isInitiated) {
      initChat();
    }
  }, [isInitiated, messages, movie]);

  useEffect(() => {
    const getResponse = async () => {
      const newMessage = await createNewChatCompletion(messages, movie);
      if (newMessage) setMessages([...messages, newMessage]);
    };

    if (isLastMessageFromUser(messages)) {
      getResponse();
    }
  }, [messages, movie]);

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <>
      <div className="flex-1 p:2 justify-between flex flex-col h-[35rem]">
        <div
          ref={messagesContainerRef}
          className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
        >
          {messages.map((message, idx) => {
            return message.role === "assistant" ? (
              <div className="chat-message" key={idx}>
                <div className="flex items-end">
                  <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                    <div>
                      <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                        {message.content}
                      </span>
                    </div>
                  </div>
                  <Image
                    src="/movie-bot.webp"
                    width={32}
                    height={32}
                    alt="My profile"
                    className="w-8 h-8 rounded-full order-1"
                  />
                </div>
              </div>
            ) : (
              <div className="chat-message">
                <div className="flex items-end justify-end">
                  <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                    <div>
                      <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">
                        {message.content as string}
                        {/* Casting to string due to an issue with suboptimal types https://github.com/openai/openai-node/issues/462#issuecomment-1801154718 */}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
          <div className="relative flex">
            <form onSubmit={handleChatSubmit} className="w-full">
              <div className="flex gap-4">
                <textarea
                  placeholder="Write your message!"
                  value={inputValue}
                  onKeyUp={(e) => {
                    if (e.key === "Enter") {
                      handleChatSubmit(e);
                    }
                  }}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <div className="items-center inset-y-0 hidden sm:flex">
                  <button
                    type="submit"
                    className="inline-flex justify-center items-end p-4 transition duration-500 ease-in-out text-white focus:outline-none"
                  >
                    <span className="sr-only">Send</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="size-6 fill-gray-500"
                    >
                      <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
                    </svg>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
