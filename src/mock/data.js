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
  paragraphOne: 'My name is Erica Lu, and I am a second year student at Northeastern University. Currently, I am pursuing a bioengineering degree with a double minor in business and law.',
  paragraphTwo: 'I aim to achieve my interests in product development, consulting, marketing communications, research, and data analytics. As of now, I am involved in various activities such as Phi Sigma Rho, Society of Asian Scientists and Engineers, and Innovators for Global Health.',
  paragraphThree: 'In my free time, I enjoy reading at cafes, cooking fusion dishes, upcyling clothing pieces, watching professional soccer, and playing the piano.',
  resume: 'https://drive.google.com/file/d/1U1UsL-DJbyYDqkJx1c1e-hD9Jl_Y5xqe/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Website Design Portfolio',
    info: '• Leveraged programming knowledge in ReactJS (JavaScript library) and Gatsby to build a personal website',
    info2: '• Used GitHub and Netlify to source code and generate a host origin',
    url: '',
    repo: 'https://github.com/ejlu17/my-website', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Project1.jpg',
    title: 'Logo Redesign, Theranano Technologies',
    info: '• Researched color schemes and historical medical symbols in a team of four, focused on incorporating the idea of nanoparticle delivery and revitalization into the redesign',
    info2: '• Drafted new trademarks using Adobe Create with the intention of rebranding and attracting consumers',
    url: 'https://www.theranano.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Project2.jpg',
    title: 'Autonomous Testing Agent Project, Cornerstone of Engineering II',
    info: '• Brainstormed technical solutions for shortages brought on by COVID-19 in a team of four',
    info2: '• Utilized knowledge in basic ciruitry, AutoCAD, and C++ to successfully create an autonomous rapid test bot for consumers to easily use',
    url: 'https://drive.google.com/file/d/10-gHGadO-fpdN7go5-ruR6RImBhoIwUm/view?usp=sharing',
    repo: 'https://github.com/ejlu17/project-ata', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Project3.jpg',
    title: 'Lockbox Project, Cornerstone of Engineering I',
    info: '• Applied circuity, AutoCAD, and C++ capabilities to produce a secure dual mechanism lockbox',
    info2: '• Acted as a project leader in a group of four to facilitate a collaborative learning environment ',
    url: 'https://drive.google.com/file/d/1bD3hzPvuTXHkEXPZYKbtaxki9n3Mgt4t/view?usp=sharing',
    repo: 'https://github.com/ejlu17/project-lockbox', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Project4.jpg',
    title: 'Website Design, Karma Trade',
    info: '• Utilized WordPress in a team of two to design a UI optimized website that encourages organic traffic',
    info2: '• Developed a visual-heavy immersive web format to increase consumer interaction',
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
      name: 'instagram',
      url: 'https://www.instagram.com/erica.lu17/',
    },
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://www.facebook.com/erica.lu17/',
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
