import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from "./components/Landing"
import Todolist from './components/Todolist';
import Customnavbar from './components/navbar/Navbar'
import ProgressBar from './components/progressbar/Progressbar'
import Footer from './components/Footer';
import Appa from './login/Appa'
import { AuthProvider } from "./login/Auth";
import PrivateRoute from "./login/PrivateRoute";

class App extends Component {
  render() {


    return (

      <AuthProvider>
        <Router>
          <div className="App">
            <Customnavbar />
            <style>{'body { background-color: #3d964148; }'}</style>
            <Route path="/" exact={true} component={Landing} />            <Route path="/" exact={true} component={Footer} />
            < Route path="/register" exact={true} component={Appa} />
            < Route path="/login" exact={true} component={Appa} />
            < Route path='/todolist' exact={true} component={Todolist} />
            < Route path='/habit' exact={true} component={ProgressBar} />
          </div>
        </Router >
      </AuthProvider>
    );
  }
}

export default App;
