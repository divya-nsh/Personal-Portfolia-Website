"use client";
import { useEffect, useState } from "react";

type Props = {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delay?: number;
};

export const MultiWriteTextEffect = ({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  delay = 1500,
}: Props) => {
  const [currentText, setCurrText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = texts[index];
      if (!isDeleting && currentText.length < fullText.length) {
        //Increase text size
        setCurrText(fullText.slice(0, currentText.length + 1));
      } else if (isDeleting && currentText.length > 0) {
        //Decrease text size
        setCurrText(fullText.slice(0, currentText.length - 1));
      } else if (!isDeleting && currentText.length === fullText.length) {
        setTimeout(() => setIsDeleting(true), delay);
      } else if (isDeleting && currentText.length === 0) {
        setIsDeleting(false);
        setIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }
    };

    const timerId = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed,
    );

    return () => clearTimeout(timerId);
  }, [
    currentText,
    isDeleting,
    index,
    texts,
    deletingSpeed,
    typingSpeed,
    delay,
  ]);

  return (
    <>
      <span>{currentText}</span>
      <span className="blinking-cursor text-neutral-300">|</span>
    </>
  );
};
