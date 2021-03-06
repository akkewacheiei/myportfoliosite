import React from 'react';
import { Switch , Route } from 'react-router-dom';

import AboutMe from './aboutme';
import Contact from './contact';
import LandingPage from './landingpage';
import Project from './project';
import Resume from './resume';

const Main = () => (
    <Switch>
        <Route exact path="/myportfoliosite" component={LandingPage} />
        <Route path="/aboutme" component={AboutMe} />
        <Route path="/contact" component={Contact} />
        <Route path="/project" component={Project} />
        <Route path="/resume" component={Resume} />
    </Switch>
)

export default Main;