import React, { useEffect, useState } from 'react';

interface LetterRevealProps {
  words: string[]; // Array of words to display and animate.
  cycleTime?: number; // Time before revealing each character.
  holdTime?: number; // How long to hold each word before moving to the next.
}

const LetterReveal = ({
  words,
  cycleTime = 3000,
  holdTime = 5000,
}: LetterRevealProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayChars, setDisplayChars] = useState<string[]>([]);
  const [isHolding, setIsHolding] = useState(false);

  useEffect(() => {
    const targetWord = words[currentWordIndex];
    const targetChars = targetWord.split('');
    let cycleIntervals: NodeJS.Timeout[] = [];
    let holdTimeout: NodeJS.Timeout;

    const startCycles = () => {
      setDisplayChars(Array(targetWord.length).fill('?'));
      setIsHolding(false);

      targetChars.forEach((_, index) => {
        cycleIntervals[index] = setInterval(() => {
          const randomCharCode = Math.floor(Math.random() * (126 - 33) + 33);
          setDisplayChars((currentChars) => {
            const newChars = [...currentChars];
            newChars[index] = String.fromCharCode(randomCharCode);
            return newChars;
          });
        }, 100);
      });

      holdTimeout = setTimeout(() => {
        cycleIntervals.forEach((interval) => clearInterval(interval));
        setDisplayChars(targetChars);
        setIsHolding(true);

        // Move to the next word or loop back to the start after the holdTime
        setTimeout(() => {
          const nextIndex = (currentWordIndex + 1) % words.length;
          setCurrentWordIndex(nextIndex);
        }, holdTime);
      }, cycleTime);
    };

    startCycles();

    return () => {
      cycleIntervals.forEach((interval) => clearInterval(interval));
      clearTimeout(holdTimeout);
    };
  }, [words, currentWordIndex, cycleTime, holdTime]);

  return (
    <span
      className={`font-mono ${
        isHolding ? 'text-dropdownBg' : 'text-gray-500'
      } sm:text-sm md:text-4xl`}
    >
      {displayChars.join('')}
    </span>
  );
};

export default LetterReveal;
