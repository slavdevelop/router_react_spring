import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { PageOne, PageTwo, PageThree, PageFour, Navbah } from './components';

const App = () => {
  return (
    <>
      <Navbah />
      <main className="container-fluid">
        <Switch>
          <Route exact path="/" component={PageOne} />
          <Route exact path="/two" component={PageTwo} />
          <Route exact path="/three" component={PageThree} />
          <Route exact path="/four" component={PageFour} />
        </Switch>
      </main>
    </>
  );
};

export default App;
