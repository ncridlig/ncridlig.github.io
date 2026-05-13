import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  navBar,
  mainBody,
  about,
  repos,
  leadership,
  skills,
  getInTouch,
  experiences,
  blog,
} from "./editable-stuff/config.js";
import MainBody from "./components/home/MainBody";
import Project from "./components/home/Project";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Skills from "./components/home/Skills";
import { Blog } from "./components/blog/Blog";
import BlogPost from "./components/blog/BlogPost";
import GetInTouch from "./components/home/GetInTouch.jsx";
import Leadership from "./components/home/Leadership.jsx";

import Experience from "./components/home/Experience";

const Home = React.forwardRef((props, ref) => {
  return (
    <>
      <MainBody
        gradient={mainBody.gradientColors}
        title={`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}
        icons={mainBody.icons}
        profilePic={about.imageLink}
        imgSize={about.imageSize}
        resume={about.resume}
        resumeFr={about.resumeFr}
        ref={ref}
      />
      {experiences.show && (
        <Experience />
      )}
      {repos.show && (
        <Project
          username={repos.gitHubUsername}
          length={repos.reposLength}
          specfic={repos.specificRepos}
        />
      )}
      {leadership.show && (
        <Leadership
          img={leadership.images}
          imageSize={leadership.imageSize}
        />
      )}
      {skills.show && (
        <Skills />
      )}
      {blog.show && (
        <Blog />
      )}
    </>
  );
});

const App = () => {
  const titleRef = React.useRef();

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
      {navBar.show && <Navbar ref={titleRef} />}
      <Routes>
        <Route path="/" exact element={<Home ref={titleRef} />} />
        <Route path="/blog" element={blog.show ? <Blog /> : <Home ref={titleRef} />} />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
      <Footer>
        {getInTouch.show && (
          <GetInTouch email={getInTouch.email} />
        )}
      </Footer>
    </BrowserRouter>
  );
};

export default App;
