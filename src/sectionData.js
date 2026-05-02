/* ============================================================
   SECTION DATA
   All real content from Danielle's site, lightly edited for the new layouts.
   ============================================================ */

export const SECTION_DATA = {
  bio: {
    title: "Bio",
    eyebrow: "01 / Hey there!",
    headshot: "assets/me_smile_headshot.png",
    paragraphs: [
      "Hi! I'm Danielle, a Master of Public Health student at Brown University working at the intersection of technology, public health, and human rights. I think of myself as a public interest technologist and researcher: I investigate how digital systems shape society and power, and I design tools and policies that promote well-being, justice, and accountability. I am drawn to work that crosses academia, civil society, and the private sector, whether in policy, research, or product development.",
      "I'm originally from Northern California, currently based in Providence, Rhode Island. In my free time, you can find me running, attempting (and often failing) at crafts, designing clothes, cuddling my cats, or curled up with a good book—usually fantasy or magical realism.",
    ],
  },

  academia: {
    title: "Academia & Research",
    eyebrow: "02 / Learning",
    intro: "I am passionate about research, advocacy, and education at the intersection of technology, public health, and human rights, both globally and domestically. I am drawn to projects built on civil society-academic partnerships and community-based, participatory approaches. I am also interested in algorithmic auditing, fair ML research, open-source investigation, content moderation, and the mental and physical health impacts of emerging technologies. I bring an interdisciplinary lens to my research, shaped by my background in CS, biology, and math, and my experiences in clinical care, human rights advocacy, and public health. I hope to pursue a PhD in the coming years!",
    research: [
      {
        year: "2026 — present",
        start: 2026,
        org: "Brown University · Department of Computer Science",
        sub: "Data in Society Collective (DISCO Lab)",
        role: "Graduate Student Researcher",
        advisor: "Advised by Dr. Harini Suresh",
        current: true,
        chipLabel: "Brown Department of Computer Science",
        bullets: [
          "(Ongoing) For my master's thesis, I conducted an algorithmic audit of platforms' takedowns of war crime documentation in Syria and the Palestinian West Bank. This study was the first of its kind to systematically investigate these takedowns in a conflict setting, and one of the first to do so using multimodal content embeddings, which simulated automated content moderation systems. You can read my thesis below! My immediate next steps for this project include interpretability analysis and participatory design.",
          "(Ongoing) I am designing and developing a chat-based collaborative platform with a team of interdisciplinary researchers for grassroots activists to build customizable content moderation filters on Bluesky. This project is built on participatory design principles, with the goal of creating a tool that is useful to activists and responsive to their needs."
        ],
      },
      {
        year: "2026 — present",
        start: 2026.4,
        org: "Boston Children's Hospital · Harvard Medical School",
        sub: "Computational Health Informatics Program (CHIP)",
        advisor: "Advised by Dr. Maimuna Majumder",
        role: "AI/ML Research Intern",
        current: true,
        chipLabel: "Boston Children's / Harvard Medical",
        bullets: [
          "(Ongoing) I am auditing large vision language models' production of unwanted sexualization of high-contrast bodies when used in aesthetic/fashion contexts."
        ],
      },
      {
        year: "2024 — 2025",
        start: 2024,
        org: "Brown Watson School of International Affairs · Center for Human Rights and Humanitarian Studies",
        role: "Teaching Fellow · Humanitarian Research Analyst",
        advisor: "Mentored by Professor David Polatty",
        bullets: [
          "With Professor Polatty, I developed and co-taught IAPA 0310 (Reimagining Human Security), a course on human, national, and international security policy and practice, for two years. I designed the curriculum and course materials, which included foundational concepts in human security (humanitarian sector, UN, security council, etc.) and a survey of areas of human security (by week: armed conflict, climate, migration, gender and personal security, economic, health, food and water, technology). I led discussions in each class and lectured on migration and technology. I served as the only TA for this course, which grew from fifty to eighty students in one year, and mentored students in research and writing.",
          "Partnering with UN OCHA, I organized and co-led a team of twelve students to investigate policies governing armed escorts for humanitarian convoys in 30 countries with active conflict zones. This mixed-method study utilized surveys and interviews with subject matter experts around the world, including NGO leaders and UNOCHA officers. We compiled our findings into a comprehensive report, which was shared with UN agencies and other humanitarian actors to inform future practice.",
        ],
      },
      {
        year: "2023 — 2024",
        start: 2023,
        org: "Brown School of Public Health · Center for Alcohol and Addiction Studies",
        role: "Research Assistant",
        advisor: "Advised by Dr. Lauren Micalizzi",
        bullets: [
          "This lab was my introduction to participant-centered research. In it, I worked on the PATHWAYS project, a longitudinal study of adolescent substance use and mental health, which revisited moms that smoked tobacco during pregnancy and their now-adolescent children. I conducted in-person assessments with these moms and teens across Rhode Island and Southern Massachusetts, during which I conducted semi-structured interviews regarding participant substance use and mental health, administered computerized behavioral tasks, and collected anthropometrics.",
          "I mentored my fellow lab members in study procedures, and helped the lab transition to using R for data analysis.",
          "I analyzed data from over 80 dyads and presented at multiple poster conferences within Brown, as well as to all of Brown School of Public Health. I won first place for my poster at the 2024 CAAS Faculty/Staff Research Poster Symposium.",
        ],
      },
      {
        year: "2022 — 2023",
        start: 2022,
        org: "UC Berkeley School of Law · Human Rights Center",
        role: "Research and Communications Intern",
        bullets: [
          "Conducted systematic analysis of international sexual violence cases citing digital evidence for the development of the Berkeley Protocol.",
          "Performed preliminary research for the PBS documentary Tulsa: The Fire and the Forgotten.",
          "Led qualitative research and alumni interviewing for the first annual pride newsletter spotlighting alumni work in LGBTQ+ rights.",
        ],
      },
    ],
    education: [
      {
        year: "2025 — 2026",
        degree: "Master of Public Health, Digital Rights",
        institution: "Brown University School of Public Health",
        concentration: "Through their interdisciplinary concentration program (shoutout Dr. Deborah Pearlman!), Brown allowed me to build my own concentration within the MPH, so I now hold the first degree in Digital Rights within the School of Public Health. My curriculum approached this issue from policy/law, behavioral science, critical, and computational perspectives in both domestic and global contexts.",
        competencies: [
          "Analyze how emerging digital technologies and global governance frameworks influence population health, equity, and institutional accountability",
          "Apply public health legal frameworks to assess policy responses to emerging technologies",
          "Apply behavioral science theories to analyze how digital technologies influence health behaviors",
          "Design and critique strategies to monitor, evaluate, and improve digital public health interventions for equity and effectiveness",
        ],
        coreCourses: [
          { code: "IAPA 1811", title: "Contemporary Digital Policy and Politics", concentration: true },
          { code: "PHP 1460", title: "Public Health Law and Policy", concentration: true },
          { code: "PHP 1690", title: "Technology and Health Behavior Change", concentration: true },
          { code: "IAPA 1804M", title: "Overcoming Threats to Human Security", concentration: true },
          { code: "CSCI 2952W", title: "Critical AI and Data Studies", concentration: true },
          { code: "CSCI 1491", title: "Fairness in Automated Decision-Making", concentration: true },
          { code: "PHP 2510", title: "Biostatistics and Data Analysis" },
          { code: "PHP 2511", title: "Applied Regression Analysis" },
          { code: "PHP 2150", title: "Modern Epidemiologic Research Methods" },
          { code: "PHP 2355", title: "Designing and Evaluating Public Health Interventions" },
        ],
      },
      {
        year: "2021 — 2025",
        degree: "ScB Applied Mathematics-Biology · AB Computer Science",
        institution: "Brown University",
      },
    ],
    publications: [
      {
        flag: "Master's Thesis",
        title: "The Vanishing Record: Auditing Social Media Takedowns of Human Rights Documentation in Syria and the Palestinian West Bank",
        org: "Brown University, Department of Computer Science · Advised by Dr. Harini Suresh",
        note: "Partnership with Mnemonic, an NGO specializing in digital archiving of human rights documentation.",
        link: "https://drive.google.com/file/d/1k3w59xvda30JsB2Knf0C6fcWOs_RgxAo/view?usp=sharing",
      },
      {
        title: "A Baseline Review of the Current Use of Armed Escorts for Humanitarian Convoys in Complex Emergencies",
        org: "Brown Watson Institute · Center for Human Rights and Humanitarian Studies",
        note: "Partnership with UN OCHA. Shared globally with UN agencies and NGOs.",
        link: "https://chrhs.watson.brown.edu/sites/default/files/AE_Report_Final.pdf",
      },
      {
        title: "Delayed and Denied: How Florida's Six-Week Abortion Ban Criminalizes Medical Care",
        org: "Physicians for Human Rights",
        note: "Cited in the U.S. Senate Committee on Finance, CNN, CBS, Politico, NBC.",
        link: "https://phr.org/our-work/resources/delayed-and-denied-floridas-six-week-abortion-ban/?utm_source=homepage",
      },
      {
        title: "SES Moderates the Relationship Between Cognitive Reappraisal and Stress in Teens",
        org: "Brown School of Public Health · Center for Alcohol and Addiction Studies",
        awards: ["First Place Poster", "Overall Excellence Award"],
        link: "https://drive.google.com/file/d/1Oo0OYq9KNMK9XgKOubv_yXjop6kJ9-9R/view?usp=sharing",
      },
      {
        title: "Associations Between Perceived Harms of Cannabis Use and Demographic Characteristics",
        org: "Brown School of Public Health · Center for Alcohol and Addiction Studies",
        note: "",
        link: "https://doi.org/10.26300/01t5-na83",
      },
      {
        title: "HRC Pride: Spotlighting our alumni",
        org: "UC Berkeley School of Law · Human Rights Center",
        note: "Pioneered the first annual pride newsletter.",
        link: "https://issuu.com/hrcberkeley/docs/hrc_pride_spotlighting_our_alumni_c59f6f2057bf50",
      },
      {
        title: "State of the Doulas: A Mixed Methods Analysis",
        org: "Mama Glow",
        note: "Coded interactive map tracking network of doulas across the US.",
        link: "https://drive.google.com/file/d/1HQzDzwcSyGKuejL-taprDcr76H9EtM_N/view?usp=sharing",
      },
      {
        title: "An Appeal to the US Secretary of Education in Support of Peace Education (Op-ed)",
        org: "Global Campaign for Peace Education",
        note: "",
        link: "https://www.peace-ed-campaign.org/an-appeal-to-the-us-secretary-of-education-in-support-of-peace-education/",
      },
    ],
    coursework: [
      {
        cat: "Public Health",
        items: [
          { code: "PHP 2150", title: "Modern Epidemiologic Research Methods" },
          { code: "PHP 1690", title: "Technology and Health Behavior Change" },
          { code: "PHP 2355", title: "Designing and Evaluating Public Health Interventions" },
          { code: "PHP 2510", title: "Biostatistics and Data Analysis" },
          { code: "PHP 2511", title: "Applied Regression Analysis" },
          { code: "PHP 1460", title: "Public Health Law and Policy" },
          { code: "PHP 0310", title: "Healthcare in the United States" },
          { code: "IAPA 1804M", title: "Overcoming Threats to Human Security" },
          { code: "GLOH 2260", title: "Political Economy of Health and Development" },
          { code: "GLOH 1140", title: "Introduction to Global Health" },
          { code: "GLOH 1177", title: "Epidemiologic Applications to Population Health" },
          { code: "ANTH 1515", title: "Anthropology of Mental Health" },
          { code: "WGST 222", title: "Relationship Violence and Sexual Assault" },
          { code: "HSCI 127", title: "Drugs, Health, and Society" },
        ]
      },
      {
        cat: "Computer Science",
        items: [
          { code: "IAPA 1811", title: "Contemporary Digital Policy and Politics" },
          { code: "CSCI 2952W", title: "Critical AI and Data Studies" },
          { code: "CSCI 1491", title: "Fairness in Automated Decision-Making" },
          { code: "CSCI 0111", title: "Computing Foundations: Data Analysis" },
          { code: "CSCI 0200", title: "Program Design: Data Structures and Algorithms" },
          { code: "DATA 2060", title: "Machine Learning" },
          { code: "CSCI 1470", title: "Deep Learning" },
        ]
      },
      {
        cat: "Mathematics",
        items: [
          { code: "APMA 0350", title: "Applied Ordinary Differential Equations" },
          { code: "APMA 0360", title: "Applied Partial Differential Equations" },
          { code: "APMA 1650", title: "Statistical Inference I" },
          { code: "APMA 1070", title: "Quantitative Models of Biological Systems" },
          { code: "APMA 1080", title: "Inference in Genomics and Molecular Biology" },
          { code: "MATH 0520", title: "Linear Algebra" },
          { code: "MATH 194", title: "Multivariable Calculus" },
        ]
      },
      {
        cat: "Pre-Medical",
        items: [
          { code: "HSCI 101/102", title: "Human Biology I and II" },
          { code: "CHEM 0010/0020", title: "General Chemistry I and II" },
          { code: "CHEM 0350/0360", title: "Organic Chemistry I and II" },
          { code: "BIOL 0280", title: "Biochemistry" },
          { code: "PHYS 0070", title: "Analytical Mechanics" },
          { code: "BIOL 1820", title: "Environmental Health and Disease" },
        ]
      },
    ],
  },

  work: {
    title: "Work",
    eyebrow: "03 / In the field",
    internships: [
      {
        year: "2026 — present",
        org: "Institute for Strategic Dialogue",
        role: "Applied AI / Data Engineering Intern",
        department: "Digital Analysis Unit",
        current: true,
        bullets: [
          "Design and build backend infrastructure for an internally-facing dashboard for ISD analysts to create on-demand datasets of online extremist content, ensuring robustness, maintainability, and security.",
          "Advise research teams on best practices for data analysis and study methodology.",
        ],
      },
      {
        year: "2025",
        org: "Epic Systems Corporation",
        role: "Software Engineering Intern",
        bullets: [
          "Designed and programmed a full-stack, cloud-based computer vision hardware test (C#, React) for deployment in MyChart in 2026.",
          "Used OpenCV, MediaPipe, ResNet18, and a fine-tuned YOLOv5 model for advanced computer vision applications.",
          "Conducted user research with providers to understand common technical barriers to video visits and most-at-risk populations.",
          "Identified state-level training and funding grants to support FHIR integration into public health agencies.",
          "Drafted model state legislation that builds training programs to equip clinics with tools for post-deployment monitoring of AI systems.",
        ],
      },
      {
        year: "2024 — 2025",
        org: "Physicians for Human Rights",
        role: "Programs Intern",
        bullets: [
          "Built Istanbul Protocol training for Ukrainian clinicians documenting torture and sexual violence — launched in Kyiv, May 2025.",
          "Led internal all-staff briefings on AI/ML models and their applications to human rights and public health work.",
          "Conducted and co-authored research on the effects of Florida's six-week abortion policy on practicing clinicians.",
        ],
      },
      {
        year: "2021 — 2022",
        org: "The Access Challenge",
        role: "Political Campaign Coordination Intern",
        bullets: [
          "Planned and executed media dissemination for the Africa CDC's and African Union's Bingwa Initiative — a Pan-African digital political campaign combating COVID-19 vaccine hesitancy.",
        ],
      },
    ],
    volunteer: [
      {
        year: "2024 — present",
        org: "Crisis Text Line",
        role: "Crisis Counselor",
        current: true,
        bullets: [
          "Provide mental health crisis intervention for texters.",
        ],
      },
      {
        year: "2023 — 2024",
        org: "Sexual Health and Peer Education (SHAPE)",
        role: "Teacher",
        bullets: [
          "Taught sexual health and reproductive education to high school students in Providence public schools.",
        ],
      },
      {
        year: "2021 — 2024",
        org: "Brown Emergency Medical Services",
        role: "Ambulance Training Officer · Lead EMT",
        bullets: [
          "Administered life support services and patient care to the Providence community during medical emergencies.",
          "Led training and certification for all onboarding EMTs and campus first responders.",
          "Managed continuing education and promotion courses for over 20 active EMTs; led weekly training sessions.",
          "Led the Summer 2023 Certification course, training 40 new EMTs.",
        ],
      },
    ],
  },

  projects: {
    title: "Projects",
    eyebrow: "04 / Tinkering",
    items: [
      {
        title: "Global Displacement Atlas",
        blurb: "An interactive 3D visualization mapping forced displacement and refugee flows across the world.",
        image: "assets/globaldisp1.png",
        images: [
          "assets/globaldisp1.png",
          "assets/globaldisp2.png",
          "assets/globaldisp3.png",
        ],
        prose: [
          "Built an interactive 3D visualization mapping forced displacement and refugee flows across the world, inspired by the New York Times' article on global migration visualization.",
          "This atlas illuminates forced displacement—refugees, internally displaced persons, and asylum seekers—using official data from UNHCR, IOM, and UNRWA. I also used ACLED's API and layered conflict data over the map to reveal how conflict and displacement influence one another.",
          "React + TypeScript, react-globe.gl for Three.js-based interactive globe; aggressive caching, React.memo, and WebGL acceleration for 60fps globe rotation.",
        ],
        tech: ["React", "TypeScript", "Three.js", "WebGL", "Data Viz"],
        links: [
          { label: "Visit", href: "https://displacement-atlas.vercel.app/" },
          { label: "GitHub", href: "https://github.com/daniellew77/Displacement-Atlas" },
        ],
      },
      {
        title: "Heirloom",
        blurb: "A cross-generational storytelling platform connecting people seeking guidance with those who have lived experience.",
        image: "assets/heirloom1.jpg",
        images: [
          "assets/heirloom1.jpg",
          "assets/heirloom2.png",
          "assets/heirloom3.jpg",
          "assets/heirloom4.jpg",
          "assets/heirloom5.jpg",
          "assets/heirloom6.jpg",
          "assets/heirloom7.jpg",
          "assets/heirloom8.jpg",
        ],
        prose: [
          "For most of human history, wisdom traveled through conversation, where people sat with one another to pass on their stories in real time. We live in the most connected era in history and yet are less verbally connected than any generation before us. Heirloom is our attempt to work against this. I made this at TreeHacks 2026 with my team.",
          "Storytellers move through a 20-30 minute voice-enabled interview that surfaces the moments that shaped them, then the system parses the conversation into individual story cards in their own words. Finders briefly describe what they're going through, and semantic vector search surfaces real experiences from people who've walked similar paths with the option to message them directly.",
          "Built as a Next.js full-stack app with Deepgram, Cartesia, Claude, OpenAI embeddings, and Supabase + pgvector for vector search.",
        ],
        tech: ["Next.js", "TypeScript", "Claude", "OpenAI", "Deepgram", "Cartesia", "Supabase", "pgvector"],
        links: [
          { label: "Visit", href: "https://www.findheirloom.com/" },
          { label: "Devpost", href: "https://devpost.com/software/heirloom-ce1v8h" },
        ],
      },
      {
        title: "WanderBlob",
        blurb: "A voice-enabled walking tour bot that builds custom tours with real-time narration based on theme and time.",
        image: "assets/blob1.jpg",
        images: [
          "assets/blob1.jpg",
          "assets/blob2.jpg",
          "assets/blob3.jpg",
          "assets/blob4.jpg",
          "assets/blob5.jpg",
        ],
        award: "Best Metropolis-Themed Hack — Hack@Brown 2026",
        prose: [
          "During my last semester in Providence, my team and I built WanderBlob — a voice-enabled walking tour bot that creates custom tours anywhere in the world, tailored to a user's time constraints and thematic preferences (Historical, Art, or Spooky).",
          "The backend is built with FastAPI and orchestrates four specialized AI agents using the Gemini 1.5 API: a Tour Director for routing, a POI Narrator for storytelling, a Q&A Agent using RAG over Wikipedia to handle interruptions, and an Eval Agent for quality monitoring. ElevenLabs TTS for lifelike narration; a greedy approach solves a variation of the Traveling Salesperson Problem for dynamic route optimization. The frontend is a Next.js application with an interactive 3D map built on Mapbox GL JS to track the user's location and visualize the route in real-time.",
        ],
        tech: ["FastAPI", "Gemini 1.5", "ElevenLabs", "Next.js", "Mapbox GL JS", "RAG"],
        links: [
          { label: "Devpost", href: "https://devpost.com/software/wanderblob" },
        ],
      },
      {
        title: "Illuminate",
        blurb: "An animated educational video generator that creates explanations for any topic. Inspired by 3Blue1Brown.",
        image: "assets/vid_screen.jpeg",
        images: [
          "assets/vid_screen.jpeg",
          "assets/quiz_screen.jpeg",
        ],
        award: "Best Use of Generative AI — Hack@Brown 2025",
        prose: [
          "During Hack@Brown, my team and I developed an educational video generator that creates animated explanations for any topic, inspired by 3Blue1Brown's videos. The system utilizes LangChain to convert user prompts into comprehensive lesson plans, scripts, and animation sequences.",
          "I built the frontend interface using React, including a landing page, personalized settings, and interactive quiz components to test user comprehension. I also implemented the LangChain pipeline for the backend, creating custom nodes to process user prompts and orchestrate the video generation workflow, with FastAPI handling API requests and AWS infrastructure (EC2, S3, API Gateway, Lambda) providing scalable deployment.",
        ],
        tech: ["Python", "React", "AWS", "LangChain", "FastAPI", "Manim", "LLMs"],
        links: [
          { label: "Devpost", href: "https://devpost.com/software/illuminated-qf09ik" },
        ],
      },
      {
        title: "Music Genre Classifier",
        blurb: "A hybrid CNN + MLP architecture that classifies music genres from spectrograms and audio features.",
        image: "assets/music_architecture.jpg",
        images: [
          "assets/music_architecture.jpg",
          "assets/music_spectrograms_pop.jpg",
          "assets/music_spectrograms_rock.jpg",
        ],
        prose: [
          "Developed a hybrid deep learning model that combines 2D CNN and MLP architectures to classify music genres from spectrograms and audio features.",
          "Audio files are converted to spectrograms using librosa, then used to train the model. Used 2D CNNs for spectrogram analysis with MLP for tabular feature data. Applied data augmentation to enhance frequency differences for better pattern recognition; trained on the Free Music Archive (FMA) dataset with 8,000 songs across 8 genres including rock, pop, electronic, and classical.",
          "Generates LIME explanations for interpretability — which spectral regions influence genre predictions — achieving 51% accuracy compared to CNN-only approaches by incorporating both spectral and tabular features.",
        ],
        tech: ["Python", "TensorFlow", "CNN", "MLP", "Librosa", "LIME"],
        links: [
          { label: "GitHub", href: "https://github.com/Domingo-v/beatbox-1470" },
        ],
      },
      {
        title: "Cahn-Hilliard Animal Prints",
        blurb: "A mathematical simulation of pattern formation in nature — how complex animal prints emerge from simple PDEs.",
        image: "assets/leopard_simulation.gif",
        images: [
          "assets/leopard_simulation.gif",
          "assets/giraffe_simulation.gif",
          "assets/zebra_simulation.gif",
          "assets/honey_simulation.gif",
        ],
        prose: [
          "Implemented a mathematical simulation of pattern formation in nature using the Cahn-Hilliard equation, demonstrating how complex animal prints emerge from simple mathematical principles. The Cahn-Hilliard partial differential equation governs phase separation in binary mixtures: ∂φ/∂t = M ∇² (φ³ − φ − ε² ∇²φ).",
          "Simulated pattern formation for zebras, giraffes, leopards, and honeycomb over time using Python and numerical methods. Created side-by-side comparisons of the simulated patterns with real animal prints.",
        ],
        tech: ["Python", "NumPy", "SciPy", "Matplotlib", "PDEs"],
        links: [
          { label: "GitHub", href: "https://github.com/daniellew77/CahnHilliardAnimals" },
        ],
      },
      {
        title: "Gaussian Naive Bayes Classifier",
        blurb: "A Gaussian Naive Bayes classifier built from scratch for coronary heart disease diagnosis.",
        image: "assets/gnb_architecture.png",
        images: [
          "assets/gnb_architecture.png",
          "assets/gnb_confusion_matrix.png",
          "assets/gnb_feature_importance.png",
          "assets/gnb_roc_curve.png",
        ],
        prose: [
          "Built a Gaussian Naive Bayes classifier from scratch for coronary heart disease diagnosis, implementing the complete algorithm using only NumPy without relying on existing ML libraries.",
          "Developed custom feature scaling and probability calculation functions, applied Gaussian probability distributions to handle continuous medical data, and achieved 85% accuracy on heart disease prediction using the UCI Heart Disease Dataset — matching scikit-learn's performance on the same dataset.",
          "Created a comprehensive visualization suite for model diagnostics and feature analysis.",
        ],
        tech: ["Naive Bayes", "Python", "NumPy", "Pandas", "Medical ML"],
        links: [
          { label: "GitHub", href: "https://github.com/daniellew77/GNBforCoronaryHeartDisease/blob/main/src/gaussiannaivebayes.ipynb" },
        ],
      },
    ],
  },

  apparel: {
    title: "Apparel",
    eyebrow: "05 / Making stuff",
    statement: "You have reached the fun page! I love to design and sew/knit/crochet clothing. I have been lucky enough to share my work in a few runway shows over the past several years - check them out below! I enjoy mixing knits, lace, and embroidery in my designs to create unique textures and silhouettes. As I continue designing, I want to develop my storytelling voice to create collections that are both aesthetically interesting and respond to real-world issues.",
    collections: [
      {
        name: "Lullabies",
        season: "SS 2025",
        description: "Lullabies uses midnight blues and celestial motifs across billowing silhouettes that mimic breathing during sleep — a dreamy stylistic exploration that captures the tranquility of sleep.",
        models: ["Mar Falcon", "Stella Biase", "Ishya Washington", "Tiffany Zhang", "Skeeter Sunda", "Aliza Kopans", "Alaina Lin", "Me"],
        photos: [
          { src: "assets/lullabieswhole.JPG" },
          { src: "assets/mar1.jpg", models: ["Mar Falcon"] },
          { src: "assets/marback.JPG", models: ["Mar Falcon"] },
          { src: "assets/stellafront.jpg", models: ["Stella Biase"] },
          { src: "assets/stellaaaa.jpg", models: ["Stella Biase"] },
          { src: "assets/stellainmotion.jpg", models: ["Stella Biase"] },
          { src: "assets/skeety.jpg", models: ["Skeeter Sunda"] },
          { src: "assets/ishya.jpg", models: ["Ishya Washington"] },
          { src: "assets/ishyaandaliza.jpg", models: ["Ishya Washington", "Aliza Kopans"] },
          { src: "assets/alaina1.jpg", models: ["Alaina Lin"] },
          { src: "assets/alainaclose.jpg", models: ["Alaina Lin"] },
          { src: "assets/me.jpg", models: ["Me"] },
          { src: "assets/fall_arwen.jpg", models: ["Lena Henderson"] },
          { src: "assets/aliza.jpg", models: ["Aliza Kopans"] },
          { src: "assets/alizarunway.jpg", models: ["Aliza Kopans"] },
          { src: "assets/groupstudio.jpg" },
          { src: "assets/tiff.jpg", models: ["Tiffany Zhang"] },
          { src: "assets/tiffandalaina.jpg", models: ["Tiffany Zhang", "Alaina Lin"] },
        ],
      },
      {
        name: "Monterey",
        season: "SS 2024",
        description: "A vibrant spring collection inspired by the rocky coastline and sparkling waters of Monterey. Celebrates the renewal and energy of ocean waves with flowing fabrics and natural textures — all made from recycled yarn and upcycled fabric.",
        models: ["Lena Henderson", "Stella Biase", "Naomi Deokule", "Celine Dipp"],
        photos: [

          { src: "assets/DSC_4476.jpg", models: ["Lena Henderson"] },
          { src: "assets/spring_01.jpg", models: ["Naomi Deokule"] },
          { src: "assets/spring_02.jpg", models: ["Celine Dipp"] },
          { src: "assets/spring_03.jpg", models: ["Stella Biase"] },
          { src: "assets/spring_04.jpg", models: ["Lena Henderson"] },
        ],
      },
      {
        name: "Fall Shoot",
        season: "FW 2024",
        description: "A reflection on what it means to be 'presentable.' Drew inspiration from period pieces — collared neckline, lace overlay, satin skirt — modernized with a second-skin fit. A group effort with Sarah Paul, Griffin Schwartz, and Sulan Zhang.",
        models: ["Arwen Chen"],
        photos: [
          { src: "assets/TrinityWilliams.jpg" },
          { src: "assets/TrinityWilliams-11.jpg" },
          { src: "assets/TrinityWilliams-12.jpg" },
          { src: "assets/TrinityWilliams-14.jpg" },
        ],
      },
      {
        name: "Spring Shoot",
        season: "SS 2024",
        description: "A spring shoot themed 'ghostly bodies.' This sheer godet dress was made from recycled curtains.",
        models: ["Ishya Washington"],
        photos: [
          { src: "assets/DSC02197.jpg" },
          { src: "assets/DSC02219.jpg" },
          { src: "assets/DSC02245.jpg" },
          { src: "assets/DSC02282.jpg" },
          { src: "assets/trio.jpg" },
          { src: "assets/trio3.jpg" },
        ],
      },
    ],
  },
};
