import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from "./components/Landing"
import Todolist from './components/Todolist';
import Card from './components/Card';
import CustomNavbar from './components/navbar/Navbar'
import ProgressBar from './components/progressbar/Progressbar'
import Footer from './components/Footer';
import Appa from './login/Appa'
// import AboutUs from './components/AboutUs'

import { AuthProvider } from "./login/Auth";
import PrivateRoute from "./login/PrivateRoute";

// import Footer from './components/Footer';
// import CustomNavbar from './components/CustomNavbar';
class App extends Component {
  render() {


    return (

      <AuthProvider>
        <Router>
          <div className="App">
            <CustomNavbar />

            {/* <style>{'body { background-color: #edd7cc; }'}</style> */}
            <Route path="/" exact={true} component={Landing} />
            {/* <Route path="/" exact={true} component={Card} /> */}
            <Route path="/" exact={true} component={Footer} />
            {/* < Route path="/" exact={true} component={Socmed} /> */}
            {/* < Route path="/" exact={true} component={App} /> */}





            {/* < Route path="/" exact={true} component={About} /> */}
            < Route path="/register" exact={true} component={Appa} />

            < Route path="/login" exact={true} component={Appa} />
            < PrivateRoute path='/todolist' exact={true} component={Todolist} />
            < PrivateRoute path='/habit' exact={true} component={ProgressBar} />
          </div>
        </Router >
      </AuthProvider>





    );
  }
}

export default App;
