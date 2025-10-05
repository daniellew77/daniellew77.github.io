import React, { useState, useEffect } from 'react';
import { Heading } from '@radix-ui/themes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faDownload, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

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
    'Apparel Designer',
    'Live jazz enjoyer',
    'Stargazer',
    'EMT',
    'Tea aficionado',
    'Cat mother',
    'Nature enjoyer',
    'Sewist',
    'Yapper',
    'Pasta lover',
    'Baker',
    'Yogi',
    'Runner',
  ];

  const scrollToAbout = () => {
    // Find the about section within the current tab content
    const tabContent = document.querySelector('.tab-content');
    if (tabContent) {
      const aboutSection = tabContent.querySelector('#about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header>
      <div className="header-content">
        <Heading as="h1" size="9">Danielle Whisnant</Heading>
        <p className="hero-subtitle">
          <TypewriterEffect words={words} />
        </p>
        <div className="header-buttons">
          <a 
            href="https://drive.google.com/file/d/1WO_JGUfwGGHrZ03yBgUN5SmfCJmKuOTn/view?usp=sharing" 
            target="_blank"
            rel="noopener noreferrer"
            className="header-button cv-button"
          >
            <FontAwesomeIcon icon={faDownload} />
            <span>CV</span>
          </a>
          <a 
            href="https://www.linkedin.com/in/danielle-whisnant-60098a274/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="header-button linkedin-button"
          >
            <FontAwesomeIcon icon={faLinkedin} />
            <span>LinkedIn</span>
          </a>
          <a 
            href="mailto:danielle_whisnant@brown.edu"
            className="header-button email-button"
          >
            <FontAwesomeIcon icon={faEnvelope} />
            <span>Email</span>
          </a>
        </div>
      </div>
      <div className="scroll-indicator">
        <button 
          className="scroll-arrow"
          onClick={scrollToAbout}
          aria-label="Scroll to about section"
        >
          <FontAwesomeIcon icon={faChevronDown} />
        </button>
      </div>
    </header>
  );
}

export default Header; 