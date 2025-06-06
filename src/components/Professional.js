import React from 'react';
import { Card, Text, Heading } from '@radix-ui/themes';

function Professional() {
  const professionalExperience = [
    {
      id: 1,
      title: "Epic Systems",
      authors: "Software Engineering Intern",
      bulletPoints: [
        "Incoming intern for the summer of 2025 on Telehealth R&D team"
      ]
    },
    {
      id: 1,
      title: "Physicians for Human Rights",
      authors: "Programs Intern",
      bulletPoints: [
        "Built Istanbul Protocol training for Ukrainian clinicians documenting torture and sexual violence (to be launched in Kyiv in May 2025)",
        "Led internal all-staff briefings on AI/ML models and their applications to human rights and public health work",
        "Conducted and co-authored research on effects of Florida’s six-week abortion policy on practicing clinicians",
      ]
    },
    {
      id: 2,
      title: "Brown University Watson School for International and Public Affairs, Center for Human Rights and Humanitarian Studies",
      authors: "Teaching Fellow, Humanitarian Research Analyst",
      bulletPoints: [
        "Developed and co-taught IAPA 0310 (Reimagining Human Security), a course on human, national, and international security policy and practice with Professor David Polatty",
        "Designed curriculum and course materials",
        "Led weekly discussions and lectured on topics including climate change, migration, and tech policy",
        "Mentored students in research and writing for the course",
        "Investigated policies governing armed escorts for humanitarian convoys in 30 countries with active conflict zones",
      ]
    },
    {
      id: 3,
      title: "Brown University School of Public Health, Center for Alcohol and Addiction Studies",
      authors: "Research Assistant",
      bulletPoints: [
        "Conducted laboratory assessments with local mother-teen dyads across Rhode Island and Southern Massachusetts, administering semi-structured interviews of participant substance use, computerized behavioral task administration, and teen anthropometrics",
        "Analyzed data from 80+ dyads using R and SPSS for a longitudinal study on the impact of maternal tobacco use on adolescent development andsubstance use",
      ]
    },
    {
      id: 3,
      title: "UC Berkeley School of Law, Human Rights Center",
      authors: "Research and Communications Intern",
      bulletPoints: [
        "Conducted systematic analysis of international sexual violence cases citing digital evidence for use in development of the Berkeley Protocol",
        "Conducted the preliminary research for PBS documentary, Tulsa: The Fire and the Forgotten",
        "Performed qualitative research through alumni interviewing and article-writing, pioneering the first annual pride newsletter spotlighting alumni work in LGBTQ+ rights"
      ]
    },
    {
      id: 4,
      title: "The Access Challenge",
      authors: "Political Campaign Coordination Intern",
      bulletPoints: [
        "Planned and executed media dissemination for the Africa CDC's and African Union's Bingwa Initative, a Pan-African digital political campaign combating COVID-19 vaccine hesitancy within communities"
      ]
    },
    {
      id: 4,
      title: "Brown Emergency Medical Services",
      authors: "Ambulance Training Officer, Lead EMT",
      tag: "❤️ Volunteer ❤️",
      bulletPoints: [
        "Administered life support services and patient care to Providence community during medical emergencies",
        "Led training and certification for all onboarding EMTs and campus first responders",
        "Managed continuing education and promotion courses for over 20 active EMTs, leading weekly training sessions",
        "Led Summer 2023 Certification course, training 40 new EMTs",
      ]
    },
    {
      id: 4,
      title: "Crisis Text Line",
      authors: "Crisis Counselor",
      tag: "❤️ Volunteer ❤️",
      bulletPoints: [
        "Provide mental health crisis intervention for texters"
      ]
    },
    {
      id: 4,
      title: "Sexual Health and Peer Education (SHAPE)",
      authors: "Teacher",
      tag: "❤️ Volunteer ❤️",
      bulletPoints: [
        "Taught sexual health and reproductive education to high school students in Providence public schools"
      ]
    }
  ];

  const formatBulletPoint = (text) => {
    // Handle italics formatting
    return text.split('*').map((part, index) => 
      index % 2 === 1 ? <em key={index}>{part}</em> : part
    );
  };

  const renderProfessionalList = (experiences) => {
    return experiences.map(exp => (
      <Card key={exp.id} className="publication-item">
        <Heading as="h2" size="5">{exp.title}</Heading>
        <Text as="p" className="authors" size="3">
          {exp.authors}
        </Text>
        {exp.tag && (
          <Text as="p" className="volunteer-tag">
            {exp.tag}
          </Text>
        )}
        {exp.bulletPoints && (
          <ul className="bullet-points">
            {exp.bulletPoints.map((point, index) => (
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
        <h2 className="section-title">Professional</h2>
        {renderProfessionalList(professionalExperience)}
      </div>
    </div>
  );
}

export default Professional; 