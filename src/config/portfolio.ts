export const portfolioConfig = {
  personal: {
    fullName: 'Sagar Pandey',
    initials: 'SP',
    title: 'Solution Architect',
    subtitle: 'Azure · M365 · AI/ML · Reactjs · Node.js',
    email: 'sagar.pandey@example.com',
    phone: '+1 (206) 555-0198',
    location: 'Mumbai, India',
    linkedIn: 'https://linkedin.com/in/sagarpandey88',
    github: 'https://github.com/sagarpandey88',
    blog: 'https://sagarpandey88.github.io',
    resumeUrl: '/resume.pdf',
    summary: [
      'Solution Architect with 15+ years of experience designing scalable, secure, and cost-effective cloud solutions across enterprise environments. Deep expertise in Azure cloud services, Microsoft 365 integration, Node.js microservices, and AI/ML pipeline architecture.',
      'Proven track record of translating complex business requirements into elegant technical architectures, leading cross-functional engineering teams, and partnering with executive stakeholders to define long-term platform strategy.',
      'Passionate about leveraging AI/ML capabilities — from Azure AI Foundry and Cognitive Services to bespoke ML pipelines — to create intelligent, adaptive systems that give organizations a measurable competitive edge.',
    ],
  },
  skills: {
    cloud: [
      'Azure App Services',
      'Azure Functions',
      'Azure Blob Storage',
      'Cosmos DB',
      'Azure AI Services',
      'Azure DevOps',
      'Azure API Management',
      'Azure Service Bus',
      'Azure Key Vault',
    ],
    development: [
      'Node.js',
      'TypeScript',
      'REST & GraphQL APIs',
      'Microservices',
      'Serverless Architecture',
      'React / Next.js',
      'Docker',
      'CI/CD Pipelines',
      'Infrastructure as Code',
    ],
    aiml: [
      'Azure AI Foundry',
      'Azure OpenAI Service',
      'Azure Cognitive Services',
      'Prompt Engineering',
      'RAG Architecture',
      'Langchain and LangGraph',
    ],
    microsoft: [
      'Microsoft 365',
      'SharePoint Online',
      'Microsoft Teams',
      'Power Platform',
      'Power Automate',
      'Power Apps',
      'Microsoft Graph API'],
  },
  stats: [
    { value: '15+', label: 'Years Experience' },
    { value: '30+', label: 'Azure Projects' },
    { value: '10+', label: 'Enterprise Clients' },
    { value: '$3M+', label: 'Cost Savings Delivered' },
  ],
  experience: [
    {
      title: 'Solution Architect',
      company: 'NovaTech Solutions',
      period: '2021 – Present',
      location: 'Seattle, WA',
      highlights: [
        'Architected a cloud-native Azure platform serving 1.2M+ daily active users, reducing infrastructure costs by 38% through strategic use of serverless and containerized workloads.',
        'Led a cross-functional team of 14 engineers to deliver an enterprise M365 integration suite connecting SharePoint, Teams, and Power Platform to a custom Node.js microservices layer, cutting manual workflows by 60%.',
        'Designed and deployed an Azure AI Foundry–powered document intelligence pipeline processing 500K+ documents monthly, improving extraction accuracy to 97.4%.',
        'Established architectural governance standards and conducted design reviews for 20+ projects annually, ensuring scalability, security, and compliance with SOC 2 and ISO 27001.',
        'Partnered with C-suite stakeholders to define a 3-year cloud strategy roadmap, securing $4.2M in platform investment.',
      ],
      tags: ['Azure', 'Node.js', 'AI Foundry', 'M365', 'Microservices'],
    },
    {
      title: 'Senior Cloud Solutions Architect',
      company: 'Meridian Digital Group',
      period: '2018 – 2021',
      location: 'San Francisco, CA',
      highlights: [
        'Re-architected a monolithic application into 22 Node.js microservices on Azure App Services, achieving 99.98% uptime and a 45% reduction in time-to-deploy.',
        'Built an Azure Cognitive Services–backed sentiment analysis engine integrated into Microsoft Teams, enabling real-time customer support triage and reducing average resolution time by 28%.',
        'Designed a Cosmos DB multi-region data layer with automatic failover, supporting global expansion to 8 new markets with sub-100ms read latencies.',
        'Implemented Power Platform solutions for 6 enterprise clients, automating 120+ business processes and eliminating an estimated 18,000 hours of manual work annually.',
      ],
      tags: ['Azure App Services', 'Cosmos DB', 'Cognitive Services', 'Power Platform'],
    },
    {
      title: 'Lead Backend Engineer',
      company: 'Cloudbridge Systems',
      period: '2015 – 2018',
      location: 'Austin, TX',
      highlights: [
        'Led development of a Node.js API gateway handling 40M+ monthly requests with Azure API Management, improving security posture with OAuth 2.0 and rate limiting policies.',
        'Integrated Microsoft Graph API into a unified productivity dashboard for a 10,000-employee enterprise client, consolidating M365 data into a single actionable interface.',
        'Mentored a team of 6 junior developers, implementing code review standards that reduced production bugs by 52% over 12 months.',
        'Designed Azure Service Bus event-driven workflows that decoupled 8 upstream systems, reducing integration failures by 73%.',
      ],
      tags: ['Node.js', 'Azure API Management', 'Graph API', 'Service Bus'],
    },
    {
      title: 'Software Engineer',
      company: 'Pixel & Parse Inc.',
      period: '2012 – 2015',
      location: 'Chicago, IL',
      highlights: [
        'Developed RESTful Node.js APIs consumed by web and mobile clients with 300K+ registered users.',
        'Contributed to early SharePoint Online migrations for 3 enterprise clients, establishing reusable deployment playbooks.',
        'Built data ingestion pipelines on Azure Blob Storage with automated transformation logic, reducing data processing latency by 65%.',
      ],
      tags: ['Node.js', 'SharePoint', 'Azure Storage', 'REST APIs'],
    },
  ],
  projects: [
    {
      title: 'Enterprise AI based RAG System',
      description:
        'A Retrieval-Augmented Generation (RAG) platform built on Azure AI Foundry and Azure OpenAI Service, enabling employees to query internal knowledge bases through a natural-language Teams interface.',
      impact: [
        'Can index 2M+ documents across SharePoint, Confluence, and Azure Blob Storage',
        'Allow AI based searches across organizational knowledge.',
      ],
      stack: ['Azure AI Foundry', 'Azure OpenAI', 'Node.js', 'Teams', 'SharePoint', 'PostgresSQL'],
      icon: 'Brain',
      repoUrl: 'https://github.com/sagarpandey88/ragol',
      demoUrl: 'https://wa-ragol-ci-001-hpg3dmgnchcbfseb.centralindia-01.azurewebsites.net',
    },
    {
      title: 'Agentic AI based Architectural Design Assistant',
      description:
        'An AI-powered architectural design assistant leveraging LangGraph to generate dynamic architecture diagrams and documentation based on natural language prompts from architects and engineers.',
      impact: [
        'Automated generation of architecture diagrams and documentation from natural language prompts',
        'Brainstorming architectural solutions and providing best practices based on Microsoft’s Cloud Adoption Framework',

      ],
      stack: ['LangGraph', 'PostgresSQL', 'Node.js', 'Azure Open AI', 'Azure Foundry'],
      icon: 'Layers',
      repoUrl: 'https://github.com/sagarpandey88/desol',
      demoUrl: 'https://wa-desol-ci-001-asfwf3gtffgrhzgd.centralindia-01.azurewebsites.net',
    },
    {
      title: 'Enterprise Platform ADLC',
      description:
        'Leveraging Skills and Agents in Coding Assistant to accelerate development and deployment processes for Enterprise Platform based apps.',
      impact: [
        'Reduce Dev Onboarding time for new developers through interactive AI-driven learning paths and codebase exploration',
        'Streamline Development environment setup and code generation through AI agents, reducing time spent on boilerplate code and environment configuration',
        'Provisions Sandbox environments for Developers for Platform based solution.'
      ],
      stack: ['github Copilot', 'Claude Code', 'Skills.md', 'Agentic Copilot', 'Agents.md'],
      icon: 'Server',
      repoUrl: 'https://github.com/sagarpandey88/spfx-full-autonomy',
      demoUrl: '',
    },
    {
      title: 'Sports result prediction using AI',
      description:
        'A fun sports prediction project leveraging AI to forecast game outcomes.',
      impact: [
        'A fun project that applies AI to predict sports results, showcasing the versatility of AI technologies in various domains.',
      ],
      stack: ['Azure OpenAI', 'LangChain', 'Node.js'],
      icon: 'Cpu',
      repoUrl: 'https://github.com/sagarpandey88/sporaclet',
      demoUrl: '',
    },
  ],
  certifications: [
    { name: 'Microsoft Certified: M365 Developer Associate', issuer: 'Microsoft', year: '2021' },
    { name: 'Microsoft Certified: Web Applications', issuer: 'Microsoft', year: '2016' },
    { name: 'Microsoft Certified: Azure App Builder', issuer: 'Microsoft', year: '2016' },
    { name: 'Microsoft Certified : Azure Fundamentals', issuer: 'Microsoft', year: '2021' }
  ],
  education: [
    {
      degree: 'BE Electronics',
      school: '',
      details: '2010',
    }
  ],
  continuousLearning: ['Machine Learning', 'Agentic AI', 'Node.js Patterns'],
  tagColors: {
    Azure: 'bg-sky-600 text-white',
    'Node.js': 'bg-green-600 text-white',
    'AI Foundry': 'bg-amber-400 text-slate-900',
    M365: 'bg-blue-600 text-white',
    Microservices: 'bg-slate-800 text-slate-200 border border-slate-700',
    'Azure App Services': 'bg-sky-600 text-white',
    'Cosmos DB': 'bg-teal-600 text-white',
    'Cognitive Services': 'bg-amber-400 text-slate-900',
    'Power Platform': 'bg-blue-600 text-white',
    'Azure API Management': 'bg-sky-600 text-white',
    'Graph API': 'bg-blue-600 text-white',
    'Service Bus': 'bg-slate-700 text-slate-200',
    SharePoint: 'bg-blue-600 text-white',
    'Azure Storage': 'bg-sky-600 text-white',
    'REST APIs': 'bg-emerald-600 text-white',
  },
  navLinks: [
    { id: 'summary', label: 'About' },
    { id: 'skills', label: 'Skills' },

    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Credentials' },
    { id: 'contact', label: 'Contact' },
  ] as { id: 'summary' | 'skills' | 'projects' | 'certifications' | 'contact'; label: string }[],
};
