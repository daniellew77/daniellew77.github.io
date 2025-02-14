import React from 'react';
import { Heading } from '@radix-ui/themes';

function Header() {
  return (
    <header>
      <div className="header-content">
        <Heading as="h1" size="8">Danielle Whisnant</Heading>
      </div>
    </header>
  );
}

export default Header; 