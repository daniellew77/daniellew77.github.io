import React from 'react';
import headshotImage from '../assets/images/me_smile_headshot.png';

function About() {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="about-image">
          <img 
            src={headshotImage}
            alt="Danielle Whisnant" 
            className="headshot"
          />
      </div>
      <div className="about-text">
        <p>
          I am a Master of Public Health student at Brown University, focused on the intersection of technology, public health, and human rights. My work explores how digital systems—particularly content moderation and misinformation governance—shape public health outcomes and impact communities.
        </p>
        
        <p>
          With a background in clinical care, human rights advocacy, and public health research, I bring an interdisciplinary lens to complex global challenges. I also have experience in software development and aim to bridge the gap between technical innovation and human-centered design.
        </p>
        
        <p>
          My goal is to harness technology responsibly to advance health equity, promote human rights, and create safer digital and physical environments for all.
        </p>
        
        <div className="side-quests">
          <p>
            I am from the Bay Area in California and am currently based in Rhode Island! My side quests include apparel design (click "Apparel" below!), running, and hunting down live music.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About; 