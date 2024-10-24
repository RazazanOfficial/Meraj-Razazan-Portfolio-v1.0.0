export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Services", link: "#services" },
  { name: "Contact", link: "#contact" },
];

export const skillsName = [
  {
    name: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    id: 2,
    name: ["Flex & Grid", "BootStrap5", "Tailwind.CSS"],
  },
  {
    id: 3,
    name: ["React.Js", "Next.Js", "Express."],
  },
];
export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "./b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Download my resume",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "./grid.svg",
    spareImg: "./b4.svg",
  },

  {
    id: 5,
    title: "Currently building a Scalable E-Commerce Platform",
    description:
      "Developing a powerful and scalable e-commerce platform designed for seamless user experiences, high performance, and robust security.",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName:
      "justify-center md:justify-start lg:justify-center text-red-400",
    img: "./b5.svg",
    spareImg: "./grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "./p4.svg",
    iconLists: ["./next.svg", "./tail.svg", "./ts.svg", "./three.svg", "./gsap.svg"],
    link: "https://razazanofficial.github.io/apple-clone-website/",
  },
  {
    id: 2,
    title: "Personal Portfolio - A Full-Stack Developer",
    des: "A sleek portfolio showcasing my skills, projects, and journey as a Full-Stack Developer. Built with modern tools and optimized for a seamless user experience.",
    img: "./personalWebsite.png",
    iconLists: [
      "./next.svg",
      "./tail.svg",
      "./ts.svg",
      "./three.svg",
      "./aceternity.png",
    ],
    link: "https://razazanofficial.github.io/apple-clone-website/",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

// export const companies = [
//   {
//     id: 1,
//     name: "cloudinary",
//     img: "./cloud.svg",
//     nameImg: "/cloudName.svg",
//   },
//   {
//     id: 2,
//     name: "appwrite",
//     img: "/app.svg",
//     nameImg: "/appName.svg",
//   },
//   {
//     id: 3,
//     name: "HOSTINGER",
//     img: "/host.svg",
//     nameImg: "/hostName.svg",
//   },
//   {
//     id: 4,
//     name: "stream",
//     img: "/s.svg",
//     nameImg: "/streamName.svg",
//   },
//   {
//     id: 5,
//     name: "docker.",
//     img: "/dock.svg",
//     nameImg: "/dockerName.svg",
//   },
// ];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Developer",
    desc: "Delivering pixel-perfect designs and highly interactive user interfaces using React and Next.js. Every project is built with optimal performance and seamless user experience in mind.",
    className: "md:col-span-2",
    thumbnail: "./exp1.svg",
  },
  {
    id: 2,
    title: "Backend Developer",
    desc: "Ensuring secure, scalable, and high-performance back-end solutions using Express.js. Focused on delivering reliable APIs and server-side logic with top-notch performance and security.",
    className: "md:col-span-2",
    thumbnail: "./exp4.svg",
  },
  {
    id: 3,
    title: "SEO & Performance Optimization",
    desc: "Designing and developing websites that excel in both performance and search engine optimization (SEO). Ensuring fast load times, responsiveness, and superior SEO ranking for every project.",
    className: "md:col-span-2",
    thumbnail: "./exp2.svg",
  },
  {
    id: 4,
    title: "Modern Web Design",
    desc: "Creating stunning, user-friendly websites with the latest web standards and design trends. My focus is on intuitive interfaces, accessibility, and delivering world-class experiences across all devices.",
    className: "md:col-span-2",
    thumbnail: "./exp3.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "./git.svg",
    href: "https://github.com/RazazanOfficial",
  },
  {
    id: 2,
    img: "./telegram.svg",
    href: "https://t.me/RazazanOfficial",
  },
  {
    id: 3,
    img: "./link.svg",
    href: "https://www.linkedin.com/in/meraj-razazan/",
  },
];
