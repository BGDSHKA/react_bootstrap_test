import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import NaviBar from './Components/Navibar';
import { Route, Switch } from 'react-router-dom';

import {Home} from './Home';
import {Users} from './Users';
import {About} from './About';

function App() {
  return (
    <>
   <NaviBar />
   <Switch>
     <Route exact path="/" component={Home} />
     <Route path="/users" component={Users} />
     <Route path="/about" component={About} />
   </Switch>
   </>
  );
}

export default App;
