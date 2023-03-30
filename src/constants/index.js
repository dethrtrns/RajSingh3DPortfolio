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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  nextjs,
  mui,
  mantine,
  ratna,
  cod,
  ratnaW,
  ratnaAssociates,
  discBud,
  poison,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },

  {
    name: "Material UI",
    icon: mui,
  },

  {
    name: "Mantine UI",
    icon: mantine,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Ratna Associates",
    icon: ratna,
    iconBg: "#bcd3f7",
    date: "Jan 2023 - present",
    points: [
      "Developing and maintaining web application using Next.js and other related technologies.",
      "Managed both back-end and front-end aspects of development process.",
      "Used Design System Library(MantineUI) and theming for consistent and responsive UI.",
      "Participating in requirements gathering to solidify prerequisites and determine best technical solution to meet business needs.",
      "Collaborated with stakeholders during development processes to confirm creative proposals and design best practices.",
      "Studied user requirements to gain strong understanding of project initiatives and deadlines.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "COD World",
    icon: cod,
    iconBg: "white",
    date: "dec 2021 - nov 2022",
    points: [
      "Designing and developing hybrid(ios & android) mobile application using React Native, Expo and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers etc. to create high-quality product.",
      "Implementing native UI design and ensuring cross-platform compatibility.",
      "Participating in code reviews and providing constructive feedback to product owner.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful and functional as our product, but Raj proved me wrong.",
    name: "Ratnoja Singh Adv.",
    designation: "CEO",
    company: "Ratna Associates",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "After Raj optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Alex Mercer",
    designation: "CTO",
    company: "Cooper's cafe",
    image: "https://randomuser.me/api/portraits/men/5.jpg", //"https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Ratna Associates",
    description:
      "Web-based platform of a law firm that helps users to explore various legal queries and connect securely and even anonymously(optional) with expert legal counsellors of the firm.",
    tags: [
      {
        name: "react/next",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "mantine",
        color: "pink-text-gradient",
      },
    ],
    image: ratnaAssociates,
    source_code_link: "https://github.com/dethrtrns/advratna.git",
    demo_link: "https://advratna.vercel.app/",
  },
  {
    name: "Discount Buddy",
    description:
      "In this world of lucrative discounts and cashbacks all around(but with limits and conditions), a simple Web application that helps users to not only calculate the actual discount they'll be getting but also find an estimated optimal bill amount(even before making the purchases!) according to the limits of the discounts and cashbacks!",
    tags: [
      {
        name: "react/next",
        color: "blue-text-gradient",
      },
      {
        name: "in-development",
        color: "green-text-gradient",
      },
      {
        name: "mantineUI",
        color: "pink-text-gradient",
      },
    ],
    image: discBud,
    source_code_link: "https://github.com/dethrtrns/Discount-Buddy",
    demo_link: "https://discount-buddy.vercel.app/",
  },
  {
    name: "What's your Poison?",
    description:
      "A web based application that helps users to find or even Add any liquor related information including and not limited to price(location wise), ABV, composition etc.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "UX-research-phase",
        color: "green-text-gradient",
      },
      {
        name: "MaterialUI",
        color: "pink-text-gradient",
      },
    ],
    image: poison,
    source_code_link: "https://github.com/dethrtrns/whats-your-poison.git",
    demo_link: "https://whats-your-poison.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
