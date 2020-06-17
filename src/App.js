import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Title from './Title';
import SignUp from './signup';
import Home from './Home'
// import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from "./components/Landing"
import Signup from "./components/Form"
import Jumbo from "./components/Jumbo"
import Logo from "./components/Logo"
import CustomNavbar from "./components/CustomNavbar"
import Fig from './components/Figures';
import { auth, addUserDocument } from './firebase'



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
          <CustomNavbar />
          <div className="">
            <style>{'body { background-color: #edd7cc; }'}</style>
            <Landing />
          </div>
          <div className="fig-container">
            <Fig
              width={300}
              height={300}
              image={"todo.jpg"}
              caption={"Todo List"}
            />
            <Fig
              width={300}
              height={300}
              image={"yoga.jpg"}
              caption={"Habit"}
            />
            <Fig
              width={300}
              height={300}
              image={"happy.jpg"}
              caption={"Habit"}
            />
            <Home />
          </div>


          {/* <Signup /> */}

          <Route path='/signup' component={SignUp} />
          <Title />
        </div>

      </Router>


    );
  }
}

export default App;
