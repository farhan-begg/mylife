import React from 'react';
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



function App() {
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
        </div>


        {/* <Signup /> */}

        <Route path='/signup' component={SignUp} />
        <Title />
      </div>

    </Router>


  );
}

export default App;
