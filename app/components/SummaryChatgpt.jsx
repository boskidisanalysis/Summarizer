'use client';
import React, { useState, useEffect } from "react";
import { HfInference } from "@huggingface/inference";

const Summary = () => {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    const inference = new HfInference(process.env.NEXT_PUBLIC_HF_ACCESS_TOKEN);
    const huggingfaceSummary = await inference.summarization({
      // model: 'sshleifer/distilbart-cnn-12-6',
      inputs: text,
    });
    setSummary(huggingfaceSummary["summary_text"]);
    setLoading(false);
  };

  useEffect(() => {
    if (text) {
      handleSubmit();
    }
  }, []);

  return (
    <div className="summary-container bg-gray-200">
      <div className="flex justify-between">
        <textarea
          className="w-full p-2"
          placeholder="Enter text to summarize"
          onChange={(event) => setText(event.target.value)}
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Summarize
        </button>
      </div>
      {loading ? (
        <div className="flex items-center justify-center mt-4">
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-800"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          <span className="text-gray-800">Summarizing...</span>
        </div>
      ) : summary ? (
        <div>
          <h2 className="text-2xl pt-6">Summary</h2>
          <p className="mt-4 text-gray-800">{summary}</p>
        </div>
      ) : null}
    </div>
  );
};

export default Summary;
