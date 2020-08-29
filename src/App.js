import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Header, Sidebar } from './components/layout';

import { Home } from './components/pages';
import { SearchVideos } from './components/app';

function App() {
  const [openMenu, setOpenMenu] = useState(true);
  const toggleMenu = () => setOpenMenu(!openMenu);

  return (
    <Router>
      <Header toggleMenu={toggleMenu} />
      <div className='container'>
        <Sidebar openMenu={openMenu} />
        <div className={`${!openMenu && 'wrapper'}`}>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/search' component={SearchVideos} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
