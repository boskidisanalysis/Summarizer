'use client';
import React from "react";
import { useState, useEffect } from "react";
import { HfInference } from "@huggingface/inference";

const Summary = () => {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");

  const handleSubmit = async () => {
    const inference = new HfInference(process.env.NEXT_PUBLIC_HF_ACCESS_TOKEN);
    console.log(text)
    const huggingfaceSummary = await inference.summarization({
        // model: 'sshleifer/distilbart-cnn-12-6',
        inputs: text, 
      })
      console.log(huggingfaceSummary)
    setSummary(huggingfaceSummary["summary_text"]);
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
        className="w-100"
          placeholder="Enter text to summarize"
          onChange={(event) => setText(event.target.value)}
        />
        <button onClick={handleSubmit} className="button text-gray-800">Summarize</button>
      </div>
      <div>
        <h2 className="text-2xl pt-6">Summary</h2>
        <p className="summary mt-20 text-gray-800">{summary}</p>
      </div>
    </div>
  );
};

export default Summary;
