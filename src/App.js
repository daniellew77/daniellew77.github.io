import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import { Theme } from '@radix-ui/themes';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Apparel from './components/Apparel';
import Contact from './components/Contact';
import '@radix-ui/themes/styles.css';
import './styles.css';

function App() {
  return (
    <Theme
      appearance="dark"
      accentColor="violet"
      grayColor="slate"
      radius="medium"
      scaling="95%"
      panelBackground="solid"
    >
      <div className="container">
        <div className="left-column">
          <Header />
          <div className="main-content">
            <About />
          </div>
        </div>

        <div className="right-column">
          <Tabs.Root defaultValue="projects" className="tabs-root">
            <Tabs.List className="tabs-list" aria-label="Sections">
              <Tabs.Trigger value="projects" className="tab">
                Projects
              </Tabs.Trigger>
              <Tabs.Trigger value="publications" className="tab">
                Research
              </Tabs.Trigger>
              <Tabs.Trigger value="apparel" className="tab">
                Apparel
              </Tabs.Trigger>
              <Tabs.Trigger value="contact" className="tab">
                Contact
              </Tabs.Trigger>
            </Tabs.List>

            <Tabs.Content value="projects" className="tabs-content">
              <Projects />
            </Tabs.Content>
            <Tabs.Content value="publications" className="tabs-content">
              <Publications />
            </Tabs.Content>
            <Tabs.Content value="apparel" className="tabs-content">
              <Apparel />
            </Tabs.Content>
            <Tabs.Content value="contact" className="tabs-content">
              <Contact />
            </Tabs.Content>
          </Tabs.Root>
        </div>
      </div>
    </Theme>
  );
}

export default App; 