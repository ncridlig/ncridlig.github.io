// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Nicolas",
  middleName: "Ivan",
  lastName: "Cridlig",
  message: " Student in Artificial Intelligence ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/ncridlig",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/nicocridlig/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/nicolas-cridlig-161451133/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/nicolascridlig.png"),
  imageSize: 375,
  message:
    "My name is Nicolas Ivan Cridlig. I will be a graduate in 2025 from University of Bologna in Italy with a masters degree in Artificial Intelligence. One of my passions is to speak all the Romance Languages.",
  resume: process.env.PUBLIC_URL + "/nicolascridligcv.pdf",
};

// PROJECTS SECTION
// Setting up project length will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "ncridlig", //i.e."johnDoe12Gh"
  reposLength: 6,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/nicolascridlig.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/nicolascridlig.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "French", value: 'Native' },
    { name: "English", value: 'Native' },
    { name: "Italian", value: 'B1' },
    { name: "Coding", value: "Python, C++" },
    { name: "Frameworks", value: "ROS2" },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Artificial Intelligence opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "ncridlig@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Driverless AI Division Manager at UniBo Motorsport',
      companylogo: require('../assets/img/ubm.png'),
      date: 'January 2021 – April 2021',
    },
    {
      role: 'Data Scientist at Scripps Machine Listening Lab',
      companylogo: require('../assets/img/smll.png'),
      date: 'January 2021 – April 2021',
    },
    {
      role: 'IT Supervisor at Scripps Institute of Oceanography',
      companylogo: require('../assets/img/sio.png'),
      date: 'October 2019 – December 2022',
    },
    {
      role: 'Marketing VP at Interfraternity Council',
      companylogo: require('../assets/img/ifc.png'),
      date: 'January 2021 – January 2022',
    },
    {
      role: 'Instructional Assistant at Jacobs School of Engineering',
      companylogo: require('../assets/img/ucsd.png'),
      date: 'January 2021 – April 2021',
    },
    {
      role: 'Fiesta Island Camp Counselor at Boy Scouts of America',
      companylogo: require('../assets/img/bsa.png'),
      date: 'July 2019 – August 2019',
    },
    {
      role: 'Makers Club President at San Diego High School',
      companylogo: require('../assets/img/sdhs.png'),
      date: 'October 2017 – June 2019',
    },
  ]
}

// Blog SECTION
const blog = {
  show: true,
  heading: "Blog",
};


export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences, blog };
