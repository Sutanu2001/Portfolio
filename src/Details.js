import logo from "./assets/Sutanu Roy.png";
import profile from "./assets/Profile.gif";

import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sql from "./assets/techstack/SQL.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import mongo from "./assets/techstack/mongo.png";
import java from "./assets/techstack/java.png";

import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.jpg";

// Logos
export const logos = {
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Sutanu Roy",
  tagline: "a Web Developer",
  img: profile,
  about: `I’m a recent B.Tech graduate in Information Technology 2025 batch with a strong foundation in web development and programming. My skillset includes HTML, CSS, JavaScript, React Js, Redux-toolkit, Bootstrap, Tailwind CSS, SQL and Mongo Db databases and Java programming language. I have a keen interest in building responsive, user-friendly web applications and writing clean, efficient code.

As a fresher, I’m actively seeking opportunities where I can contribute to real-world projects, learn from experienced teams, and grow into a skilled software developer. I am enthusiastic, quick to learn, and excited to begin my professional journey in the tech industry.`,
   why_me: (
    <ul>
      <li><strong>Strong Technical Foundation:</strong> I have hands-on experience in modern web development technologies like HTML, CSS, JavaScript, React, Redux, along with backend fundamentals using SQL and Java.</li>
      <li><strong>Quick Learner & Adaptable:</strong> I grasp new concepts and tools quickly, and I'm always eager to learn and grow in fast-paced environments.</li>
      <li><strong>Project-Driven Approach:</strong> I have built multiple projects (personal or academic) that showcase my ability to turn ideas into functional applications. I focus on clean code, responsive design, and good user experience.</li>
      <li><strong>Team Player with a Positive Attitude:</strong> I work well in collaborative environments and communicate effectively with both technical and non-technical team members.</li>
      <li><strong>Eager to Start My Career:</strong> As a motivated fresher, I bring enthusiasm, dedication, and a strong desire to contribute meaningfully to any team I join.</li>
    </ul>
   )

};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/sutanu-roy-9aa419213",
  github: "https://www.github.com/Sutanu2001",
  twitter: "https://twitter.com/",
  instagram: "https://www.instagram.com/sutanu_r",
};

export const workDetails = [
  {
    Position: "Frontend Web Developer",
    Company: `CodSoft`,
    Location: "virtual",
    Type: "Internship",
    Duration: "May 2023 - June 2023",
  },
];

export const eduDetails = [
  {
    Position: "BTech",
    Company: "Bankura Unnayani Institute of Engineering",
    Location: "Bankura",
    Type: "Full Time",
    Duration: "July 2022 - July 2025",
  },
  {
    Position: "BSc Physics",
    Company: `Aghore Kamini Prakash Chandra Mahavidyalaya`,
    Location: "Hooghly",
    Type: "Full Time",
    Duration: "Aug 2019 - July 2022",
  },
   {
    Position: "Higher Sceondary",
    Company: `Bajua High School`,
    Location: "Bajua, Hooghly",
    Type: "Full Time",
    Duration: "May 2019",
  },
   {
    Position: "Secondary",
    Company: `Bajua High School`,
    Location: "Bajua, Hooghly",
    Type: "Full Time",
    Duration: "May 2017",
  },
];

export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  tailwind: tailwind,
  bootstrap: bootstrap,
  sql:sql,
  mongo:mongo,
  java: java,
  vscode: vscode,
  npm: npm,
  git: git,
  github: github,
};

export const projectDetails = [
  {
    title: "Portfolio Website",
    image: projectImage1,
    description: `It's my portfolio with the features of Home, About, TechStack, Project and Contact Page with a responsive window which demonstrate my ability and skills.`,
    techstack: "HTML/CSS, JavaScript, React Js, Tailwind CSS",
    previewLink: "https://sutanu2001.netlify.app/",
    githubLink: "https://www.github.com/Sutanu2001",
  },
  {
    title: "Ecommerce Website",
    image: projectImage2,
    description: `This is a ecommerce website project named Z'Shop which basically an electronics store, it contains home, about, product pages and cart and checkout like features`,
    techstack: "HTML/CSS, JavaScript, React Js, Redux-toolkit, Bootstrap",
    previewLink: "",
    githubLink: "https://www.github.com/Sutanu2001",
  },
];

export const contactDetails = {
  email: "2020sutanuroy@gmail.com",
  phone: "8509753213",
};

