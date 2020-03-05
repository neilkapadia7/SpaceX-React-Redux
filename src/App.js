import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Home from './components/Home';
import Launches from './components/Launches';
import Mission from './components/Mission';
import Rocket from './components/Rocket';
import Launch from './components/Launches/Launch';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';


import {Provider} from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
        <Router>
         <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/launches' component={Launches} />
            <Route exact path='/launch/:id' component={Launch} />
            <Route exact path='/mission' component={Mission} />
            <Route exact path='/rocket' component={Rocket} />
          </Switch>
        </Router>
    </Provider>
  );
}

export default App;
