import { BlogBuilder } from "../components/blog/BlogBuilder";
const bloglist = [];

const blog = new BlogBuilder({
  title: "Tour of SACMI",
  image: "/sacmi.png",
  description:
    "The reason I pivoted from Electrical Engineering to Artifical Intelligence...",
})
  .addHeading("Growing Interest in AI")
  .addParagraph(
    "I first came to Bologna in Fall 2021 as an international student visiting from San Diego. My studies were in Electrical Engineering. However, at UniBo, I sat in the class Artificial Intelligence in Industry. This class convinced me to pivot to AI. I vividly remember the tour of SACMI (Società Anonima Cooperativa Meccanici Imola) as proof that AI was capable of automating complex tasks with superhuman precision. I did not know the company beforehand, SCAMI are based in Imola in Italy, and specialize in manufacturing and packaging."
  )
  .addParagraph(
    "The SACMI factory tour was organized in a presentation then guided demonstrations. We were shown a ceramic defect inspection robot, which could pick up toilets, sinks, or other complex ceramic objects and rotate them while inspecting the surface for cracks or bad glazing. Its benefit over humans was not suffering from eye strain, maintaining focus, and being capable of working around the clock. We also went to a room which bottled soda cans. The machine used computer vision to inspect bottles where the bottle cap seal was poorly formed and discard them, at speeds so fast we could only see a blur. As you can hear in the video, I was very impressed. SACMI and AI in Industry convinced me that AI was rapidly developing and could use my skills to their full potential."
  )
  .addParagraph(
    "After the visit, SACMI was kind enough to create a video of the day. Check it out here:"
  )
  .addVideo("https://www.youtube.com/embed/9pB7XvaKaRM?si=kkqhAbYfsjqrXvJI")
  .addFooter("October 14, 2024");

const blog1 = new BlogBuilder({
  title: "Open CV Autonomous Vehicle",
  image: "/roscar.png",
  description:
    "Learning is better in a group...",
})
  .addHeading("Robot Operating System")
  .addParagraph(
    "My second year at UCSD, I applied for the course Intro to Autonomous Vehicles. This experience was available to a small number of applicants, mainly third and fourth years, but the professor accepted me on my merits. Little did I know, how much it would prepare me for UniBo Motorsport two years later. This is because it gave me a brilliant introduction to ROS, the open source firmware used everywhere for robotics. In short, ROS allows components to communicate with one another using topics, which subscribe or publish to other nodes. It also manages packages and dependencies, all while allowing for real time operation."
  )
  .addImage("/roscarmods.png")
  .addHeading("Autonomous Navigation")
  .addParagraph(
    "The guiding project in this course was to create a vehicle capable of autonomous navigation. It was a true group project, which bettered my time management and communication skills. My mates were two Mechanical Engineers and an Applied Mathematics major, and I was the Electrical Engineer. We started by modifying a Traxxas Slash 1/10 scale model by adding a sturdy 3D printed camera mount. We also added an acrylic plate with mounting holes for the single board computer, voltage regulator, relay, and wiring. It had adjustable tilt which was important to tune the look ahead distance. Then, using OpenCV, we processed the camera data to identify the boundaries and center line of the track then drive along it. From time to time the car tried to run away from us, so we incorporated an emergency shutdown with a keyfob that would trip the relay when pressed. This taught us about troubleshooting because we had an intermittent issue with the emergency shutdown, which we successfully narrowed down to a bad coin battery. It sounds like it should have been the first step in troubleshooting, and it was, but did not measure the battery voltage under load so it escaped detection. This in particular, I remember when troubleshooting, to make sure not to take anything for granted."
  )
  .addParagraph(
    <>
      Many thanks for the web archive project for saving the project website. You can check it out for more details, pictures, and videos:{" "}
      <a href="http://web.archive.org/web/20220701100242/https://guitar.ucsd.edu/maeece148/index.php/2020FallTeam5" target="_blank" rel="noopener noreferrer">
        2020FallTeam5
      </a>
    </>
  )  
  .addVideo("https://www.youtube.com/embed/2VcuRZCTn6M?si=tLe8Bsdi5IWWOz1h")
  .addFooter("October 15, 2024");

  const blog2 = new BlogBuilder({
    title: "FPV Drone Pilot",
    image: "/drone.png",
    description:
      "Some people build computers. I build acrobatic flying machines..."
  })
  .addHeading("FPV = First Person View")
  .addParagraph(
    "Radio controlled aircraft are my longest running hobby. My mother has experience flying small aircraft, and my father likes tinkering. Starting from 11 years old when I was offered a radio controlled car, the Losi Mini-T, I started wishing to take it to the third dimension. As a freshman in high school, I saved enough to buy the parts for a QAV210 drone from a Chinese seller. They arrived a month later, and I built the drone by following guides on YouTube. I self-taught myself how to solder, use a multimeter, and troubleshoot. It was addictive. I searched for friends in the hobby but I was too young to drive and often had no choice but to fly by myself at the park. I would fly, crash, rebuild... for months! Eventually I got the hang of flying line of sight and invested in FPV goggles. These use a camera on the front of the drone to provide a low latency cockpit view. They are very immersive. Over time, I got better at building drones. They had more range, more flight time, and better cameras."
  )
  .addParagraph(
    "During the summer of 2020, it was still covid lockdown, but I made a tight group of fellow pilots and we would fly together. My skills grew tremendously. I started diving buildings, looping cranes, and cruising over the ocean. I invested in a GoPro Hero 11 to record my flights and spent time on reducing electronic noise and vibrations which improved the video quality. Check out one of my flights here:"
  )
  .addVideo("https://www.youtube.com/embed/ulzixaiELEM?si=qhR_orQfUxvyr7_u")
  .addFooter("October 15, 2024");

  const blog3 = new BlogBuilder({
    title: "Building an Othello Player",
    image: "/drone.png",
    description:
      "Stretching my CNNs..."
  })
  .addHeading("Is a board an image?")
  .addParagraph(
    "A unique use case for Convolutional Neural Networks..."
  )
  .addVideo("https://youtu.be/4uyaCkAwKLU?si=NeWwT9pevr9odWtG")
  .addVideo("https://youtu.be/_9cp5MPo1r4?si=_J6iBY0Xf8V-vtzl")
  .addFooter("October 15, 2024");

  const blog4 = new BlogBuilder({
    title: "Deploying Home Assistant",
    image: "/drone.png",
    description:
      "Years long process..."
  })
  .addHeading("Is a board an image?")
  .addParagraph(
    "A unique use case for Convolutional Neural Networks..."
  )
  .addVideo("https://youtu.be/4uyaCkAwKLU?si=NeWwT9pevr9odWtG")
  .addVideo("https://youtu.be/_9cp5MPo1r4?si=_J6iBY0Xf8V-vtzl")
  .addFooter("October 15, 2024");

// bloglist.push(blog4);
// bloglist.push(blog3);

bloglist.push(blog2);
bloglist.push(blog1);
bloglist.push(blog);

export default bloglist;
