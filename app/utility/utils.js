const projectList = [
  {
    Name: "AeroWave",
    status: "Ongoing",
    Description: "Developed a smart helmet equipped with AI-driven sound recognition and vibration feedback to convert environmental sounds into tactile sensations for deaf riders, improving their awareness and safety on the road.",
    type: "IoT, AI",
    imageUrl: "images/aeroWave.jpg",
    link: "https://www.youtube.com/watch?v=sT-B3ahe4l4&feature=youtu.be",
  },
  
  {
    Name: "WATCHDOG",
    status: "Completed",
    Description: "Wide Area Threat Control And High Definition Observation Grid, A versatile Autonomous Defense System (ADS) capable of real-time surveillance, threat detection, and multidirectional movement using IoT and vision technologies.",
    imageUrl: "images/ADS.png",
    type: "Iot, AI",
    link: " ",
  },
  {
    Name: "Prostify",
    status: "Completed",
    Description: "Developed a myoelectric prosthetic arm that allows users to control movements through natural muscle signals.A cost-effective prosthetic arm using sensor technology to provide real-time muscle contraction detection and precise control for users.",
    type: "IoT, AI",
    imageUrl: "images/prostify.jpg",
    link: "https://www.youtube.com/watch?v=ZncFhM9QeYM&feature=youtu.be",
  },
];

const AboutMe = {
  Name: "Sathwik Shetty N",
  Description:
  "Hey! I’m a product developer with expertise in IoT and assistive technology. They have worked on innovative projects like AeroWave, a smart helmet for deaf riders, and Prostify, an advanced prosthetic arm. Their work focuses on creating inclusive, impactful solutions using AI and advanced hardware.",  imageUrl: "",
  skills: [
    "React.js",
    "Next.js",
    "Three.js",
    "Nodejs",
    "MySQL",
    "Express.js",
    "MongoDB",
    "Python",
    "Java",
    "C++",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Framer Motion",
  ],
};

const galleryImages = Array(20);
for (let i = 1; i <= 11; i++) {
  galleryImages[i - 1] = `/images/${i}.jpeg`;
}
galleryImages[12] = "/images/13.jpeg";
galleryImages[13] = "/images/16.jpeg";
galleryImages[14] = "/images/18.jpeg";

const navContent = [
  {
    Name: "Home",
    link: "/Home",
  },
  {
    Name: "Projects",
    link: "/Project",
  },
  {
    Name: "Gallery",
    link: "/Gallery",
  },
  {
    Name: "About",
    link: "/About",
  },
  {
    Name: "Get In Touch",
    link: "/Contact",
  },
];

export { projectList, AboutMe, galleryImages, navContent };
