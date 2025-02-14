import React from 'react';
import { Card, Text, Heading, Link } from '@radix-ui/themes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Publications() {
  const activeResearch = [
    {
      id: 2,
      title: "Brown University Data in Society Collective (DISCO Lab)",
      authors: "Undergraduate Researcher for Dr. Harini Suresh",
      description:
        "Thesis: Using Convolutional Neural Networks in Mapping and Detecting International Sexual and Gender-Based Violence"
      
    },
    {
      id: 1,
      title: "Physicians for Human Rights",
      authors: "Programs Intern",
      bulletPoints: [
        "Build Istanbul Protocol training for Ukrainian clinicians documenting torture and sexual violence (to be taught on-site in Kyiv in May 2025)",
        "Lead internal all-staff briefings on AI/ML models and their applications to human rights and public health work"
      ]
    },
    {
      id: 1,
      title: "Brown University Watson Institute for International Studies, Center for Human Rights and Humanitarian Studies",
      authors: "Humanitarian Research Analyst and Teaching Fellow for Professor David Polatty",
      bulletPoints: [
        "With UNOCHA, investigate policies and practices of the use of armed escorts for humanitarian convoys in thirty countries with active conflict zones",
        "Developed IAPA 0310 (Reimagining Human Security), a course on human, national, and international security policy and practice" 
      ]
    },
    {
      id: 1,
      title: "Brown Initiative for Policy",
      authors: "Research Analyst",
      bulletPoints: [
        "Develop public-facing map displaying broadband access across demographic variables for RI Government",
        "Draft white paper on broadband access and digital equity in RI for AARP, Connect RI, and the House Committee on Innovation, Internet, and Technology" 
      ]
    },
  ];

  const pastResearch = [
    {
      id: 1,
      title: "Physicians for Human Rights",
      authors: "Delayed and Denied: How Florida's Six-Week Abortion Ban Criminalizes Medical Care",
      description: "Cited in the US Senate Committee on Finance, CNN, CBS, Politico, NBC, and more.",
      link: "https://phr.org/our-work/resources/delayed-and-denied-floridas-six-week-abortion-ban/?utm_source=homepage"
    },
    {
      id: 2,
      title: "Brown University School of Public Health, Center for Alcohol and Addiction Studies",
      authors: "SES Moderates the Relationship Between Cognitive Reappraisal and Stress in Teens",
      link: "https://drive.google.com/file/d/1Oo0OYq9KNMK9XgKOubv_yXjop6kJ9-9R/view?usp=sharing",
      award: "👑 First Place Poster, Overall Excellence Award 👑"
    },
    {
      id: 3,
      title: "Brown University School of Public Health, Center for Alcohol and Addiction Studies",
      authors: "Associations Between Perceived Harms of Cannabis Use and Demographic Characteristics",
      link: "https://doi.org/10.26300/01t5-na83",
    },
    {
      id: 5,
      title: "UC Berkeley School of Law, Human Rights Center",
      authors: "HRC Pride: Spotlighting our alumni",
      link: "https://issuu.com/hrcberkeley/docs/hrc_pride_spotlighting_our_alumni_c59f6f2057bf50",
      bulletPoints: [
        "Conducted qualitative research through alumni interviewing and article-writing, pioneering the first annual pride newsletter spotlighting alumni work in LGBTQ+ rights (linked below)",
        "Performed analysis of international sexual violence cases citing digital evidence for use in development of Berkeley Protocol",
        "Conducted the preliminary research for PBS documentary, *Tulsa: The Fire and the Forgotten*"
      ]
    },
    {
      id: 4,
      title: "Mama Glow",
      authors: "State of the Doulas: A Mixed Methods Analysis",
      link: "https://drive.google.com/file/d/1HQzDzwcSyGKuejL-taprDcr76H9EtM_N/view?usp=sharing",
      bulletPoints: [
        "Coded interactive map tracking network of doulas across US"
      ]
    },
    {
      id: 5,
      title: "Global Campaign for Peace Education",
      authors: "An Appeal to the US Secretary of Education in Support of Peace Education (Op-ed)",
      link: "https://www.peace-ed-campaign.org/an-appeal-to-the-us-secretary-of-education-in-support-of-peace-education/",
    },
  ];

  const formatBulletPoint = (text) => {
    // Handle italics formatting
    return text.split('*').map((part, index) => 
      index % 2 === 1 ? <em key={index}>{part}</em> : part
    );
  };

  const renderPublicationList = (publications) => {
    return publications.map(pub => (
      <Card key={pub.id} className="publication-item">
        <Heading as="h2" size="5">{pub.title}</Heading>
        <Text as="p" className="authors" size="3">
          {pub.authors}
        </Text>
        {pub.award && (
          <Text as="p" className="award-tag">
            {pub.award}
          </Text>
        )}
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
        {pub.link && (
          <Link 
            href={pub.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="publication-link"
          >
            View <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        )}
      </Card>
    ));
  };

  return (
    <div className="publications-section">
      <div className="research-section">
        <h2 className="section-title">Active Research</h2>
        {renderPublicationList(activeResearch)}
      </div>
      
      <div className="research-section">
        <h2 className="section-title">Completed Research</h2>
        {renderPublicationList(pastResearch)}
      </div>
    </div>
  );
}

export default Publications; 