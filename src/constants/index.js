import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    java, 
    python,
    aws,
    mysql
} from "../assets/icons";

export const skills = [
    {
        imageUrl: java,
        name: "JAVA",
        type: "Backend",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Backend",
    },
    {
        imageUrl: mysql,
        name: "MySQL",
        type: "Backend",
    },
    {
        imageUrl: aws,
        name: "AWS",
        type: "Backend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    
    // {
    //     imageUrl: motion,
    //     name: "Motion",
    //     type: "Animation",
    // },
    // {
    //     imageUrl: mui,
    //     name: "Material-UI",
    //     type: "Frontend",
    // },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    // {
    //     imageUrl: nodejs,
    //     name: "Node.js",
    //     type: "Backend",
    // },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Data Science Intern",
        company_name: "Yugasys",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "June 2018 - September 2018",
        points: [
            "Delivered, mentored team of 4, tasks included managing, cleaning a dataset, designing and visualizing reports. ",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Conducted analysis of plotted charts, leveraging visualization techniques and statistical models to identify revenue-boosting patterns and inform strategic decision-making.",
        ],
    },
    {
        title: "Software Engineer",
        company_name: "UrbanPro.com",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "Oct 2019 - July 2023",
        points: [
            "Built an advertisement-based model for tutors, adding extra revenue to system and tracking its performance, boosted ROI of tutors by approximately 18%, integrated and upgraded Zoom APIs, Web SDKs into platform. ",
            "Collaborated with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Led, helped, managed and reviewed a referral system, and a reminder system for student payments, classes by raising attendance rate, a violation reporting system employed by customer support, boosting revenue",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    // {
    //     title: "Web Developer",
    //     company_name: "Shopify",
    //     icon: shopify,
    //     iconBg: "#b7e4c7",
    //     date: "Jan 2022 - Jan 2023",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    // {
    //     title: "Full stack Developer",
    //     company_name: "Meta",
    //     icon: meta,
    //     iconBg: "#a2d2ff",
    //     date: "Jan 2023 - Present",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/pooja-thalur',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/poojathalur',
    }
];

export const projects = [
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Analysing Recession using Python',
        description: 'Analyzing the trend in recession in the US economy using Python and Pandas. ',
        link: 'https://github.com/pooja-thalur/steganography',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Steganography',
        description: 'eveloped an Image, audio, video steganographic encryption and decryption. Provided a whole interface to perform the user required actions using LSB algorithm',
        link: 'https://github.com/pooja-thalur/steganography',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'TV Series',
        description: 'Created a full-stack site get the tv series reviews, ratings, and other details using frontend tools.',
        link: 'https://github.com/pooja-thalur/tvseries',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Election Tracker',
        description: 'Designed and built a data analysis application to view the election candidates details, compare and analyze them for better perspective during elections .',
        link: 'https://github.com/pooja-thalur/Electiontracker',
    }
    
];