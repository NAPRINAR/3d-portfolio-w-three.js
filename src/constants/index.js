import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  freelance,
  reactstarwars,
  employees,
  webapp,
  threejs,
  codetime,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'Software Developer',
    icon: mobile,
  },
  {
    title: 'Node.js Developer',
    icon: backend,
  },
  {
    title: 'React Developer',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'React.js / Node.js Developer',
    company_name: 'CodeTime',
    icon: codetime,
    iconBg: '#383E56',
    date: 'Nov 2021 - Dec 2022',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Optimizing applications with microserve architecture. Mainly Focused on js packages using inside the companys projects',
      'Automating an internal product',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Freelance',
    icon: freelance,
    iconBg: '#E6DEDD',
    date: 'Dec 2022 - Feb 2023',
    points: [
      'Developing and maintaining web applications using React.js, Node.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'React.js Developer',
    company_name: 'Freelance',
    icon: freelance,
    iconBg: '#E6DEDD',
    date: 'Feb 2023 - Apr 2023',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Narek proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Narek does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Narek optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'Employees App',
    description:
      'Web-based platform that allows users to add, edit, and manage employees. The application has registration and authorization functions',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'Node.Js',
        color: 'pink-text-gradient',
      },
      {
        name: 'Ant Design',
        color: 'green-text-gradient',
      },
      {
        name: 'TypeScript',
        color: 'pink-text-gradient',
      },
      {
        name: 'Express.js',
        color: 'green-text-gradient',
      },
      {
        name: 'JWT',
        color: 'blue-text-gradient',
      },
      {
        name: 'Prisma',
        color: 'green-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
    ],
    image: employees,
    source_code_link: 'https://github.com/NAPRINAR/employees-fullstack',
  },
  {
    name: 'Star Wars',
    description:
      'Web application that enables users to search for Star Wars characters, view each character, add character to favorites, change a page theme.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'Redux',
        color: 'pink-text-gradient',
      },
    ],
    image: reactstarwars,
    source_code_link: 'https://github.com/NAPRINAR/star-wars-website',
  },
  {
    name: 'Social Network',
    description:
      'An analogue of social networks, where the user can register, log in, create posts, leave comments, like, subscribe to other users, etc.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'Node.Js',
        color: 'pink-text-gradient',
      },
      {
        name: 'Ant Design',
        color: 'green-text-gradient',
      },
      {
        name: 'TypeScript',
        color: 'pink-text-gradient',
      },
      {
        name: 'Express.js',
        color: 'green-text-gradient',
      },
      {
        name: 'JWT',
        color: 'blue-text-gradient',
      },
      {
        name: 'Prisma',
        color: 'green-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'Docker',
        color: 'pink-text-gradient',
      },
    ],
    image: webapp,
    source_code_link: 'https://github.com/NAPRINAR/web-app-fullstack-front',
  },
];

export { services, technologies, experiences, testimonials, projects };
