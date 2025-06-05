import React, { useState, useEffect } from 'react';
import { Theme } from '@radix-ui/themes';
import Header from './components/Header';
import About from './components/About';
import Academics from './components/Academics';
import Publications from './components/Publications';
import Professional from './components/Professional';
import Projects from './components/Projects';
import Apparel from './components/Apparel';
import Contact from './components/Contact';
import '@radix-ui/themes/styles.css';
import './styles.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false); // Close mobile menu after navigation
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'academics', 'publications', 'professional', 'projects', 'apparel', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Theme
      appearance="dark"
      accentColor="blue"
      grayColor="slate"
      radius="medium"
      scaling="95%"
      panelBackground="solid"
    >
      <div className="app-container">
        {/* Mobile Menu Toggle */}
        <button 
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Left Sidebar Navigation */}
        <nav className={`sidebar ${isMobileMenuOpen ? 'open' : ''}`}>
          <div className="sidebar-content">
            <div className="sidebar-header">
              <h1>Danielle Whisnant</h1>
            </div>
            
            <ul className="nav-menu">
              <li>
                <button 
                  className={`nav-item ${activeSection === 'home' ? 'active' : ''}`}
                  onClick={() => scrollToSection('home')}
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  className={`nav-item ${activeSection === 'about' ? 'active' : ''}`}
                  onClick={() => scrollToSection('about')}
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  className={`nav-item ${activeSection === 'academics' ? 'active' : ''}`}
                  onClick={() => scrollToSection('academics')}
                >
                  Academics
                </button>
              </li>
              <li>
                <button 
                  className={`nav-item ${activeSection === 'publications' ? 'active' : ''}`}
                  onClick={() => scrollToSection('publications')}
                >
                  Research
                </button>
              </li>
              <li>
                <button 
                  className={`nav-item ${activeSection === 'professional' ? 'active' : ''}`}
                  onClick={() => scrollToSection('professional')}
                >
                  Professional
                </button>
              </li>
              <li>
                <button 
                  className={`nav-item ${activeSection === 'projects' ? 'active' : ''}`}
                  onClick={() => scrollToSection('projects')}
                >
                  Projects
                </button>
              </li>
              <li>
                <button 
                  className={`nav-item ${activeSection === 'apparel' ? 'active' : ''}`}
                  onClick={() => scrollToSection('apparel')}
                >
                  Apparel
                </button>
              </li>
              <li>
                <button 
                  className={`nav-item ${activeSection === 'contact' ? 'active' : ''}`}
                  onClick={() => scrollToSection('contact')}
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </nav>

        {/* Overlay for mobile menu */}
        {isMobileMenuOpen && (
          <div 
            className="mobile-menu-overlay"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Main Content Area */}
        <main className="main-content">
          <section id="home" className="section hero-section">
            <Header />
          </section>

          <section id="about" className="section">
            <About />
          </section>

          <section id="academics" className="section">
            <Academics />
          </section>

          <section id="publications" className="section">
            <Publications />
          </section>

          <section id="professional" className="section">
            <Professional />
          </section>

          <section id="projects" className="section">
            <Projects />
          </section>

          <section id="apparel" className="section">
            <Apparel />
          </section>

          <section id="contact" className="section">
            <Contact />
          </section>
        </main>
      </div>
    </Theme>
  );
}

export default App; 