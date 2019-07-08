import React from 'react';
import { Route, Link, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { PageContainer } from "./components/PageWrapper";
import Menu from './components/Menu';
import Home from './containers/Home';
import Contact from './containers/Contact';
import Example from './containers/Example';

function Routes() {
  return (
      <div>
        <Route
            render={({ location }) => {
              return (
                  <PageContainer>
                      <Menu />
                    <TransitionGroup component={null}>
                      <CSSTransition
                          timeout={300}
                          classNames="page"
                          key={location.key}
                      >
                        <Switch location={location}>
                          <Route exact path="/" component={Home} />
                          <Route exact path="/example" component={Example} />
                          <Route exact path="/contact" component={Contact} />
                        </Switch>
                      </CSSTransition>
                    </TransitionGroup>
                  </PageContainer>
              );
            }}
        />
      </div>
  );
}

export default Routes;
