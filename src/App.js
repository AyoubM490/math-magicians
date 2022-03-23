import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Calculator from './components/calculator';
import Home from './pages/Home';
import Quote from './pages/Quote';
import NotMatch from './pages/NotMatch';
import Navbar from './pages/Navbar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="site-wrapper">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/calculator">
            <div className="container">
              <Calculator />
            </div>
          </Route>
          <Route path="/quote">
            <Quote />
          </Route>
          <Route path="*">
            <NotMatch />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
