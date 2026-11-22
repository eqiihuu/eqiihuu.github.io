import headshotImg from '../assets/headshot.jpg';

export interface SocialLink {
  id: 'github' | 'linkedin';
  label: string;
  url: string;
  handle: string;
  isPlaceholder?: boolean;
}

export interface ImpactMetric {
  value: string;
  label: string;
  detail: string;
}

export type PillarCategoryId =
  | 'ai-infra'
  | 'experimentation'
  | 'ml-pipelines'
  | 'scale'
  | 'on-device';

export interface ExperienceHighlight {
  text: string;
  highlight?: string;
}

export interface ExperiencePillar {
  id: PillarCategoryId;
  shortLabel: string;
  title: string;
  bullets: ExperienceHighlight[];
}

export interface ExperienceRole {
  id: string;
  company: string;
  title: string;
  location: string;
  period: string;
  summary: string;
  pillars: ExperiencePillar[];
}

export interface LabProject {
  id: string;
  title: string;
  status: 'Planned' | 'Concept' | 'Ready for FastAPI';
  summary: string;
  stack: string[];
  targetEndpoint: string;
}

export interface SkillGroup {
  id: string;
  title: string;
  subtitle: string;
  items: string[];
}

export interface EducationEntry {
  school: string;
  location: string;
  degree: string;
}

export interface CyclingStat {
  value: string;
  label: string;
  detail: string;
}

export interface OutdoorActivity {
  id: string;
  title: string;
  caption: string;
}

export interface ProfileData {
  name: string;
  monogram: string;
  avatar: string;
  avatarAlt: string;
  role: string;
  location: string;
  headline: string;
  bio: string;
  socials: SocialLink[];
  metrics: ImpactMetric[];
  experience: ExperienceRole[];
  labs: LabProject[];
  skills: SkillGroup[];
  education: EducationEntry[];
  outdoors: {
    cyclingStats: CyclingStat[];
    cyclingNarrative: string;
    rvTitle: string;
    rvNarrative: string;
    activities: OutdoorActivity[];
  };
}

export const profile: ProfileData = {
  name: 'Qi Hu',
  monogram: 'QH',
  avatar: headshotImg,
  avatarAlt: 'Qi Hu outdoors portrait',
  role: 'Senior AI Software Engineer @ Wyze Labs',
  location: 'Seattle, WA',
  headline:
    'Building production LLM orchestration, multi-turn ReAct agents, and high-throughput experimentation platforms.',
  bio:
    'Senior AI Software Engineer at Wyze Labs with 8+ years of experience across Wyze, Amazon Alexa AI, and Baidu USA designing mission-critical AI infrastructure, LLM & agentic workflows, online experimentation platforms, large-scale ML data pipelines, and on-device intelligence. Outside of work, exploring the Pacific Northwest on two wheels and four.',
  socials: [
    {
      id: 'github',
      label: 'GitHub',
      url: 'https://github.com/qihulabs',
      handle: '@qihulabs',
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/qi-hu/',
      handle: '/in/qi-hu/',
    },
  ],
  metrics: [
    {
      value: 'ReAct & LLM',
      label: 'Agentic Orchestration',
      detail: 'Model routing, context optimization & multi-turn planning',
    },
    {
      value: 'A/B Platform',
      label: 'Online Experimentation',
      detail: 'Self-service model, prompt & context evaluation at scale',
    },
    {
      value: 'Self-Healing',
      label: 'ML Data Pipelines',
      detail: 'Automated ingestion & publishing via PySpark, SQS & Step Functions',
    },
    {
      value: '80%',
      label: 'Edge AI Compression',
      detail: 'On-device hotword parameter reduction at performance parity',
    },
  ],
  experience: [
    {
      id: 'wyze-labs',
      company: 'Wyze Labs',
      title: 'Senior AI Software Engineer',
      location: 'Kirkland, WA',
      period: '2026 – Present',
      summary:
        'Building next-generation AI services, intelligent agentic workflows, and smart-home AI infrastructure.',
      pillars: [],
    },
    {
      id: 'amazon-alexa-ai',
      company: 'Amazon Alexa AI',
      title: 'Software Development Engineer',
      location: 'Bellevue, WA',
      period: '2020 – 2026',
      summary:
        'Architected LLM orchestration, agentic optimization services, large-scale ML pipelines, and online experimentation platforms powering Alexa AI.',
      pillars: [
        {
          id: 'ai-infra',
          shortLabel: 'AI Infra & Agents',
          title: 'AI Infrastructure & LLM Optimization',
          bullets: [
            {
              highlight: 'LLM Assistant Orchestration',
              text: "Built the orchestration layer of Alexa's LLM-based AI assistant, spanning model routing, context fetching, prompt generation, task planning, action plan generation, and action execution.",
            },
            {
              highlight: 'ReAct Context Microservice',
              text: 'Led the design and implementation of an LLM context optimization microservice in a multi-turn mission-critical ReAct-based agent system; decoupled business logic using Docker and AWS ECS to accelerate model release cycles and cut engineering overhead for science teams.',
            },
            {
              highlight: 'Automated LLM Triage',
              text: 'Developed an automated debugging engine powered by an LLM and routing workflow, drastically cutting failure investigation time and enabling proactive detection of systematic issues via automated reporting across science teams.',
            },
          ],
        },
        {
          id: 'experimentation',
          shortLabel: 'Experimentation',
          title: 'Conversational AI & Experimentation Platform',
          bullets: [
            {
              highlight: 'Self-Service A/B Platform',
              text: 'Architected a high-scale, self-service A/B testing platform for rapid model and context evaluation across concurrent experiments on a flagship product line.',
            },
            {
              highlight: 'Prompt & Checkpoint UI',
              text: 'Streamlined LLM checkpoint and prompt onboarding via a React UI, drastically reducing setup time and empowering domain teams to launch features from UAT to production.',
            },
          ],
        },
        {
          id: 'ml-pipelines',
          shortLabel: 'ML Pipelines',
          title: 'Offline Data Publishing & ML Pipeline',
          bullets: [
            {
              highlight: 'Partial Upload & Auto-Refresh',
              text: 'Designed a data publishing framework for self-feedback ML pipelines, introducing a partial dataset uploading and auto-refresh strategy that significantly reduced lead time and operational costs.',
            },
            {
              highlight: 'Auto-Recovery Resilience',
              text: 'Enhanced offline ML pipelines with an auto-recovery mechanism to prevent cascading failures from upstream dependencies.',
            },
            {
              highlight: 'Multi-Team Data Ingestion',
              text: 'Coordinated daily refreshment of large-scale data entries across multiple business teams using AWS SQS, Step Functions, and PySpark to ensure high data fidelity for downstream NLP services.',
            },
          ],
        },
        {
          id: 'scale',
          shortLabel: 'Scale & Privacy',
          title: 'Backend Service & Performance Optimization',
          bullets: [
            {
              highlight: 'Multi-Tenant Personalization',
              text: 'Spearheaded the storage-based personalization pipeline in the Alexa Query Rewriting Platform, delivering the end-to-end workflow across triggering, data layer, online experimentation, guardrails, and privacy compliance for in-house domains and third-party developers.',
            },
            {
              highlight: 'Peak Traffic Readiness',
              text: 'Drove security/privacy reviews and peak holiday traffic readiness for critical Alexa services, coordinating cross-functional teams to maintain high availability.',
            },
          ],
        },
      ],
    },
    {
      id: 'baidu-usa',
      company: 'Baidu USA LLC',
      title: 'Software Engineer',
      location: 'Bellevue, WA',
      period: '2018 – 2020',
      summary:
        'Delivered compact on-device speech models and production acoustic signal integration for consumer electronics and automotive assistants.',
      pillars: [
        {
          id: 'on-device',
          shortLabel: 'On-Device AI',
          title: 'On-Device AI Model Optimization',
          bullets: [
            {
              highlight: '80% parameter reduction',
              text: 'Designed optimization pipelines for audio hotword detection models, maintaining performance parity for resource-constrained Bluetooth consumer electronics.',
            },
            {
              highlight: '40+ enterprise customers',
              text: 'Led model fine-tuning initiatives and integrated Acoustic Echo Cancellation (AEC) into automotive speech recognition systems, resolving critical production latency and filter divergence issues.',
            },
          ],
        },
      ],
    },
  ],
  labs: [
    {
      id: 'agent-triage-sandbox',
      title: 'Agentic Debugging & Routing Sandbox',
      status: 'Planned',
      summary:
        'Interactive multi-turn ReAct agent harness for testing prompt routing, context pruning, and automated LLM failure triage workflows.',
      stack: ['FastAPI', 'Claude Agent SDK', 'ReAct', 'Docker'],
      targetEndpoint: '/api/labs/triage',
    },
    {
      id: 'pnw-endurance-companion',
      title: 'PNW Endurance Ride Companion',
      status: 'Concept',
      summary:
        'Route elevation analyzer, Cascade weather window planner, and pacing estimator inspired by 4k–5k mi/yr training, STP, and GranFondo Whistler.',
      stack: ['FastAPI', 'Python', 'LLM Tools', 'React'],
      targetEndpoint: '/api/labs/rides',
    },
    {
      id: 'self-hosted-lab-slot',
      title: 'Self-Hosted Interactive Lab Slot',
      status: 'Ready for FastAPI',
      summary:
        'Pre-wired frontend and API client ready to mount live Python backends when migrating from GitHub Pages to a 24/7 home server or AWS.',
      stack: ['React', 'FastAPI', 'Home Server / AWS'],
      targetEndpoint: '/api/health',
    },
  ],
  skills: [
    {
      id: 'ai-ml',
      title: 'AI & ML',
      subtitle: 'Orchestration, post-training & speech systems',
      items: [
        'LLM Infrastructure',
        'Agentic Workflows',
        'ReAct',
        'MoE',
        'SFT',
        'RLHF',
        'Prompt Engineering',
        'Task Planning',
        'Data Pipelines',
        'RAG',
        'Vector Database',
        'Speech Recognition',
        'NLP',
        'Pattern Recognition',
        'PyTorch',
      ],
    },
    {
      id: 'cloud-infra',
      title: 'Cloud & Infra',
      subtitle: 'Distributed services, big data & product UI',
      items: [
        'AWS ECS',
        'DynamoDB',
        'Step Functions',
        'S3',
        'SQS',
        'Docker',
        'CI/CD',
        'Microservices',
        'PySpark',
        'Kafka',
        'React',
        'Spring Boot',
        'PostgreSQL',
      ],
    },
  ],
  education: [
    {
      school: 'University of Washington',
      location: 'Seattle, WA',
      degree: 'M.S. in Electrical and Computer Engineering',
    },
    {
      school: 'Shanghai Jiao Tong University',
      location: 'China',
      degree: 'B.S. in Electronic and Electrical Engineering',
    },
  ],
  outdoors: {
    cyclingStats: [
      {
        value: '4k–5k mi',
        label: 'Annual Mileage',
        detail: 'Year-round Pacific Northwest road miles',
      },
      {
        value: 'STP',
        label: 'Seattle → Portland',
        detail: '206-mile Pacific Northwest classic finisher',
      },
      {
        value: '4×',
        label: 'GranFondo Whistler',
        detail: 'Sea-to-Sky climbs from Vancouver to Whistler',
      },
    ],
    cyclingNarrative:
      'Long days in the saddle across Puget Sound, Snoqualmie climbs, and the Sea-to-Sky highway keep engineering perspective sharp.',
    rvTitle: 'RV Overland & Basecamp',
    rvNarrative:
      'Owning an RV turns weekend endurance rides, mountain snow days, and lake mornings into mobile basecamps across Washington, Oregon, and British Columbia.',
    activities: [
      {
        id: 'snowboarding',
        title: 'Snowboarding',
        caption: 'Chasing Cascade powder and crisp groomers all winter.',
      },
      {
        id: 'hiking',
        title: 'Hiking',
        caption: 'Alpine ridges, volcanic passes, and misty PNW trails.',
      },
      {
        id: 'paddleboarding',
        title: 'Paddleboarding',
        caption: 'Early morning glass across Lake Washington and alpine lakes.',
      },
      {
        id: 'camping',
        title: 'Camping',
        caption: 'Unplugging under tall evergreens with camp coffee.',
      },
    ],
  },
};
