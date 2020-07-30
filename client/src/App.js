import React, { Fragment } from 'react';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alert from './components/layout/Alerts';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ContactState from './context/contact/ContactState';
import AuthtState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import './App.css';

const App = () => {
  return (
    <AuthtState>
      <ContactState>
        <AlertState>
          <Router>
            <Fragment>
              <Navbar />
              <div className='container'>
                <Alert />
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/about' component={About} />
                  <Route exact path='/register' component={Register} />
                  <Route exact path='/login' component={Login} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertState>
      </ContactState>
    </AuthtState>
  );
};

export default App;
