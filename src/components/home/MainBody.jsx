import React from "react";
import { useTranslation } from "react-i18next";
import Container from "react-bootstrap/Container";
import Typist from 'react-typist-component';
import { Jumbotron } from "./migration";

const MainBody = React.forwardRef(
  ({ gradient, title, profilePic, imgSize, resume, resumeFr, icons }, ref) => {
    const { t, i18n } = useTranslation();

    return (
      <Jumbotron
        fluid
        id="home"
        style={{
          background: `linear-gradient(136deg,${gradient})`,
          backgroundSize: "1200% 1200%",
        }}
        className="title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
      >
        <div id="stars"></div>
        <Container className="text-center">
          <h1 ref={ref} className="display-1">
            {title}
          </h1>
          <Typist key={i18n.language}>
            <div className="lead typist">
              {t('home:heroMessage')}
            </div>
          </Typist>
          <div className="p-5">
            {icons.map((icon, index) => (
              <a
                key={`social-icon-${index}`}
                target="_blank"
                rel="noopener noreferrer"
                href={icon.url}
                aria-label={`My ${icon.image.split("-")[1]}`}
              >
                <i className={`fab ${icon.image}  fa-3x socialicons`} />
              </a>
            ))}
          </div>
          <div className="row justify-content-center mb-4">
            <div className="col-auto">
              <img
                className="border border-secondary rounded-circle"
                src={profilePic}
                alt="Nicolas Cridlig"
                width={imgSize}
                height={imgSize}
              />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <p className="lead mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
                {t('home:aboutMessage')}
              </p>
            </div>
          </div>
          {resume && (
            <div>
              <a
                className="btn btn-outline-light btn-lg me-2 mb-2"
                href={resume}
                target="_blank"
                rel="noreferrer noopener"
                role="button"
                aria-label={t('common:about.resumeAria')}
              >
                {t('common:about.curriculumVitae')}
              </a>
              {resumeFr && (
                <a
                  className="btn btn-outline-light btn-lg mb-2"
                  href={resumeFr}
                  target="_blank"
                  rel="noreferrer noopener"
                  role="button"
                  aria-label={t('common:about.cvFrancaisAria')}
                >
                  {t('common:about.cvFrancais')}
                </a>
              )}
            </div>
          )}
        </Container>
      </Jumbotron>
    );
  }
);

export default MainBody;
