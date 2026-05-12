import React from 'react';
import { useTranslation } from "react-i18next";
import ExperienceCard from "./ExperienceCard";
import { Jumbotron } from './migration';
import { Container, Row } from "react-bootstrap";
import { experiences as experiencesConfig } from "../../editable-stuff/config.js";

const Experience = () => {
  const { t } = useTranslation();
  const translated = t('home:experiences', { returnObjects: true });

  const experiences = translated.map((item, i) => ({
    ...item,
    companylogo: experiencesConfig.data[i]?.companylogo,
  }));

  return (
    <section id="experiences" className="section">
      <Container>
        <Jumbotron className="bg-white">
          <h2 className="display-4 mb-5 text-center">
            {t('home:experiencesHeading')}
          </h2>
          <Row>
            {experiences.map((data) => (
              <ExperienceCard key={data.role} data={data} />
            ))}
          </Row>
        </Jumbotron>
      </Container>
    </section>
  );
}

export default Experience;
