import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // Replace with your actual Formspree form ID
      const response = await fetch('https://formspree.io/f/xzzgzwwb', {
        method: 'POST',
        body: new FormData(e.target),
        headers: {
          Accept: 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(''), 5000);
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
      <div className="contact-container">
        <div className="contact-form-section">
          <h3>Send me a message</h3>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
              />
            </div>
            
            <button 
              type="submit" 
              className="submit-button"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? (
                <>Sending...</>
              ) : (
                <>
                  <FontAwesomeIcon icon={faPaperPlane} />
                  Send Message
                </>
              )}
            </button>
            
            {status === 'success' && (
              <div className="status-message success">
                Thanks for your message! I'll get back to you soon.
              </div>
            )}
            
            {status === 'error' && (
              <div className="status-message error">
                Sorry, there was an error sending your message. Please try again or email me directly.
              </div>
            )}
          </form>
        </div>
        
        <div className="contact-links-section">
          <h3>Connect with me</h3>
          <div className="contact-links">
            <a href="mailto:danielle_whisnant@brown.edu" className="contact-link email-link">
              <FontAwesomeIcon icon={faEnvelope} />
              <span>danielle_whisnant@brown.edu</span>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/danielle-whisnant-60098a274/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-link linkedin-link"
            >
              <FontAwesomeIcon icon={faLinkedin} />
              <span>LinkedIn</span>
            </a>
            
            <a 
              href="https://github.com/daniellew77" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-link github-link"
            >
              <FontAwesomeIcon icon={faGithub} />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact; 