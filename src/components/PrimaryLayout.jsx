import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './Login';
import HomePage from './HomePage';
import Navigation from './Navigation';
import GameSubLayout from './GameSubLayout'
import GamesList from './GamesList';
import GameNavigation from './GameNavigation';
import Seasons from './Seasons';
import '../styles/primarylayout.css';
import '../App.css';

class PrimaryLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  //Remember you moved the path to your home page to test game sublayout put route back on top
  render() {
    return (
      <BrowserRouter>
        <div className="grid">
          <header className="header">
            <h1 className="logo">Top Shelf Tracker</h1>
          </header>
          <Route path="/login" component={Login} />
          <div className="col-1-10">
            <Route path="/app/:seasonID" component={Navigation} />
          </div>
          <switch>
            <main className="col-2-10">
            <Route exact path="/" component={GameSubLayout} />            
              <Route exact path="/app" component={Seasons} />
              <Route exact path="/app/:seasonId" component={GamesList} />
              <Route exact path="/app/:seasonId/:gameId" component={GameNavigation} />
            </main>
          </switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default PrimaryLayout;