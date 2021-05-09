import React from 'react';
import { Sidebar } from './components/Sidebar';
import { Home } from './pages/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Game } from './pages/Game';
import { Profile } from './pages/Profile';

export const App = () => {
  return (
    <div className="app__main">
      <Sidebar/>
        <Router>
          <Switch>
            <Route exact path='/:page' component={Home}/>
            <Route exact path='/games/:game' component={Game}/>
            <Route exact path='/profile' component={Profile}/>
          </Switch>
        </Router>
    </div>
  )
}
