import React from 'react';
import { Route, Switch } from 'react-router-dom';
import moment from 'moment';
import Home from './Home';
import Frontend from './Frontend';
import Backend from './Backend';
import DataScience from './DataScience';
import Navigation from './Navigation';

export default function App() {
  return (
    <div className='app'>
      <h1>Trifour Tech Portfolio</h1>
      <div className='date'>{moment().format('LL')}</div>
      <Navigation />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/frontend' component={Frontend} />
        <Route path='/backend' component={Backend} />
        <Route path='/datascience' component={DataScience} />
      </Switch>
    </div>
  );
}
