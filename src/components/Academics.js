import React, { useState } from 'react';
import { Card, Text, Heading } from '@radix-ui/themes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

function Academics() {
  const [expandedSections, setExpandedSections] = useState({});
  const [showConcentrationModal, setShowConcentrationModal] = useState(false);

  const toggleSection = (sectionName) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionName]: !prev[sectionName]
    }));
  };

  const degrees = [
    {
      id: 1,
      degrees: [
        "Master of Public Health in Digital Rights"
      ],
      institution: "Brown University School of Public Health"
    },
    {
      id: 2,
      degrees: [
        "ScB in Applied Mathematics-Biology",
        "AB in Computer Science"
      ],
      institution: "Brown University"
    }
  ];

  const courseworkSections = {
    "Master's Coursework": [
      {
        id: 4,
        course: "IAPA 1811",
        title: "Contemporary Digital Policy and Politics",
        description: "Creation of national policies at the White House, the regulatory process, legislation, standards, global implications and the politics of technological change"
      },
      {
        id: 2,
        course: "PHP 2150",
        title: "Modern Epidemiologic Research Methods",
        description: "Foundational theory and methods of epidemiologic research methods; Designed for PhD students in Public Health"
      },
      {
        id: 3,
        course: "PHP 1690",
        title: "Technology and Health Behavior Change",
        description: "Survey course on computing systems and technologies used to change health behavior; Theory and evaluation methods"
      },
      {
        id: 1,
        course: "PHP 2510",
        title: "Biostatistics and Data Analysis",
        description: "Statistical methods for public health research and data analysis; Taught in R"
      },
      {
        id: 1,
        course: "PHP 2511",
        title: "Applied Regression Analysis",
        description: "Regression analysis techniques, such as linear, logistic, and Poisson regression; Taught in R"
      },
      

      {
        id: 4,
        course: "PHP 1460",
        title: "Public Health Law and Policy",
        description: "Constitutional and governmental foundations of public health law; Legal and policy analysis strategies"
      },
      
      {
        id: 4,
        course: "IAPA 1804M",
        title: "Overcoming Threats to Human Security",
        description: "Challenges and opportunities related to global issues from both a human and national security perspective; Key issues include humanitarian crises caused by natural disasters, climate security, food and water security, urbanization, mass migration, and global health security"
      }
    ],
    "Other Public Health": [
      {
        id: 1,
        course: "PHP 0310",
        title: "Healthcare in the United States",
        description: "Introduction to the U.S. healthcare system, including the organization of healthcare delivery, financing, and policy"
      },
      {
        id: 1,
        course: "GLOH 2260",
        title: "Political Economy of Health and Development",
        description: "Introductory and intermediate microeconomic analysis of health and development, including demand and supply of health care and health insurance. Taken at Georgetown University"
      },
      {
        id: 2,
        course: "WGST 222",
        title: "Relationship Violence and Sexual Assault",
        description: "Analysis of intimate partner violence, sexual assault, and stalking in theory and practice; Evaluation of current systems and policies that exist to support survivors and hold perpetrators accountable. Taken at Georgetown University"
      },
      {
        id: 3,
        course: "ANTH 1515",
        title: "Anthropology of Mental Health",
        description: "Anthropological perspectives on mental health and illness, tracing the emergence, translation, and critique of diagnostic categories across different parts of the contemporary world"
      },
      {
        id: 3,
        course: "GLOH 1140",
        title: "Introduction to Global Health",
        description: "Introduction to health and health sector issues within the context of comparative biological, social, economic, and political systems; Principles of comparative health systems structure, financing, and reform. Taken at Georgetown University"
      },
      {
        id: 3,
        course: "GLOH 1177",
        title: "Epidemiologic Applications to Population Health",
        description: "Introduction to epidemiologic methods and applications to population health. Taken at Georgetown University"
      },
      {
        id: 3,
        course: "HSCI 127",
        title: "Drugs, Health, and Society",
        description: "Social and cultural determinants, and biological mechanisms of drug use and abuse. Taken at Diablo Valley College"
      }
    ],
    "Mathematics": [
      {
        id: 1,
        course: "MATH 0520",
        title: "Linear Algebra",
        description: "Vector spaces, linear transformations, and matrix theory. Taken at Diablo Valley College"
      },
      {
        id: 2,
        course: "MATH 194",
        title: "Multivariable Calculus",
        description: "Vector calculus, partial derivatives, multiple integrals, and vector fields. Taken at UC Berkeley"
      },
        {
          id: 3,
          course: "APMA 0350",
          title: "Applied Ordinary Differential Equations",
          description: "Ordinary differential equations, including systems of linear equations, Laplace transforms, and series solutions"
        },
        {
          id: 4,
          course: "APMA 0360",
          title: "Applied Partial Differential Equations",
          description: "Partial differential equations, including Fourier series, separation of variables, and Green's functions"
        },
        {
          id: 5,
          course: "APMA 1650",
          title: "Statistical Inference I",
          description: "Probability theory, random variables, and distributions; Point and interval estimation; Hypothesis testing; Analysis of variance and regression"
        },
        {
          id: 6,
          course: "APMA 1070",
          title: "Quantitative Models of Biological Systems",
          description: "Mathematical modeling of biological systems; Systems biology; Biochemical reaction networks; Population dynamics; Systems pharmacology"
        },
        {
          id: 7,
          course: "APMA 1080",
          title: "Inference in Genomics and Molecular Biology",
          description: "Statistical methods for analyzing high-throughput genomic and molecular data; Bayesian inference; Machine learning; Computational probability and statistics; Taught in MATLAB"
        }
    ],
    "Computer Science": [
      {
        id: 1,
        course: "CSCI 0111",
        title: "Computing Foundations: Data Analysis",
        description: "Introduction to computing and programming focused on understanding and manipulating btoh tabular and structured data; Basic data science concepts; Taught in Python"
      },
      {
        id: 2,
        course: "CSCI 0200",
        title: "Program Design: Data Structures and Algorithms",
        description: "Data structures and algorithms; Object-oriented programming; Taught in Java and Python"
      },
        {
          id: 3,
          course: "DATA 2060",
          title: "Machine Learning",
          description: "Statistical learning theory and machine learning algorithms; Taught in Python"
        },
        {
          id: 4,
          course: "CSCI 1470",
          title: "Deep Learning",
          description: "Deep learning models and applications, including RL, NLP, and CV; Taught in Python"
        }
    ],
    "Pre-Medical": [
      {
        id: 1,
        course: "HSCI 101 and 102",
        title: "Human Biology I and II",
        description: "Study of the structure and function of living systems; Two-semester anatomy and physiology sequence with lab. Taken at Georgetown University"
      },
      {
        id: 2,
        course: "CHEM 0010 and 0020",
        title: "General Chemistry I and II",
        description: "Chemical equilibrium, kinetics, and molecular structure. Taken at Georgetown University"
      },
      {
        id: 3,
        course: "CHEM 0350 and 0360",
        title: "Organic Chemistry I and II",
        description: "Structure, bonding, and reactions of organic molecules; Chemistry of pi bonds and functional groups"
      },
      {
        id: 4,
        course: "BIOL 0280",
        title: "Biochemistry",
        description: "Chemical reactions in living systems; Enzymes, metabolism, and molecular genetics"
      },

      {
        id: 3,
        course: "PHYS 0070",
        title: "Analytical Mechanics",
        description: "Classical mechanics with rigorous mathematical analysis; Calculus-based for physics majors"
      },
      {
        id: 4,
        course: "BIOL 1820",
        title: "Environmental Health and Disease",
        description: "Mechanisms of toxicology, exposure, and disease, such as lead, PFAS, and other contaminants"
      },
      

    ],
    "Miscellaneous": [

      {
        id: 2,
        course: "INAF 008",
        title: "Maps of the Modern World",
        description: "Survey of physical and political geography of the modern world with emphasis on historical, legal, and geographical forces. Taken at Georgetown University"
      },
      {
        id: 3,
        course: "ANTH 140",
        title: "Biological Anthropology",
        description: "Evolutionary theory and human origins. Taken at Diablo Valley College"
      },
      {
        id: 4,
        course: "ANTH 130",
        title: "Cultural Anthropology",
        description: "Introduction to the study of human societies and cultures. Taken at Diablo Valley College"
      },

      {
        id: 1,
        course: "JUPS 123",
        title: "Introduction to Justice and Peace Studies",
        description: "Theoretical and practical perspectives on peace and social justice. Taken at Georgetown University"
      },
      {
        id: 3,
        course: "THEO 001",
        title: "The Problem of God",
        description: "Introductory religious studies course. Taken at Georgetown University"
      },
      {
        id: 4,
        course: "PHILO 120",
        title: "Introduction to Ethics",
        description: "Introduction to ethical theory and practice, including utilitarianism, deontology, and virtue ethics. Taken at Diablo Valley College"
      },
      {
        id: 5,
        course: "SOCIO 120",
        title: "Introduction to Sociology",
        description: "Introduction to sociology, including the study of social structures, social interaction, and social change. Taken at Diablo Valley College"
      },
      {
        id: 6,
        course: "FTVE 282",
        title: "American Cinema 1950-Present",
        description: "History of American cinema from the 1950s to the present. Taken at Diablo Valley College"
      }

    ]
  };

  const renderDegreeCards = () => {
    return degrees.map(degree => (
      <Card 
        key={degree.id} 
        className="degree-card"
        data-is-mph={degree.degrees.includes("Master of Public Health in Digital Rights")}
        onClick={degree.degrees.includes("Master of Public Health in Digital Rights") ? () => setShowConcentrationModal(true) : undefined}
        style={degree.degrees.includes("Master of Public Health in Digital Rights") ? { cursor: 'pointer' } : {}}
      >
        <div className="degree-list">
          {degree.degrees.map((deg, index) => (
            <Text key={index} as="p" className="degree-item">
              {deg}
            </Text>
          ))}
        </div>
        <Text as="p" className="institution">
          {degree.institution}
        </Text>
        {degree.degrees.includes("Master of Public Health in Digital Rights") && (
          <div className="card-footer">
            <span className="view-details">
              More →
            </span>
          </div>
        )}
      </Card>
    ));
  };

  const renderCourseworkSection = (sectionName, courses) => {
    const isExpanded = expandedSections[sectionName];
    
    return (
      <div key={sectionName} className="coursework-section">
        <div 
          className="coursework-header"
          onClick={() => toggleSection(sectionName)}
        >
          <h3>{sectionName}</h3>
          <FontAwesomeIcon 
            icon={isExpanded ? faChevronUp : faChevronDown} 
            className="chevron-icon"
          />
        </div>
        
        {isExpanded && (
          <div className="coursework-content">
            <div className="coursework-list">
              {courses.map(course => (
                <div key={course.id} className="course-item">
                  <div className="course-header">
                    <span className="course-code">{course.course}</span>
                    <span className="course-title">{course.title}</span>
                  </div>
                  <p className="course-description">
                    {course.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="academics-section">
      <h2 className="section-title">Academics</h2>
      
      {/* Degree Cards */}
      <div className="degrees-grid">
        {renderDegreeCards()}
      </div>
      
      {/* Coursework Sections */}
      <div className="coursework-sections">
        {Object.entries(courseworkSections).map(([sectionName, courses]) =>
          renderCourseworkSection(sectionName, courses)
        )}
      </div>

      {/* Concentration Modal */}
      {showConcentrationModal && (
        <div className="modal-overlay" onClick={() => setShowConcentrationModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Digital Rights Concentration</h3>
              <button 
                className="modal-close-btn"
                onClick={() => setShowConcentrationModal(false)}
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            <div className="modal-body">
              <div className="concentration-overview">
                <h4>Concentration Framework</h4>
                <p>
                  My self-designed concentration investigates how emerging technologies intersect to undermine and support human rights and public health. I approach this issue from domestic and international policy frameworks, analyzing current disputes in digital governance and their impact on health equity.
                </p>
                
                <h4>Thesis Focus</h4>
                <p>
                  <strong>"Algorithmic Shadows: Deciphering Social Media Takedowns of Public Health and Human Rights Documentation in Conflict Zones"</strong>
                </p>
                
                <h4>Key Competencies</h4>
                <ul>
                  <li>Analyze how emerging digital technologies and global governance frameworks influence population health, equity, and institutional accountabilityy</li>
                  <li>Apply public health legal frameworks to assess policy responses to emerging technologies</li>
                  <li>Apply behavioral science theories to analyze how digital technologies influence health behaviors</li>
                  <li>Design and critique strategies to monitor, evaluate, and improve digital public health interventions for equity and effectiveness</li>
                </ul>
                
                <h4>Core Courses</h4>
                <ul>
                  <li><strong>IAPA 1811:</strong> Contemporary Digital Policy and Politics</li>
                  <li><strong>PHP 1460:</strong> Public Health Law and Policy</li>
                  <li><strong>PHP 1690:</strong> Technology and Health Behavior Change</li>
                  <li><strong>IAPA 1804M:</strong> Overcoming Threats to Human Security</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Academics; 