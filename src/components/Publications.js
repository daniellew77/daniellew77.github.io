import React, { useState } from 'react';
import { Card, Text, Heading, Link } from '@radix-ui/themes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faTimes } from '@fortawesome/free-solid-svg-icons';

function Publications() {
  const [selectedResearch, setSelectedResearch] = useState(null);

  const activeResearch = [
    {
      id: 1,
      title: "Brown University Data in Society Collective (DISCO Lab)",
      authors: "Graduate Researcher for Dr. Harini Suresh",
      description:
        "Ongoing master's thesis investigating content moderation decisions in the context of human rights documentation"
    }
  ];

  const pastResearch = [
    // {
    //   id: 1,
    //   title: "The Use of Armed Escorts for Humanitarian Convoys in Conflict Zones",
    //   organization: "Brown University Watson School for International and Public Affairs, Center for Human Rights and Humanitarian Studies",
    //   shortDescription: "whatevs",
    //   description: "Study in partnership with UN Office for the Coordination of Humanitarian Affairs (OCHA)",
    //   link: "https://doi.org/10.26300/01t5-na83",
    // },
    {
      id: 2,
      title: "Delayed and Denied: How Florida's Six-Week Abortion Ban Criminalizes Medical Care",
      organization: "Physicians for Human Rights",
      shortDescription: "Research report on Florida's six-week abortion ban and its impact on medical care.",
      description: "Cited in the US Senate Committee on Finance, CNN, CBS, Politico, NBC, and more.",
      link: "https://phr.org/our-work/resources/delayed-and-denied-floridas-six-week-abortion-ban/?utm_source=homepage"
    },
    {
      id: 3,
      title: "SES Moderates the Relationship Between Cognitive Reappraisal and Stress in Teens",
      organization: "Brown University School of Public Health, Center for Alcohol and Addiction Studies",
      shortDescription: "Research study examining how socioeconomic status affects cognitive reappraisal strategies in adolescents.",
      link: "https://drive.google.com/file/d/1Oo0OYq9KNMK9XgKOubv_yXjop6kJ9-9R/view?usp=sharing",
      award: "👑 First Place Poster, Overall Excellence Award 👑"
    },
    {
      id: 4,
      title: "Associations Between Perceived Harms of Cannabis Use and Demographic Characteristics",
      organization: "Brown University School of Public Health, Center for Alcohol and Addiction Studies",
      shortDescription: "Study analyzing the relationship between demographic factors and perceived cannabis-related risks.",
      link: "https://doi.org/10.26300/01t5-na83",
    },
    {
      id: 5,
      title: "HRC Pride: Spotlighting our alumni",
      organization: "UC Berkeley School of Law, Human Rights Center",
      shortDescription: "Qualitative research and publication project highlighting LGBTQ+ alumni achievements.",
      link: "https://issuu.com/hrcberkeley/docs/hrc_pride_spotlighting_our_alumni_c59f6f2057bf50",
      bulletPoints: [
        "Conducted qualitative research through alumni interviewing and article-writing, pioneering the first annual pride newsletter spotlighting alumni work in LGBTQ+ rights (linked below)",
      ]
    },
    {
      id: 6,
      title: "State of the Doulas: A Mixed Methods Analysis",
      organization: "Mama Glow",
      shortDescription: "Comprehensive analysis of doula networks and practices across the United States.",
      link: "https://drive.google.com/file/d/1HQzDzwcSyGKuejL-taprDcr76H9EtM_N/view?usp=sharing",
      bulletPoints: [
        "Coded interactive map tracking network of doulas across US"
      ]
    },
    {
      id: 7,
      title: "An Appeal to the US Secretary of Education in Support of Peace Education (Op-ed)",
      organization: "Global Campaign for Peace Education",
      shortDescription: "Opinion editorial advocating for peace education integration in US educational policy.",
      link: "https://www.peace-ed-campaign.org/an-appeal-to-the-us-secretary-of-education-in-support-of-peace-education/",
    },
  ];

  const formatBulletPoint = (text) => {
    // Handle italics formatting
    return text.split('*').map((part, index) => 
      index % 2 === 1 ? <em key={index}>{part}</em> : part
    );
  };

  const openResearchModal = (research) => {
    setSelectedResearch(research);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeResearchModal = () => {
    setSelectedResearch(null);
    document.body.style.overflow = 'unset'; // Restore scrolling
  };

  const renderActiveResearchList = (publications) => {
    return publications.map(pub => (
      <Card key={pub.id} className="publication-item">
        <Heading as="h2" size="5">{pub.title}</Heading>
        <Text as="p" className="authors" size="3">
          {pub.authors}
        </Text>
        <Text as="p" className="venue" size="2">
          {pub.venue}
        </Text>
        {pub.description && (
          <Text as="p" className="description" size="2">
            {pub.description}
          </Text>
        )}
        {pub.bulletPoints && (
          <ul className="bullet-points">
            {pub.bulletPoints.map((point, index) => (
              <li key={index}>{formatBulletPoint(point)}</li>
            ))}
          </ul>
        )}
      </Card>
    ));
  };

  return (
    <div className="publications-section">
      <div className="research-section">
        <h2 className="section-title">MPH Research</h2>
        {renderActiveResearchList(activeResearch)}
      </div>
      
      <div className="research-section">
        <h2 className="section-title">Completed Research</h2>
        
        {/* Research Cards Grid */}
        <div className="research-grid">
          {pastResearch.map(research => (
            <div 
              key={research.id} 
              className="research-card"
              onClick={() => openResearchModal(research)}
            >
              <h3>{research.title}</h3>
              <p className="organization">{research.organization}</p>
              <div className="card-footer">
                <span className="view-details">More →</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Research Detail Modal */}
      {selectedResearch && (
        <div className="research-modal-overlay" onClick={closeResearchModal}>
          <div className="research-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeResearchModal}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
            
            <div className="modal-content">
              <div className="research-header">
                <h2>{selectedResearch.title}</h2>
                <p className="organization">{selectedResearch.organization}</p>
              </div>
              
              {selectedResearch.award && (
                <Text as="p" className="award-tag">
                  {selectedResearch.award}
                </Text>
              )}

              {selectedResearch.description && (
                <p className="research-description">{selectedResearch.description}</p>
              )}

              {selectedResearch.bulletPoints && (
                <ul className="bullet-points">
                  {selectedResearch.bulletPoints.map((point, index) => (
                    <li key={index}>{formatBulletPoint(point)}</li>
                  ))}
                </ul>
              )}

              {selectedResearch.link && (
                <div className="research-links">
                  <a 
                    href={selectedResearch.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="publication-link"
                  >
                    View Publication <FontAwesomeIcon icon={faArrowRight} />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Publications; 