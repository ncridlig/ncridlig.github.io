import React from "react";
import { useTranslation } from "react-i18next";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const { t } = useTranslation();
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
        {props.children}
        <i className="fas fa-code" /> {t('common:footer.with')} <i className="fas fa-heart" /> {t('common:footer.by')}{" "}
        <a
          rel="noopener"
          href="https://github.com/ncridlig"
          aria-label={t('common:footer.myGithub')}
        > <span className="badge bg-dark">
            Nicolas Cridlig
          </span>
        </a>{" "}
        {t('common:footer.using')} <i className="fab fa-react" />
        <p>
          <small className="text-muted">
            {t('common:footer.openSource')}
          </small>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
