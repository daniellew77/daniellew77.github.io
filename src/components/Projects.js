import React, { useState } from 'react';
import { Text } from '@radix-ui/themes';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import illuminate1 from '../assets/images/main.jpg';
import illuminate2 from '../assets/images/landing.jpeg';
import illuminate3 from '../assets/images/vid_screen.jpeg';
import illuminate4 from '../assets/images/quiz_screen.jpeg';
import illuminate5 from '../assets/images/fourier.mp4';
import zebraGif from '../assets/images/zebra_simulation.gif';
import zebraReal from '../assets/images/zebra_real.jpg';
import giraffeGif from '../assets/images/giraffe_simulation.gif';
import giraffeReal from '../assets/images/giraffe_real.jpg';
import leopardGif from '../assets/images/leopard_simulation.gif';
import leopardReal from '../assets/images/leopard_real.jpg';
import honeyGif from '../assets/images/honey_simulation.gif';
import honeyReal from '../assets/images/honey_real.jpg';
import gnbArchitecture from '../assets/images/gnb_architecture.png';
import gnbMatrix from '../assets/images/gnb_confusion_matrix.png';
import gnbRoc from '../assets/images/gnb_roc_curve.png';
import gnbFeatures from '../assets/images/gnb_feature_importance.png';

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Illuminate",
      description: "An AI-powered educational video generator that creates animated explanations for any topic. Inspired by 3Blue1Brown's videos. Built with LangChain, AWS, and React.",
      award: "👑 Best Use of Generative AI - Hack@Brown 2025 👑",
      devpost: "https://devpost.com/software/illuminated-qf09ik",
      media: [
        { type: 'image', src: illuminate1 },
        { type: 'image', src: illuminate2 },
        { type: 'image', src: illuminate3 },
        { type: 'image', src: illuminate4 },
        { type: 'video', src: illuminate5 }
      ],
      bulletPoints: [
        "Used LangChain to convert user prompts into lesson plans, scripts, and animation",
        "Generated interactive quizzes to test user comprehension",
        "Built frontend interface using React, including landing page, personalized settings, and quiz components",
        "Implemented AWS (EC2, S3, ApiGateway, Lambda) for scalable deployment",
        "Integrated with FastAPI backend for efficient prompt processing and video generation"
      ],
      technologies: [
        "Python", "React", "AWS", "LangChain", "FastAPI", "Manim", "LLMs"
      ]
    },
    {
      id: 2,
      title: "Cahn-Hilliard Animal Prints",
      description: "A mathematical simulation of pattern formation in nature using the Cahn-Hilliard equation, demonstrating how complex animal prints emerge from simple phase separation principles.",
      github: "https://github.com/daniellew77/CahnHilliardAnimals",
      media: [
        { type: 'image', src: zebraGif },
        { type: 'image', src: zebraReal },
        { type: 'image', src: giraffeGif },
        { type: 'image', src: giraffeReal },
        { type: 'image', src: leopardGif },
        { type: 'image', src: leopardReal },
        { type: 'image', src: honeyGif },
        { type: 'image', src: honeyReal }
      ],
      bulletPoints: [
        "Implemented the Cahn-Hilliard partial differential equation: ∂φ/∂t = M ∇² (φ³ - φ - ε² ∇²φ)",
        "Simulated pattern formation for zebras, giraffes, leopards, and honeycomb over time using Python and numerical methods",
        "Created side-by-side comparisons of simulated patterns with real animal prints",
        "Demonstrated how biological patterns emerge from simple mathematical principles!"
      ],
      technologies: [
        "Python", "NumPy", "SciPy", "Matplotlib", "PDEs", "Scientific Computing"
      ]
    },
    {
      id: 3,
      title: "Gaussian Naive Bayes Classifier",
      description: "Built a Gaussian Naive Bayes classifier from scratch for diagnosis of coronary heart disease, implementing the full probabilistic model without using existing ML libraries. Achieved 85% accuracy on the UCI Heart Disease Dataset (same as Sklearn's implementation).",
      github: "https://github.com/daniellew77/GNBforCoronaryHeartDisease/blob/main/src/gaussiannaivebayes.ipynb",
      media: [
        { type: 'image', src: gnbArchitecture },
        { type: 'image', src: gnbMatrix },
        { type: 'image', src: gnbRoc },
        { type: 'image', src: gnbFeatures }
      ],
      bulletPoints: [
        "Implemented complete Gaussian Naive Bayes algorithm from scratch using only NumPy",
        "Developed custom feature scaling and probability calculation functions",
        "Achieved 85% accuracy on heart disease prediction, matching scikit-learn's performance",
        "Created visualization suite for model diagnostics and feature analysis",
        "Applied Gaussian probability distributions to handle continuous medical data"
      ],
      technologies: [
        "Machine Learning", "Naive Bayes", "Python", "NumPy", "Pandas", "Matplotlib", "Medical ML"
      ]
    }
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    pauseOnHover: true
  };

  const renderMediaItem = (item, index) => {
    if (item.type === 'video') {
      return (
        <div key={index} className="slide">
          <video 
            controls
            autoPlay={false}
            muted
            className="slide-video"
          >
            <source src={item.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      );
    }
    return (
      <div key={index} className="slide">
        <img src={item.src} alt={`Project slide ${index + 1}`} />
      </div>
    );
  };

  return (
    <div className="projects-section">
      {projects.map(project => (
        <section key={project.id} className="project-item">
          <div className="project-header">
            <h2>{project.title}</h2>
          </div>
          <p className="project-description">{project.description}</p>
          <ul className="bullet-points">
            {project.bulletPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
          <div className="technologies">
            {project.technologies.map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>
          {project.award && (
            <Text as="p" className="award-tag">
              {project.award}
            </Text>
          )}
          <div className="project-slideshow">
            <Slider {...sliderSettings}>
              {project.media.map((item, index) => renderMediaItem(item, index))}
            </Slider>
          </div>
          {project.devpost && (
            <a 
              href={project.devpost} 
              target="_blank" 
              rel="noopener noreferrer"
              className="devpost-link"
            >
              View on Devpost <FontAwesomeIcon icon={faExternalLinkAlt} />
            </a>
          )}
          {project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="github-link"
            >
              View on GitHub <FontAwesomeIcon icon={faExternalLinkAlt} />
            </a>
          )}
        </section>
      ))}
    </div>
  );
}

export default Projects; 