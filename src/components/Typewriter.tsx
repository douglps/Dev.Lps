import { useEffect, useState } from "react";

type TypewriterProps = {
  words: string[];
  fixedCount?: number;
  loop?: boolean;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
  className?: string;
};

export default function Typewriter({
  words,
  fixedCount = 3,
  loop = true,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 1500,
  className = "digitador",
}: TypewriterProps) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [shuffledWords, setShuffledWords] = useState<string[]>([]);

  // Embaralhar as palavras após as fixas
  useEffect(() => {
    const fixed = words.slice(0, fixedCount);
    const random = words.slice(fixedCount).sort(() => Math.random() - 0.5);
    setShuffledWords([...fixed, ...random]);
  }, [words, fixedCount]);

  useEffect(() => {
    if (shuffledWords.length === 0) return;

    const currentWord = shuffledWords[wordIndex % shuffledWords.length];

    const timeout = setTimeout(
      () => {
        setText((prev) =>
          isDeleting
            ? currentWord.substring(0, prev.length - 1)
            : currentWord.substring(0, prev.length + 1)
        );

        if (!isDeleting && text === currentWord) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        } else if (isDeleting && text === "") {
          setIsDeleting(false);
          setWordIndex((prev) =>
            loop ? (prev + 1) % shuffledWords.length : prev + 1
          );
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [
    text,
    isDeleting,
    wordIndex,
    shuffledWords,
    loop,
    typingSpeed,
    deletingSpeed,
    pauseTime,
  ]);

  return (
    <span className={className}>
      {text}
      <span className="blinking-cursor">|</span>
    </span>
  );
}
