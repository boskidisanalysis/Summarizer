'use client'
import React from "react";

const HeroChatgpt = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img
          src="./assets/logo.svg"
          alt="logo"
          className="w-28 object-contain"
        />

        <button
          type="button"
          onClick={() => window.open("https://github.com/boskidisanalysis")}
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
        >
          GitHub
        </button>
      </nav>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient">HuggingFace Summarization API</span>
      </h1>
      <p className="text-lg text-gray-700 text-center">
        Simplify your reading with Summize, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries.
      </p>
    </header>
  );
};

export default HeroChatgpt;
