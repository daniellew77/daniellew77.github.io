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
// Music Genre Classifier images
import musicArchitecture from '../assets/images/music_architecture.jpg';
import musicSpectrogramsPop from '../assets/images/music_spectrograms_pop.jpg';
import musicSpectrogramsRock from '../assets/images/music_spectrograms_rock.jpg';
// import musicLime from '../assets/images/music_lime_explanations.png';
// Peerakeet images
import peerakeetHome from '../assets/images/peerakeet_home.jpeg';
import peerakeetLanding from '../assets/images/peerakeet_home.jpeg';
import peerakeetHowFeels from '../assets/images/how_p_feels.jpg';
import peerakeetWhyWorks from '../assets/images/why_p_works.jpg';
import peerakeetPilot from '../assets/images/pilot_page.jpg';

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Peerakeet",
      description: "CPO of digital peer-to-peer support startup creating safe, stigma-free spaces for students and young adults in addiction recovery.",
      website: "https://www.peerakeet.com/",
      media: [
        { type: 'image', src: peerakeetLanding },
        { type: 'image', src: peerakeetHowFeels },
        { type: 'image', src: peerakeetWhyWorks },
        { type: 'image', src: peerakeetPilot }
      ],
      bulletPoints: [
        "Leading product strategy for anonymous peer support platform serving Gen Z students",
        "Built on evidence-based therapeutic techniques like Motivational Interviewing and CBT",
        "AI-moderated conversations with real-time crisis detection in under 10 milliseconds",
        "FERPA & HIPAA aligned privacy protections with anonymous analytics for institutions",
        "24/7 continuous support network preventing relapse patterns after acute treatment ends",
        "Peer support reduces relapse rates by 30-50% and generates significant cost savings per person"
      ],
      technologies: [
        "Product Strategy", "Behavioral Science", "Mental Health Tech", "Privacy & Compliance", "Startup Leadership"
      ]
    },
    {
      id: 2,
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
      bulletPoints: [
        "Utilized LangChain to convert user prompts into lesson plans, scripts, and animation",
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
      id: 3,
      title: "Music Genre Classifier",
      description: "A hybrid deep learning model combining 2D CNN and MLP architectures to classify music genres from spectrograms and audio features.",
      github: "https://github.com/Domingo-v/beatbox-1470",
      media: [
        { type: 'image', src: musicArchitecture },
        { type: 'image', src: musicSpectrogramsPop },
        { type: 'image', src: musicSpectrogramsRock }
      ],
      bulletPoints: [
        "Developed hybrid architecture combining 2D CNN for spectrogram analysis with MLP for feature data processing",
        "Implemented audio preprocessing pipeline using librosa to convert 30-second audio files into spectrograms",
        "Applied data augmentation techniques to enhance frequency differences for better pattern recognition", 
        "Trained on Free Music Archive (FMA) dataset with 8,000 songs across 8 genres including rock, pop, electronic, and classical",
        "Generated LIME explanations for model interpretability to understand which spectral regions influence genre predictions",
        "Achieved superior performance (51% accuracy) compared to CNN-only approach by incorporating both spectral and tabular features"
      ],
      technologies: [
        "Python", "TensorFlow", "CNN", "MLP", "Librosa", "NumPy", "LIME", "Audio Processing", "Deep Learning"
      ]
    },
    {
      id: 4,
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
      bulletPoints: [
        "Implemented the Cahn-Hilliard partial differential equation: ∂φ/∂t = M ∇² (φ³ - φ - ε² ∇²φ)",
        "Simulated pattern formation for zebras, giraffes, leopards, and honeycomb over time using Python and numerical methods",
        "Created side-by-side comparisons of simulated patterns with real animal prints",
        "Demonstrated how biological patterns emerge from simple mathematical principles"
      ],
      technologies: [
        "Python", "NumPy", "SciPy", "Matplotlib", "PDEs", "Scientific Computing"
      ]
    },
    {
      id: 5,
      title: "Gaussian Naive Bayes Classifier",
      description: "A Gaussian Naive Bayes classifier built from scratch for coronary heart disease diagnosis. Built without using existing ML libraries.",
      github: "https://github.com/daniellew77/GNBforCoronaryHeartDisease/blob/main/src/gaussiannaivebayes.ipynb",
      media: [
        { type: 'image', src: gnbArchitecture },
        { type: 'image', src: gnbMatrix },
        { type: 'image', src: gnbRoc },
        { type: 'image', src: gnbFeatures }
      ],
      bulletPoints: [
        "Implemented complete Gaussian Naive Bayes algorithm from ground up using only NumPy",
        "Developed custom feature scaling and probability calculation functions",
        "Achieved 85% accuracy on heart disease prediction using UCI Heart Disease Dataset, matching scikit-learn's performance",
        "Created visualization suite for model diagnostics and feature analysis",
        "Applied Gaussian probability distributions to handle continuous medical data"
      ],
      technologies: [
        "Machine Learning", "Naive Bayes", "Python", "NumPy", "Pandas", "Matplotlib", "Medical ML"
      ]
    },
    {
      id: 6,
      title: "This website!",
      description: "Built with Javascript and React",
      isWebsiteCard: true // Special flag to identify this card
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
                <img src={peerakeetHome} alt="Peerakeet platform" />
              </div>
            )}
            {project.id === 2 && (
              <div className="project-image">
                <img src={illuminate3} alt="Illuminate video interface" />
              </div>
            )}
            {project.id === 3 && (
              <div className="project-image">
                <img src={musicArchitecture} alt="Music Genre Classifier Architecture" />
              </div>
            )}
            {project.id === 4 && (
              <div className="project-image">
                <img src={leopardGif} alt="Leopard pattern simulation" />
              </div>
            )}
            {project.id === 5 && (
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
              
              <p className="project-description">{selectedProject.description}</p>
              
              {selectedProject.award && (
                <Text as="p" className="award-tag">
                  {selectedProject.award}
                </Text>
              )}

               {selectedProject.media && selectedProject.media.length > 0 && (
                 <div className="project-slideshow">
                   <Slider {...sliderSettings}>
                     {selectedProject.media.map((item, index) => renderMediaItem(item, index))}
                   </Slider>
                 </div>
               )}

               {selectedProject.bulletPoints && selectedProject.bulletPoints.length > 0 && (
                 <ul className="bullet-points">
                   {selectedProject.bulletPoints.map((point, index) => (
                     <li key={index}>{point}</li>
                   ))}
                 </ul>
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
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects; 