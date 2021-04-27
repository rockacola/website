export interface ProfileEducationItem {
  degree: string
  institute: string
  duration: string
}

export interface ProfileInterestItem {
  key: string
  label: string
}

export interface ProfileInvolvementItem {
  filePath: string
  description: string
  skills: string[]
}

export interface ProfileExperienceItem {
  id: string
  title: string
  company: string
  duration: string
  description: string
  involvements: ProfileInvolvementItem[]
}

export interface ProfileSkillItem {
  label: string
  proficiency: number
}

export interface ProfileProps {
  description: string
  expertises: string[]
  educations: ProfileEducationItem[]
  interests: ProfileInterestItem[]
  experiences: ProfileExperienceItem[]
  skills: {
    languages: ProfileSkillItem[]
    frameworks: ProfileSkillItem[]
    libraries: ProfileSkillItem[]
    tools: ProfileSkillItem[]
    paradigms: ProfileSkillItem[]
    platforms: ProfileSkillItem[]
    storages: ProfileSkillItem[]
  }
}

export const profile: ProfileProps = {
  description: `Direct experience with web-oriented solution engineering and software development. Technical leadership by improving structural communication & collaborative methodologies and enhancing incremental delivery workflow & delivery per projects' needs.`,
  expertises: [
    `Program analysis`,
    `Service-oriented architecture`,
    `Legacy management`,
    `SPA, responsive webapp development`,
    `Continuous integration & continuous delivery`,
  ],
  educations: [
    {
      degree: 'MSc IT',
      institute: 'University of Technology Sydney',
      duration: '2005 - 2008',
    },
    {
      degree: 'BSc CIS',
      institute: 'Macquarie University',
      duration: '2002 - 2004',
    },
  ],
  interests: [
    { key: '', label: 'Photography' },
    // { key: '', label: 'Bushwalk' },
    { key: '', label: 'Woodworking' },
    { key: '', label: 'Software' },
    { key: '', label: 'Internet Technologies' },
  ],
  experiences: [
    {
      id: 'exp-1',
      title: 'Product-Lead, Co-Founder',
      company: 'Moonlight.io',
      duration: '2018 - 2021',
      description: `Technical solution design and implementation for fast paced product prototyping.`,
      involvements: [
        {
          filePath: '/images/profiles/experiences/ss-494f.png',
          description:
            'Prototype design and development for a Profile Analytic dashboard.',
          skills: [
            'TypeScript',
            'React.js',
            'Redux',
            'Material UI',
            'Docker',
            'AWS',
          ],
        },
        {
          filePath: '/images/profiles/experiences/ss-5a8c.png',
          description:
            'Development for the version 1 of the marketing campaign homepage.',
          skills: [
            'TypeScript',
            'Foundation Framework',
            'metalsmith',
            'GitHub Actions',
          ],
        },
      ],
    },
    {
      id: 'exp-2',
      title: 'Lead Front-End Developer (Contract)',
      company: 'VML',
      duration: '2015 - 2018',
      description: `Application design, lead and front-end development on multiple projects of small to medium sizes. Primary focus on front-end and API architectures.`,
      involvements: [
        {
          filePath: '/images/profiles/experiences/ssv-eb1a.jpg',
          description:
            'Incremental feature development and maintenance for the campaign single page application of the newly launched Hyundai Genesis in Australia.',
          skills: ['JavaScript', 'gulp', 'Sketch', 'D3.js'],
        },
        {
          filePath: '/images/profiles/experiences/ssv-fde6.jpg',
          description: `Front-end development for the newly launched dynamic digital menu board for McDonald's in Australia.`,
          skills: ['JavaScript', 'jQuery', 'D3.js', 'gulp', 'Sass'],
        },
        {
          filePath: '/images/profiles/experiences/ssv-6350.png',
          description:
            'Redesign and implementation of Oxypay online banking portal.',
          skills: [
            'JavaScript',
            'grunt',
            'metalsmith',
            'jQuery',
            'ampersand.js',
          ],
        },
      ],
    },
    {
      id: 'exp-3',
      title: 'Full Stack Developer (Contract)',
      company: 'Deepend',
      duration: '2014',
      description: `Front-end and back-end development on .NET projects involving API architecture design, content integration and application development pacing and deliverables.`,
      involvements: [],
    },
    {
      id: 'exp-4',
      title: 'Analyst Programmer',
      company: 'ClickView',
      duration: '2008 - 2013',
      description: `Leadership on ASP.NET web form project throughout its development phases involving continuous integration with company eCommerce platform and multimedia servers. Feature driven development process providing seamless deployment to web-based as well as standalone applications.`,
      involvements: [],
    },
  ],
  skills: {
    languages: [
      { label: 'HTML5', proficiency: 9 },
      { label: 'CSS3', proficiency: 9 },
      { label: 'Sass', proficiency: 8 },
      { label: 'JavaScript', proficiency: 8 },
      { label: 'TypeScript', proficiency: 8 },
      // { label: 'PHP', proficiency: 4 },
      // { label: 'Python', proficiency: 4 },
      // { label: 'Go', proficiency: 4 },
      // { label: 'Flutter', proficiency: 3 },
      // { label: 'Solidity', proficiency: 6 },
      // { label: 'Scilla', proficiency: 5 },
      { label: 'C#', proficiency: 5 },
      // { label: 'Bash', proficiency: 5 },
    ],
    frameworks: [
      { label: 'Tailwind', proficiency: 9 },
      { label: 'React.js', proficiency: 8 },
      { label: 'Material UI', proficiency: 8 },
      { label: 'Node.js', proficiency: 7 },
      { label: 'Next.js', proficiency: 6 },
      // { label: 'ASP.NET MVC', proficiency: 6 },
      { label: 'Bootstrap', proficiency: 6 },
      // { label: 'Foundation Framework', proficiency: 7 },
      // { label: '.NET Framework', proficiency: 5 },
      // { label: 'Express.js', proficiency: 7 },
      // loopback
    ],
    libraries: [
      { label: 'jQuery', proficiency: 9 },
      { label: 'Redux', proficiency: 7 },
      { label: 'D3.js', proficiency: 6 },
      // { label: 'Angular', proficiency: 4 },
      { label: 'Jest', proficiency: 6 },
      // { label: 'Webpack', proficiency: 4 },
      // { label: 'Gulp', proficiency: 7 },
      // Scrappy
      // script based Chromium for JS scrapping
    ],
    tools: [
      // { label: 'Adobe Photoshop', proficiency: 7 },
      { label: 'Git', proficiency: 7 },
      { label: 'Docker', proficiency: 5 },
      { label: 'Puppeteer', proficiency: 5 },
      // { label: 'Adobe Illustrator', proficiency: 5 },
      // { label: 'Apache', proficiency: 3 },
      { label: 'Nginx', proficiency: 3 },
      // Solr
      // Elasticsearch
    ],
    paradigms: [
      { label: 'Responsive Design', proficiency: 8 },
      { label: 'Test-driven development', proficiency: 6 },
      // Microservice architecture
      // SOA
      // NoSQL
      // REST API
      // JSON-RPC API
    ],
    platforms: [
      { label: 'Digital Ocean', proficiency: 9 },
      // { label: 'WordPress', proficiency: 6 },
      { label: 'Heroku', proficiency: 6 },
      { label: 'AWS', proficiency: 5 },
      { label: 'GCP', proficiency: 5 },
      // MS Azure
    ],
    storages: [
      { label: 'Redis', proficiency: 9 },
      { label: 'PostgreSQL', proficiency: 7 },
      { label: 'MySQL', proficiency: 7 },
      { label: 'MongoDB', proficiency: 5 },
    ],
  },
}
