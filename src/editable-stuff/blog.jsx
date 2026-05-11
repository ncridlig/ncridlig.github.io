import { BlogBuilder } from "../components/blog/BlogBuilder";
const bloglist = [];

const sacmiPost = new BlogBuilder({
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

const roscarPost = new BlogBuilder({
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

const dronePost = new BlogBuilder({
  title: "FPV Drone Pilot",
  image: "/drone.png",
  description:
    "Some people build computers. I build acrobatic flying machines...",
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

const othelloPost = new BlogBuilder({
  title: "Building an Othello Player",
  image: "/othello.png",
  description:
    "Stretching my CNNs to play a classic board game...",
})
  .addHeading("Is a Board an Image?")
  .addParagraph(
    "A unique use case for Convolutional Neural Networks is representing game boards as images and training a model to evaluate positions."
  )
  .addFooter("TBD");

const homeAssistantPost = new BlogBuilder({
  title: "Deploying Home Assistant",
  image: "/homeassistant.png",
  description:
    "A years-long journey to automate everything at home...",
})
  .addHeading("The Self-Hosted Smart Home")
  .addParagraph(
    "Home Assistant is an open-source home automation platform that puts local control and privacy first. Over several years, I gradually integrated lights, sensors, cameras, and automations throughout my home."
  )
  .addFooter("TBD");

const thesisPost = new BlogBuilder({
  title: "My Master's Thesis: AI That Watches You Work Out",
  image: "/thesis-exemplar.jpg",
  description:
    "Building a real-time exercise recognition system from existing gym security cameras...",
})
  .addHeading("The Problem")
  .addParagraph(
    "The global fitness market is worth over 120 billion dollars and growing at nearly 10% per year. Yet for most gym members, the experience hasn't changed in decades: same equipment, same routines, and no feedback unless you pay for a personal trainer. Trainers improve outcomes dramatically — fewer injuries, better form, faster progress — but they're expensive and can't scale to every member on every visit. Meanwhile, nearly every gym already operates a network of security cameras. They sit there, recording, used only to replay incidents. What if those same cameras could watch members exercise and give them useful feedback in real time?"
  )
  .addHeading("The Approach")
  .addParagraph(
    "The idea is simple: extract body keypoints from video using pose estimation, classify the exercise from how those keypoints move over time, and count the repetitions. The reality, of course, was more complicated. The pipeline chains three models. First, MediaPipe (Google's BlazePose) extracts 33 body landmarks from each frame — shoulders, elbows, hips, knees, and so on. From these, I compute 14 joint angles that describe the body configuration. Second, a Temporal Convolutional Network classifies the exercise across 16 categories by looking at how those angles evolve through time. Third, a model called RepNet counts repetitions by analyzing the periodic self-similarity in the movement. The whole thing runs at 10 frames per second on a laptop, well within the 100 millisecond latency budget needed for real-time use."
  )
  .addParagraph(
    "I compared five classification approaches: Decision Trees, Linear SVM, K-Nearest Neighbors, Histogram Gradient Boosting, and a custom TCN. The TCN won — 95.8% accuracy across 16 exercise categories — but the real surprise was that a simple histogram boosting baseline hit 95.3%. The difference wasn't raw accuracy, it was temporal stability. Tree-based models produced jittery predictions that flipped between classes frame to frame. The TCN's dilated convolutions gave it a receptive field spanning several seconds of movement, producing smooth, stable outputs. When you're displaying results to a user in real time, that stability matters more than a fraction of a percent on a test set."
  )
  .addHeading("Building It")
  .addParagraph(
    "The project grew out of my membership at Sana Health and Fitness in Bologna. The owner, Vincenzo Bassi, had already invested in connected gym technology and wanted to go further. We met in October 2024 and defined a two-phase plan: Phase 1 would focus on exercise identification and repetition counting, Phase 2 on form assessment and posture correction. Over the next seven months, I filmed 330 exercise videos at the gym — members, trainers, myself — covering everything from squats and deadlifts to lateral raises and lunges. Combined with a public dataset, the training corpus reached nearly half a million frames across 16 exercise categories."
  )
  .addParagraph(
    "The system runs on the gym's existing Hikvision security cameras via RTSP streams. A FastAPI backend processes frames, a React frontend displays results, and everything is containerized with Docker and deployable to Google Cloud Run via Terraform. Users get a personal exercise plan through a web interface, and every detected set is logged to a PostgreSQL database. At the end of a session, members can see exactly what they did: which exercises, how many reps, and when."
  )
  .addHeading("What I Learned")
  .addParagraph(
    "The biggest lesson: data quality outweighs model complexity. We spent weeks chasing architectural improvements that yielded fractions of a percent, while cleaning up noisy joint angle extractions and fixing a subtle frame-averaging bug gave us a 4% jump overnight. A related lesson: offline accuracy is a poor proxy for real-world performance. The TCN scored 95.8% on a held-out test set, but in continuous gym video — where the model has to detect when an exercise starts and ends, not just classify pre-segmented clips — detection rate dropped to 72.8%. That gap between the lab and the gym floor is where the real work lives."
  )
  .addParagraph(
    "The most dramatic finding came from a dual-camera experiment. I recorded the same workout simultaneously from two angles: an elevated three-quarter view (typical security camera placement) and a level frontal view. Detection rate dropped from 70% to 40%. Same person, same workout, same models — just a different camera angle. If you're building vision systems for the real world, camera placement isn't a detail, it's the dominant factor."
  )
  .addParagraph(
    "I also learned that building a product is fundamentally different from training a model. The inference pipeline needed three threads with bounded queues to avoid blocking. RepNet's bounding box drifted over time and had to be stabilized. Running on a Mac's MPS backend was faster than CPU but introduced subtle numerical differences from CUDA. Docker's GPU passthrough broke in a way that took three days to diagnose. None of these appear in a research paper's results table, but they determine whether a system actually works."
  )
  .addParagraph(
    "The thesis, dataset, and source code are all publicly available. The dataset — pose landmark sequences from 330 real gym videos — is released to help other researchers work on this problem. If you're interested in the details, the full thesis is linked on my portfolio."
  )
  .addFooter("May 11, 2026");

// Drafts — uncomment when ready:
// bloglist.push(homeAssistantPost);
// bloglist.push(othelloPost);

bloglist.push(thesisPost);
bloglist.push(dronePost);
bloglist.push(roscarPost);
bloglist.push(sacmiPost);

export default bloglist;
