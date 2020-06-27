import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from "./components/Landing"
import { auth, addUserDocument } from './firebase'
import Register from './components/authentication/Register';
import Login from './components/authentication/Login';
import Todolist from './components/Todolist';
import Footer from './components/Footer';
<<<<<<< HEAD
import Customnavbar from './components/navbar/Navbar'
=======
import ProgressBar from './components/progressbar/Progressbar'


>>>>>>> fb-dev



class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  componentDidMount() {
    this.unsubsribe = auth.onAuthStateChanged(async (authenticated) => {
      if (authenticated) {
        // User is signed in.
        addUserDocument(authenticated)
        console.log(authenticated)
      } else {
        // No user is signed in.
      }
    });
  }

  componentWillUnmount() {
    this.unsubsribe();
  }





  render() {


    return (
      <Router>
        <div className="App">
          <Customnavbar />

          <div className="">
            {/* <style>{'body { background-color: #edd7cc; }'}</style> */}
            < Route path="/" exact={true} component={Landing} />

            < Route path="/" exact={true} component={Footer} />
          </div>
          {/* < Route path="/" exact={true} component={About} /> */}
          < Route path="/register" exact={true} component={Register} />
          < Route path="/login" exact={true} component={Login} />
          < Route path='/todolist' exact={true} component={Todolist} />
<<<<<<< HEAD


=======
          < Route path='/habit' exact={true} component={ProgressBar} />
>>>>>>> fb-dev
        </div>
      </Router >




    );
  }
}

export default App;
