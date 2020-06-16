import React from 'react';
import './App.css';
import Landing from "./components/Landing"
import Signup from "./components/Form"
import Jumbo from "./components/Jumbo"
import Logo from "./components/Logo"
import CustomNavbar from "./components/CustomNavbar"
import Fig from './components/Figures';



function App() {
  return (
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


      <Signup />
    </div>
    
  );
}

export default App;
