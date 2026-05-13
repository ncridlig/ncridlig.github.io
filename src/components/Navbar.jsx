import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useScrollPosition } from "../hooks/useScrollPosition";
import useResizeObserver from "../hooks/useResizeObserver";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { mainBody, about, repos, skills, blog } from "../editable-stuff/config.js";
import { NavLink } from "./home/migration";

const Navigation = React.forwardRef((props, ref) => {
  const { t, i18n } = useTranslation();
  const [isTop, setIsTop] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const navbarMenuRef = React.useRef();
  const navbarDimensions = useResizeObserver(navbarMenuRef);
  const navBottom = navbarDimensions ? navbarDimensions.bottom : 0;

  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!navbarDimensions || !ref.current) return;
      currPos.y + ref.current.offsetTop - navbarDimensions.bottom > 5
        ? setIsTop(true)
        : setIsTop(false);
      setScrollPosition(currPos.y);
    },
    [navBottom]
  );

  React.useEffect(() => {
    if (!navbarDimensions) return;
    navBottom - scrollPosition >= ref.current.offsetTop
      ? setIsTop(false)
      : setIsTop(true);
  }, [navBottom, navbarDimensions, ref, scrollPosition]);

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === "fr" ? "en" : "fr");
  };

  return (
    <Navbar
      ref={navbarMenuRef}
      className={`px-3 fixed-top  ${!isTop ? "navbar-white" : "navbar-transparent"}`}
      expand="lg"
    >
      <Navbar.Brand className="navbar-brand" href={process.env.PUBLIC_URL + "/#home"}>
        {`- ${mainBody.lastName} -`}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navbar-nav mr-auto">
          {repos.show && (
            <NavLink
              className="nav-item lead"
              href={process.env.PUBLIC_URL + "/#experiences"}
            >
              {t('common:nav.experiences')}
            </NavLink>
          )}
          {repos.show && (
            <NavLink
              href={process.env.PUBLIC_URL + "/#projects"}
            >
              {t('common:nav.projects')}
            </NavLink>
          )}
          {skills.show && (
            <NavLink
              className="nav-item lead"
              href={process.env.PUBLIC_URL + "/#skills"}
            >
              {t('common:nav.skills')}
            </NavLink>
          )}
          {blog.show && (
            <NavLink
              className="nav-item lead"
              href={process.env.PUBLIC_URL + "/#blog"}
            >
              {t('common:nav.blog')}
            </NavLink>
          )}
          <Nav.Link className="nav-item" onClick={toggleLang} style={{ cursor: "pointer" }}>
            <span className="badge bg-secondary">
              {i18n.language === "fr" ? "EN" : "FR"}
            </span>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
});

export default Navigation;
