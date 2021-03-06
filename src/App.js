import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todolist from './components/Todolist';
import Customnavbar from './components/Navbarr/Navbar'
import ProgressBar from './habit-tracker/progressbar/Progressbar'
import Form from './login/Form'
import { AuthProvider } from "./login/Auth";
import Landing from './landingpage/Landing';

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <Router>
          <div className="App">
            <Customnavbar />
            <Route path="/" exact={true} component={Landing} />          
            < Route path="/register" exact={true} component={Form} />
            < Route path="/login" exact={true} component={Form} />
            < Route path='/todolist' exact={true} component={Todolist} />
            < Route path='/habit' exact={true} component={ProgressBar} />
          </div>
        </Router >
      </AuthProvider>
    );
  }
}

export default App;
