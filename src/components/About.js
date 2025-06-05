import React from 'react';
import headshotImage from '../assets/images/me_headshot.png';

function About() {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-image">
          <img 
            src={headshotImage} 
            alt="Danielle Whisnant" 
            className="headshot"
          />
        </div>
        <div className="about-text">
          <p>
            I am an MPH student at Brown University studying the intersection of technology and public health. Within computer science, I am interested in technological safety and governance, specifically pertaining to content moderation and misinformation, and applications of technology in public health and human rights work. I have a background in clinical care, human rights and public health research and advocacy, and software development. I seek to combine my technical skills with my passion for public health and human rights to make the world a better place.
          </p>
          <br />
          <p>
            My side quests include apparel design (click "Apparel" below!), running, and hunting down live music.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About; 