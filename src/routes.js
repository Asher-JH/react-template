import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import LinearProgress from "@material-ui/core/LinearProgress";

import Browser from "@components/Browser";
import AboutMe from "@pages/AboutMe";
import SocialLinks from "@pages/SocialLinks";
import Gallery from "@pages/Gallery";
import Contact from '@pages/Contact';
import urls from "@vars/urls";

const RootRouter = () => {
  return (
    <Router>
      <Browser>
        <Suspense fallback={<LinearProgress />}>
          <Switch>
            <Route exact path={urls.PAGES.ABOUT_ME} component={AboutMe} />
            <Route
              exact
              path={urls.PAGES.SOCIAL_LINKS}
              component={SocialLinks}
            />
            <Route exact path={urls.PAGES.GALLERY} component={Gallery} />
            <Route exact path={urls.PAGES.CONTACT} component={Contact} />
            <Route render={() => <Redirect to={urls.PAGES.ABOUT_ME} />} />
          </Switch>
        </Suspense>
      </Browser>
    </Router>
  );
};

export default RootRouter;
