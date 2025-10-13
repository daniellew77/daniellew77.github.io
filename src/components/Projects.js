import React, { useState } from 'react';
import { Text } from '@radix-ui/themes';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
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

import musicArchitecture from '../assets/images/music_architecture.jpg';
import musicSpectrogramsPop from '../assets/images/music_spectrograms_pop.jpg';
import musicSpectrogramsRock from '../assets/images/music_spectrograms_rock.jpg';
// import musicLime from '../assets/images/music_lime_explanations.png';
import peerakeetHome from '../assets/images/peerakeet_home.jpeg';
import peerakeetLanding from '../assets/images/peerakeet_home.jpeg';
import peerakeetHowFeels from '../assets/images/how_p_feels.jpg';
import peerakeetWhyWorks from '../assets/images/why_p_works.jpg';
import peerakeetPilot from '../assets/images/pilot_page.jpg';

import globaldisp1 from '../assets/images/globaldisp1.png';
import globaldisp2 from '../assets/images/globaldisp2.png';
import globaldisp3 from '../assets/images/globaldisp3.png';
import globaldisp4 from '../assets/images/globaldisp4.png';

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Global Displacement Atlas",
      description: "An interactive global map of forced displacement and refugee flows, using UNHCR, UNRWA, and IOM data.",
      website: "https://displacement-atlas.vercel.app/",
      github: "https://github.com/daniellew77/Displacement-Atlas",
      media: [
        { type: 'image', src: globaldisp1 },
        { type: 'image', src: globaldisp2 },
        { type: 'image', src: globaldisp3 },
        { type: 'image', src: globaldisp4 }
      ],
      proseDescription: "I built an interactive 3D visualization mapping forced displacement and refugee flows across the world, inspired by the New York Times' <a href='https://www.nytimes.com/interactive/2025/04/17/opinion/global-migration-facebook-data.html'>article</a> on global migration visualization.\n\nThis atlas specifically illuminates forced displacement—refugees, internally displaced persons, and asylum seekers—using official data from UNHCR, IOM, and UNRWA. The project makes migration visible on a global scale so people can explore and understand how displacement ebbs and flows over time.\n\nThe visualization features two modes: Global View showing the top 100 global displacement routes with year selector (2000-2024), and Explore Mode allowing users to click countries for detailed statistics. I implemented a comprehensive data processing pipeline that fetches from UNHCR/UNRWA/IOM APIs (more detail in Github repo), transforms responses into standardized MigrationFlow objects, and generates 3D arcs with thickness based on displacement volume and animated dash patterns showing direction.\n\nTechnical implementation includes React 18 with TypeScript, react-globe.gl for Three.js-based interactive globe, and performance optimizations like aggressive caching, React.memo for expensive components, and WebGL acceleration for 60fps globe rotation.",
      technologies: [
        "React", "TypeScript", "Three.js", "WebGL", "Data Viz", "Geographic Data Processing"
      ]
    },
    {
      id: 2,
      title: "Peerakeet Website",
      description: "CPO and Founding Engineer of digital peer-to-peer support startup creating stigma-free spaces for young adults in addiction recovery.",
      website: "https://www.peerakeet.com/",
      media: [
        { type: 'image', src: peerakeetLanding },
        { type: 'image', src: peerakeetHowFeels },
        { type: 'image', src: peerakeetWhyWorks },
        { type: 'image', src: peerakeetPilot }
      ],
      proseDescription: "As CPO and Founding Engineer, I lead product strategy for an anonymous peer support addiction recovery platform that creates safe, stigma-free spaces for students and young adults.\n\nI develop the website (accessible at the link below) using React Native. The mobile app (available for piloting) is built with React Native. With Peerkeet, we are building on evidence-based therapeutic techniques like Motivational Interviewing and CBT. The platform leverages AI moderation with real-time crisis detection in under 10 milliseconds, FERPA & HIPAA aligned privacy protections with anonymous analytics for institutions, and a 24/7 continuous support network that prevents relapse patterns after acute treatment ends.",
      technologies: [
        "Full Stack Development", "Product Strategy", "Behavioral Science", "Mental Health Tech", "Startup Leadership"
      ]
    },
    {
      id: 3,
      title: "Illuminate",
      description: "An LLM-powered educational video generator that creates animated explanations for any topic. Inspired by 3Blue1Brown's videos.",
      award: "👑 Best Use of Generative AI - Hack@Brown 2025 👑",
      devpost: "https://devpost.com/software/illuminated-qf09ik",
      media: [
        { type: 'image', src: illuminate1 },
        { type: 'image', src: illuminate2 },
        { type: 'image', src: illuminate3 },
        { type: 'image', src: illuminate4 },
        { type: 'video', src: illuminate5 }
      ],
      proseDescription: "During Hack@Brown, my team and I developed an LLM-powered educational video generator that creates animated explanations for any topic, inspired by 3Blue1Brown's videos. The system utilizes LangChain to convert user prompts into comprehensive lesson plans, scripts, and animation sequences.\n\nI built the frontend interface using React, including a landing page, personalized settings, and interactive quiz components to test user comprehension. I also implemented the LangChain pipeline for the backend, creating custom nodes to process user prompts and orchestrate the video generation workflow, with FastAPI handling API requests and AWS infrastructure (EC2, S3, ApiGateway, Lambda) providing scalable deployment.",
      technologies: [
        "Python", "React", "AWS", "LangChain", "FastAPI", "Manim", "LLMs"
      ]
    },
    {
      id: 4,
      title: "Music Genre Classifier",
      description: "A hybrid deep learning model combining 2D CNN and MLP architectures to classify music genres from spectrograms and audio features.",
      github: "https://github.com/Domingo-v/beatbox-1470",
      media: [
        { type: 'image', src: musicArchitecture },
        { type: 'image', src: musicSpectrogramsPop },
        { type: 'image', src: musicSpectrogramsRock }
      ],
      proseDescription: "I developed a hybrid deep learning model that combines 2D CNN and MLP architectures to classify music genres from spectrograms and audio features.\n\nAudio files are first converted in spectrograms using librosa, and are then used to train the model. The system uses a 2D CNNs for spectrogram analysis with MLP for feature data processing. I applied data augmentation techniques to enhance frequency differences for better pattern recognition and trained the model on the Free Music Archive (FMA) dataset with 8,000 songs across 8 genres including rock, pop, electronic, and classical. The model generates LIME explanations for interpretability to understand which spectral regions influence genre predictions, achieving superior performance (51% accuracy) compared to CNN-only approaches by incorporating both spectral and tabular features.",
      technologies: [
        "Python", "TensorFlow", "CNN", "MLP", "Librosa", "NumPy", "LIME", "Audio Processing", "Deep Learning"
      ]
    },
    {
      id: 5,
      title: "Cahn-Hilliard Animal Prints",
      description: "A mathematical simulation of pattern formation in nature using the Cahn-Hilliard equation, demonstrating how complex animal prints emerge.",
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
      proseDescription: "I implemented a mathematical simulation of pattern formation in nature using the Cahn-Hilliard equation, demonstrating how complex animal prints emerge from simple mathematical principles. The project involved implementing the Cahn-Hilliard partial differential equation, which governs phase separation in binary mixtures:\n\n<div class='equation-box'>∂φ/∂t = M ∇² (φ³ - φ - ε² ∇²φ)</div>\n\n I then simulated pattern formation for zebras, giraffes, leopards, and honeycomb over time using Python and numerical methods. I created side-by-side comparisons of the simulated patterns with real animal prints.",
      technologies: [
        "Python", "NumPy", "SciPy", "Matplotlib", "PDEs", "Scientific Computing"
      ]
    },
    {
      id: 6,
      title: "Gaussian Naive Bayes Classifier",
      description: "A Gaussian Naive Bayes classifier built from scratch for coronary heart disease diagnosis. Built without using existing ML libraries.",
      github: "https://github.com/daniellew77/GNBforCoronaryHeartDisease/blob/main/src/gaussiannaivebayes.ipynb",
      media: [
        { type: 'image', src: gnbArchitecture },
        { type: 'image', src: gnbMatrix },
        { type: 'image', src: gnbRoc },
        { type: 'image', src: gnbFeatures }
      ],
      proseDescription: "I built a Gaussian Naive Bayes classifier from scratch for coronary heart disease diagnosis, implementing the complete algorithm using only NumPy without relying on existing ML libraries.\n\nThe project involved developing custom feature scaling and probability calculation functions, applying Gaussian probability distributions to handle continuous medical data, and achieving 85% accuracy on heart disease prediction using the UCI Heart Disease Dataset. This matched scikit-learn's performance on the same dataset! \n\n I created a comprehensive visualization suite for model diagnostics and feature analysis, demonstrating the algorithm's effectiveness in medical diagnosis applications.",
      technologies: [
        "Machine Learning", "Naive Bayes", "Python", "NumPy", "Pandas", "Matplotlib", "Medical ML"
      ]
    },
    {
      id: 7,
      title: "This website!",
      description: "Built with Javascript and React",
      isWebsiteCard: true 
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

  const openProjectModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset'; // Restore scrolling
  };

  return (
    <div className="projects-section">
      <h2 className="section-title">Projects</h2>
      
      {/* Project Cards Grid */}
      <div className="projects-grid">
        {projects && projects.filter(project => !project.isWebsiteCard).map(project => (
          <div 
            key={project.id} 
            className="project-card"
            onClick={() => openProjectModal(project)}
          >
            {project.id === 1 && (
              <div className="project-image">
                <img src={globaldisp1} alt="Global Displacement Atlas" />
              </div>
            )}
            {project.id === 2 && (
              <div className="project-image">
                <img src={peerakeetHome} alt="Peerakeet platform" />
              </div>
            )}
            {project.id === 3 && (
              <div className="project-image">
                <img src={illuminate3} alt="Illuminate video interface" />
              </div>
            )}
            {project.id === 4 && (
              <div className="project-image">
                <img src={musicArchitecture} alt="Music Genre Classifier Architecture" />
              </div>
            )}
            {project.id === 5 && (
              <div className="project-image">
                <img src={leopardGif} alt="Leopard pattern simulation" />
              </div>
            )}
            {project.id === 6 && (
              <div className="project-image">
                <img src={gnbRoc} alt="GNB ROC Curve" />
              </div>
            )}
            <div className="project-card-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="card-footer">
                <div className="card-footer-left">
                  {project.website && (
                    <a href={project.website} target="_blank" rel="noopener noreferrer" className="visit-link">
                      Visit →
                    </a>
                  )}
                </div>
                <div className="card-footer-right">
                  <span className="view-details">More →</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Website Card - Separate at bottom */}
      {projects && projects.find(project => project.isWebsiteCard) && (
        <div className="website-card-container">
          {projects.filter(project => project.isWebsiteCard).map(project => (
            <div 
              key={project.id} 
              className="project-card website-card"
              style={{ cursor: 'default' }}
            >
              <div className="project-card-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="project-modal-overlay" onClick={closeProjectModal}>
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeProjectModal}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
            
            <div className="modal-content">
              <div className="project-header">
                <h2>{selectedProject.title}</h2>
              </div>
              
              {selectedProject.award && (
                <Text as="p" className="award-tag">
                  {selectedProject.award}
                </Text>
              )}

              {selectedProject.proseDescription && (
                <div className="project-prose">
                  {selectedProject.proseDescription.split('\n').map((line, index) => {
                    if (line.includes('equation-box')) {
                      return <div key={index} dangerouslySetInnerHTML={{ __html: line }} />;
                    }
                    return <p key={index}>{line}</p>;
                  })}
                </div>
              )}

              {selectedProject.technologies && selectedProject.technologies.length > 0 && (
                <div className="technologies">
                  {selectedProject.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              )}

              <div className="project-links">
                {selectedProject.devpost && (
                  <a 
                    href={selectedProject.devpost} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="devpost-link"
                  >
                    View on Devpost <FontAwesomeIcon icon={faExternalLinkAlt} />
                  </a>
                )}
                {selectedProject.github && (
                  <a 
                    href={selectedProject.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="github-link"
                  >
                    View on GitHub <FontAwesomeIcon icon={faExternalLinkAlt} />
                  </a>
                )}
                {selectedProject.website && (
                  <a 
                    href={selectedProject.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="website-link"
                  >
                    Visit Website <FontAwesomeIcon icon={faExternalLinkAlt} />
                  </a>
                )}
              </div>

               {selectedProject.media && selectedProject.media.length > 0 && (
                 <div className="project-slideshow">
                   <Slider {...sliderSettings}>
                     {selectedProject.media.map((item, index) => renderMediaItem(item, index))}
                   </Slider>
                 </div>
               )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects; 