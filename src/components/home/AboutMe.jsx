import React from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { Jumbotron } from "./migration";

const pictureLinkRegex = new RegExp(
  /[(http(s)?):(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/
);

const AboutMe = ({ link, imgSize, resume, resumeFr }) => {
  const { t } = useTranslation();
  const [profilePicUrl, setProfilePicUrl] = React.useState("");
  const [showPic, setShowPic] = React.useState(Boolean(link));

  React.useEffect(() => {
    const handleRequest = async () => {
      const instaLink = "https://www.instagram.com/";
      const instaQuery = "/?__a=1";
      try {
        const response = await axios.get(instaLink + link + instaQuery);
        setProfilePicUrl(response.data.graphql.user.profile_pic_url_hd);
      } catch (error) {
        setShowPic(false);
        console.error(error.message);
      }
    };

    if (link && !pictureLinkRegex.test(link)) {
      handleRequest();
    } else {
      setProfilePicUrl(link);
    }
  }, [link]);

  return (
    <Jumbotron id="aboutme" className="m-0">
      <div className="container row">
        <div className="col-5 d-none d-lg-block align-self-center">
          {showPic && (
            <img
              className="border border-secondary rounded-circle"
              src={profilePicUrl}
              alt="profilepicture"
              width={imgSize}
              height={imgSize}
            />
          )}
        </div>
        <div className={`col-lg-${showPic ? "7" : "12"}`}>
          <h2 className="display-4 mb-5 text-center">{t('home:aboutHeading')}</h2>
          <p className="lead text-center">{t('home:aboutMessage')}</p>
          {resume && (
            <p className="lead text-center">
              <a
                className="btn btn-outline-dark btn-lg me-2"
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
                  className="btn btn-outline-dark btn-lg"
                  href={resumeFr}
                  target="_blank"
                  rel="noreferrer noopener"
                  role="button"
                  aria-label={t('common:about.cvFrancaisAria')}
                >
                  {t('common:about.cvFrancais')}
                </a>
              )}
            </p>
          )}
        </div>
      </div>
    </Jumbotron>
  );
};

export default AboutMe;
