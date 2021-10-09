import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Erica Lu | Portfolio', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Erica Lu',
  subtitle: 'I am a BS Bioengineering student at Northeastern University',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://drive.google.com/file/d/1U1UsL-DJbyYDqkJx1c1e-hD9Jl_Y5xqe/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Project1.jpg',
    title: 'Therananos Technologies Logo Redesign',
    info: '',
    info2: '',
    url: 'https://www.theranano.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Project2.jpg',
    title: 'Project Autonomous Testing Agent',
    info: '',
    info2: '',
    url: 'https://drive.google.com/file/d/10-gHGadO-fpdN7go5-ruR6RImBhoIwUm/view?usp=sharing',
    repo: 'https://github.com/ejlu17/project-ata', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Project3.jpg',
    title: 'Project Lockbox',
    info: '',
    info2: '',
    url: 'https://drive.google.com/file/d/1bD3hzPvuTXHkEXPZYKbtaxki9n3Mgt4t/view?usp=sharing',
    repo: 'https://github.com/ejlu17/project-lockbox', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Project4.jpg',
    title: 'Karma Trade Website Design',
    info: '',
    info2: '',
    url: 'https://www.karmatrade.shop/',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'lu.er@northeastern.edu',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/erica-lu-14b134197/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/ejlu17',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
