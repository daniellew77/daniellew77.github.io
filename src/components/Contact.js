import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function Contact() {
  return (
    <section id="contact">
      <h2>Contact Me!</h2>
      <p>
        <FontAwesomeIcon icon={faEnvelope} />
        <a href="mailto:danielle_whisnant@brown.edu">danielle_whisnant@brown.edu</a>
      </p>
      <p>
        <FontAwesomeIcon icon={faLinkedin} />
        <a href="https://www.linkedin.com/in/danielle-whisnant-60098a274/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </p>
      <p>
        <FontAwesomeIcon icon={faGithub} />
        <a href="https://github.com/daniellew77" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </p>
    </section>
  );
}

export default Contact; 