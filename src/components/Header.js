import React from 'react';
import { Heading } from '@radix-ui/themes';

function Header() {
  return (
    <header>
      <div className="header-content">
        <Heading as="h1" size="9">Danielle Whisnant</Heading>
        <p className="hero-subtitle">Applied Mathematics-Biology • Computer Science • Public Health</p>
      </div>
    </header>
  );
}

export default Header; 