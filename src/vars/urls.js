/*
 ** URLS for react-router
 */

const routes = () => {
  const ROOT = "/-";

  return {
    ROOT,
    ABOUT_ME: `${ROOT}/about-me`,
    SOCIAL_LINKS: `${ROOT}/social-links`,
    GALLERY: `${ROOT}/gallery`,
  };
};

const urls = {
  ROOT: "/",
  PAGES: routes(),
};

export default urls;
