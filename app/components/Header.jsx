import React from "react";
import { useState } from "react";

const Header = () => {
  const [githubLink, setGithubLink] = useState("https://github.com/your-username/your-project");

  return (
    <header>
      <div class="flex justify-between items-center">
        <div class="flex items-center">
          <img src="logo.png" alt="Logo" class="w-20 h-20 rounded-full">
          <h1 class="text-2xl text-white">AI summarizer</h1>
        </div>
        <a
          href={githubLink}
          class="text-white bg-orange rounded-full py-2 px-4"
        >
          Github
        </a>
      </div>
    </header>
  );
};

export default Header;
