import React, { useState, useEffect } from 'react';
import { Heading } from '@radix-ui/themes';

function TypewriterEffect({ words, typingSpeed = 100, deletingSpeed = 50, pauseDuration = 2000 }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    
    if (isPaused) {
      const pauseTimeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseDuration);
      return () => clearTimeout(pauseTimeout);
    }

    const timeout = setTimeout(() => {
      if (isDeleting) {
        // Deleting characters
        setCurrentText(currentWord.substring(0, currentText.length - 1));
        
        if (currentText.length === 1) {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      } else {
        // Typing characters
        setCurrentText(currentWord.substring(0, currentText.length + 1));
        
        if (currentText === currentWord) {
          setIsPaused(true);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, isPaused, currentWordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className="typewriter-text">
      {currentText}
      <span className="typewriter-cursor">|</span>
    </span>
  );
}

function Header() {
  const words = [
    'Researcher',
    'Programmer', 
    'Aspiring Salsa Dancer',
    'Designer',
    'Live jazz enjoyer',
    'Stargazer',
    'EMT',
    'Tea aficionado',
    'Student',
    'Cat mother',
    'Nature enjoyer',
    'Sewist',
    'Yapper',
    'Pasta lover',
    'Baker',
    'Yogi',
    'Runner',
  ];

  return (
    <header>
      <div className="header-content">
        <Heading as="h1" size="9">Danielle Whisnant</Heading>
        <p className="hero-subtitle">
          <TypewriterEffect words={words} />
        </p>
      </div>
    </header>
  );
}

export default Header; 