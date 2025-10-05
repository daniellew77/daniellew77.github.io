import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
import { Theme } from '@radix-ui/themes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import Header from './components/Header';
import About from './components/About';
import Academics from './components/Academics';
import Publications from './components/Publications';
import Professional from './components/Professional';
import Projects from './components/Projects';
import Apparel from './components/Apparel';
import '@radix-ui/themes/styles.css';
import './styles.css';

function AppContent() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check localStorage first, default to dark mode
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : true;
  });
  const navigate = useNavigate();
  const location = useLocation();

  // Update document class and localStorage when theme changes
  useEffect(() => {
    document.documentElement.className = isDarkMode ? 'dark-theme' : 'light-theme';
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const getActiveTab = () => {
    const path = location.pathname.slice(1); // Remove leading slash
    return path || 'home';
  };

  const switchTab = (tabName) => {
    navigate(`/${tabName === 'home' ? '' : tabName}`);
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  return (
    <Theme
      appearance={isDarkMode ? "dark" : "light"}
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
              <h1 
                onClick={() => switchTab('home')}
                style={{ cursor: 'pointer' }}
              >
                Danielle Whisnant
              </h1>
            </div>
            
            <ul className="nav-menu">
              <li>
                <button 
                  className={`nav-item ${getActiveTab() === 'home' ? 'active' : ''}`}
                  onClick={() => switchTab('home')}
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  className={`nav-item ${getActiveTab() === 'academics' ? 'active' : ''}`}
                  onClick={() => switchTab('academics')}
                >
                  Academics
                </button>
              </li>
              <li>
                <button 
                  className={`nav-item ${getActiveTab() === 'research' ? 'active' : ''}`}
                  onClick={() => switchTab('research')}
                >
                  Research
                </button>
              </li>
              <li>
                <button 
                  className={`nav-item ${getActiveTab() === 'professional' ? 'active' : ''}`}
                  onClick={() => switchTab('professional')}
                >
                  Professional
                </button>
              </li>
              <li>
                <button 
                  className={`nav-item ${getActiveTab() === 'projects' ? 'active' : ''}`}
                  onClick={() => switchTab('projects')}
                >
                  Projects
                </button>
              </li>
              <li>
                <button 
                  className={`nav-item ${getActiveTab() === 'apparel' ? 'active' : ''}`}
                  onClick={() => switchTab('apparel')}
                >
                  Apparel
                </button>
              </li>
            </ul>
            
            {/* Theme Toggle Button */}
            <div className="theme-toggle-container">
              <button 
                className="theme-toggle-button"
                onClick={toggleTheme}
                aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
              >
                <FontAwesomeIcon 
                  icon={isDarkMode ? faSun : faMoon} 
                  className="theme-toggle-icon"
                />
              </button>
            </div>
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
          <Routes>
            <Route path="/" element={
              <div className="tab-content">
              <section className="section hero-section">
                <Header />
              </section>
              <section className="section">
                <About />
              </section>
              </div>
            } />
            <Route path="/academics" element={
              <div className="tab-content">
                <section className="section">
                  <Academics />
                </section>
              </div>
            } />
            <Route path="/research" element={
              <div className="tab-content">
                <section className="section">
                  <Publications />
                </section>
              </div>
            } />
            <Route path="/professional" element={
              <div className="tab-content">
                <section className="section">
                  <Professional />
                </section>
              </div>
            } />
            <Route path="/projects" element={
              <div className="tab-content">
                <section className="section">
                  <Projects />
                </section>
              </div>
            } />
            <Route path="/apparel" element={
              <div className="tab-content">
                <section className="section">
                  <Apparel />
                </section>
              </div>
            } />
            <Route path="/me" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </Theme>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App; 