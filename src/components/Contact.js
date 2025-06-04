import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: new FormData(e.target),
        headers: {
          Accept: 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        e.target.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

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