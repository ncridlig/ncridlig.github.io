import React, { useState, useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";
import Container from "react-bootstrap/Container";
import { Jumbotron } from "./migration";
import Row from "react-bootstrap/Row";
import ProjectCard from "./ProjectCard";
import axios from "axios";

const dummyProject = {
  name: null,
  description: null,
  svn_url: null,
  stargazers_count: null,
  languages_url: null,
  pushed_at: null,
};
const API = "https://api.github.com";

const Project = ({ username, length, specfic }) => {
  const { t } = useTranslation();
  const [projectsArray, setProjectsArray] = useState([]);

  const fetchRepos = useCallback(async () => {
    try {
      const allReposAPI = `${API}/users/${username}/repos?sort=updated&direction=desc`;
      const specficReposAPI = `${API}/repos/${username}`;
      const response = await axios.get(allReposAPI);
      const repoList = [...response.data.slice(0, length)];

      if (specfic.length > 0) {
        const specifics = await Promise.all(
          specfic.map((repoName) =>
            axios.get(`${specficReposAPI}/${repoName}`).then((r) => r.data)
          )
        );
        repoList.push(...specifics);
      }

      setProjectsArray(repoList);
    } catch (error) {
      console.error(error.message);
    }
  }, [username, length, specfic]);

  useEffect(() => {
    fetchRepos();
  }, [fetchRepos]);

  const dummyProjectsArr = new Array(length + specfic.length).fill(dummyProject);

  return (
    <Jumbotron fluid id="projects" className="bg-light m-0">
      <Container className="">
        <h2 className="display-4 pb-5 text-center">{t('home:projectsHeading')}</h2>
        <Row>
          {projectsArray.length
            ? projectsArray.map((project) => (
              <ProjectCard
                key={project.name || project.svn_url || Math.random()}
                value={project}
              />
            ))
            : dummyProjectsArr.map((project, index) => (
              <ProjectCard
                key={`dummy-${index}`}
                value={project}
              />
            ))}
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Project;
