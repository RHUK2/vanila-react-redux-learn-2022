import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import Home from 'pages/Home';
import Detail from 'pages/Detail';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home}></Route>
      <Route path="/:id" component={Detail}></Route>
    </Router>
  );
}

export default App;
