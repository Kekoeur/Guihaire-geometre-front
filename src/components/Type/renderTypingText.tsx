"use client";
import React, { useEffect, useState } from "react";

type TypingProps = {
  texts: string[];
  longestText: string;
};

const TypingText: React.FC<TypingProps> = ({ texts, longestText }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const currentFullText = texts[currentTextIndex];

    if (charIndex < currentFullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(currentFullText.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, 60);
      return () => clearTimeout(timeout);
    } else {
      const pause = setTimeout(() => {
        setCharIndex(0);
        setDisplayedText("");
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }, 1500);
      return () => clearTimeout(pause);
    }
  }, [charIndex, currentTextIndex, texts]);

  return (
      <span className="typing-animated">{displayedText}</span>
  );
};

export default TypingText;
