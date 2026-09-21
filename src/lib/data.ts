export const personalInfo = {
  name: "Shruthi Basavaraju",
  location: "Los Angeles, CA",
  phone: "(213)-887-3021",
  email: "shruthib18122001@gmail.com",
  linkedin: "https://www.linkedin.com/in/shruthi-b-b99797222/",
  github: "https://github.com/shruthib18122001-commits",
  heroSubtitle:
    "Result-driven Software Engineer and USC Computer Science graduate student with 2+ years of experience in backend, full-stack, and cloud systems.",
  skillsPreview: "Java (Spring Boot)  •  Python (FastAPI)  •  AWS  •  Distributed Systems",
  about: [
    "I am a result-driven Software Engineer with two years of hands-on experience at Clarivate Analytics, where I engineered scalable backend systems, modernized APIs, and optimized database schemas. My work directly contributed to a 10% boost in efficiency, 8% faster query performance, and a 3% reduction in infrastructure costs.",
    "Currently pursuing a Master of Science in Computer Science at the University of Southern California (USC), where I also serve as a Graduate Teaching Assistant for CSCI 455 and CSCI 571. I thrive in Agile/Scrum environments and am passionate about building fast, reliable, and scalable software.",
  ],
};

export const education = [
  {
    degree: "M.S. in Computer Science",
    institution: "University of Southern California",
    location: "Los Angeles, CA",
    period: "Aug 2025 – May 2027",
    gpa: "3.50 / 4.00",
    courses: [
      "Data Structures",
      "Algorithms",
      "Operating Systems",
      "Distributed Systems",
      "Databases",
      "Machine Learning for Data Science",
      "Web Technologies",
    ],
  },
  {
    degree: "B.E. in Electronics and Communication Engineering",
    institution: "SJB Institute of Technology",
    location: "Bengaluru, India",
    period: "Aug 2019 – May 2023",
    gpa: "3.60 / 4.00",
  },
];

type ExperienceRole = {
  title: string;
  courses?: string;
  bullets: string[];
};

type CompanyExperience = {
  company: string;
  location: string;
  period?: string;
  roles: ExperienceRole[];
};

export const experiences: CompanyExperience[] = [
  {
    company: "University of Southern California",
    location: "Los Angeles, CA",
    period: "Feb 2026 – Present",
    roles: [
      {
        title: "Graduate Teaching Assistant",
        courses:
          "CSCI 455: Introduction to Programming Systems Design  |  CSCI 571: Web Technologies",
        bullets: [
          "Evaluated 50+ students' Java and C++ submissions per cycle, enforcing production-grade standards around code correctness, efficiency, and object-oriented design, mirroring real-world code review practices.",
          "Diagnosed recurring logic and architectural patterns across submissions, delivering targeted feedback that measurably improved class-wide code quality and problem-solving approaches.",
        ],
      },
    ],
  },
  {
    company: "Clarivate Analytics",
    location: "Bengaluru, India",
    period: "Sep 2023 – Aug 2025",
    roles: [
      {
        title: "Software Development Engineer",
        bullets: [
          "Engineered and maintained a centralized enterprise data platform in Java (Spring Boot) serving as the organization-wide source of truth, processing millions of records across high-throughput APIs serving 10+ internal client teams; improved processing efficiency by 10% and reduced API latency by 50ms.",
          "Monitored and optimized distributed AWS infrastructure (EC2, S3, Lambda, CloudWatch) including CPU utilization and resource health across production environments, reducing infrastructure costs by 3%; optimized MySQL and PostgreSQL schemas achieving 8% faster query response times.",
          "Led full-scale modernization of legacy PHP services to Python and migrated billions of records from PostgreSQL to Amazon S3 using PySpark and Delta Lake; re-pointed all downstream APIs to S3 ensuring seamless data cutover with zero service disruption across production.",
          "Led Java and Angular version upgrades resolving all post-migration compatibility issues across the codebase; overhauled test suite from JUnit to Mockito reducing regression failures by 20% across 5+ core service modules.",
          "Contributed to Angular frontend features and integrated Selenium-based automated testing reducing manual QA effort by 35%; engineered Jenkins CI/CD pipelines shortening release cycles by 25% and improving deployment reliability across staging and production environments.",
        ],
      },
      {
        title: "Software Engineer Intern",
        bullets: [
          "Implemented 3 Java Spring Boot REST endpoints with input validation, error handling, and Swagger documentation to support frontend delivery.",
          "Developed an Angular module for displaying real-time data summaries, integrating with backend APIs and handling loading, error, and empty states.",
          "Identified and flagged a critical N+1 query issue in a high-traffic service endpoint, reducing database round trips by optimizing JPA fetch strategies.",
          "Wrote 15+ JUnit test cases for service layer methods, achieving 75% coverage on assigned modules and reducing manual testing effort.",
        ],
      },
    ],
  },
  {
    company: "Ethnotech Academic Solutions",
    location: "Bengaluru, India",
    period: "Oct – Dec 2022",
    roles: [
      {
        title: "Software Engineer Intern",
        bullets: [
          "Analyzed and optimized system communication protocols through simulation-based testing, achieving ~5% latency reduction and ~7% improvement in data transfer efficiency; developed structured technical documentation and performance reports to support engineering decision-making.",
          "Developed automation scripts to streamline network diagnostic workflows, reducing manual testing effort and accelerating issue resolution across system communication layers.",
        ],
      },
    ],
  },
];

export const projects = [
  {
    title: "CodeSheriff",
    subtitle: "AI-Powered Codebase Intelligence Platform",
    tech: ["Python", "FastAPI", "PostgreSQL", "pgvector", "Gemini API", "RAG"],
    gradientFrom: "#0c4a6e",
    gradientTo: "#075985",
    accentColor: "#38bdf8",
    icon: "🔍",
    bullets: [
      "Reduced developer code investigation time by building a Gemini-powered RAG platform for semantic code retrieval across large repositories.",
      "Improved indexing throughput by implementing asynchronous Tree-sitter chunking across 3 languages for repositories with 10K+ source files.",
      "Prevented concurrent quota bypasses by designing an atomic database gate for SaaS billing enforcement.",
      "Enabled in-editor AI assistance by developing a VS Code extension with authenticated FastAPI APIs, achieving 80%+ test coverage.",
    ],
  },
  {
    title: "MetroLive",
    subtitle: "Real-Time LA Metro Transit Tracker",
    tech: ["React", "TypeScript", "Vite", "Node.js", "GTFS-Realtime"],
    gradientFrom: "#052e16",
    gradientTo: "#14532d",
    accentColor: "#4ade80",
    icon: "🚇",
    bullets: [
      "Built a real-time LA Metro transit tracker with a React/TypeScript/Vite frontend and a Node.js backend-for-frontend decoding GTFS-realtime feeds.",
      "Achieved a 100/100/100/100 Lighthouse score by code-splitting and virtualizing route/stop lists into an ~85 KB gzipped bundle.",
      "Implemented live polling and caching with TanStack Query, persisting user favorites via Zustand with localStorage.",
      "Shipped across 7 development phases (UI, client state, virtualization, accessibility, testing, deploy) over 9 commits.",
      "Verified reliability with 78 Vitest unit tests and a Playwright end-to-end flow covering the core tracking experience.",
    ],
  },
  {
    title: "RateGuard",
    subtitle: "API Rate-Limiting Middleware",
    tech: ["Python", "FastAPI", "Redis", "Machine Learning", "pytest"],
    gradientFrom: "#4c0519",
    gradientTo: "#7f1d1d",
    accentColor: "#f87171",
    icon: "🛡️",
    bullets: [
      "Built an ML-powered distributed service enforcing per-client API quotas with burst handling across 10K+ concurrent connections; applied ML-based traffic prediction to dynamically optimize quota thresholds, achieving 99.95% enforcement accuracy at peak load of 50K requests/second.",
      "Eliminated critical race conditions via Redis-backed distributed state management; validated correctness with 120+ pytest concurrency and unit tests, achieving 94% code coverage and zero data-loss incidents across 3 months of load testing.",
    ],
  },
];

export const skills = [
  {
    category: "AI & Data",
    icon: "🤖",
    items: [
      "LLMs",
      "RAG",
      "pgvector",
      "Generative AI",
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "PySpark",
      "NumPy",
      "Pandas",
      "Data Analysis",
      "SQL/NoSQL",
    ],
  },
  {
    category: "Languages",
    icon: "💻",
    items: ["Python", "Java", "JavaScript", "TypeScript", "Node.js", "Go", "SQL", "PHP"],
  },
  {
    category: "Frontend & Backend",
    icon: "⚡",
    items: [
      "React",
      "React Native",
      "Angular",
      "Node.js",
      "Spring Boot",
      "FastAPI",
      "Django",
      "RESTful APIs",
      "Apache Kafka",
      "Redis",
      "ElasticSearch",
      "gRPC",
    ],
  },
  {
    category: "Testing & QA",
    icon: "🧪",
    items: [
      "JUnit",
      "Mockito",
      "Selenium",
      "pytest",
      "Unit Testing",
      "Integration Testing",
      "Debugging",
      "CI/CD",
      "Jenkins",
      "Git",
      "Code Reviews",
    ],
  },
  {
    category: "Cloud & DevOps",
    icon: "☁️",
    items: [
      "AWS (EC2, S3, Lambda)",
      "RDS",
      "DynamoDB",
      "CloudWatch",
      "MySQL",
      "Azure",
      "Docker",
      "Kubernetes",
      "Delta Lake",
      "Agile/Scrum",
    ],
  },
];

export const publications = [
  {
    title: "Humanoid Robot for Military Applications",
    description:
      "Designed and published research on an autonomous humanoid robotic system for defense applications, covering motion planning, sensor integration, and embedded control systems.",
    url: "https://www.ijisrt.com/humanoid-robot-on-military-applications",
    image: "/robot.jpg",
    icon: "🤖",
  },
  {
    title: "Hyperspectral Image Compression Using JPEG Algorithm",
    description:
      "Researched and implemented an adapted JPEG compression technique for hyperspectral imaging data, analyzing compression ratios and image quality metrics across multi-band datasets.",
    url: "https://www.ijisrt.com/compression-of-hyperspectral-image-using-jpeg-compression-algorithm",
    image: "/Hyperspectral.jpg",
    icon: "🔬",
  },
];
