import React from 'react';
import './App.css';
<<<<<<< HEAD
import Home from './Home'
import 'bootstrap/dist/css/bootstrap.min.css';
=======
import Landing from "./components/Landing"
import Signup from "./components/Form"
import Jumbo from "./components/Jumbo"
import Logo from "./components/Logo"
import CustomNavbar from "./components/CustomNavbar"
import Fig from './components/Figures';

>>>>>>> c28392c2190dd73451e3e34ff99a62638acf84c7


function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Home />
=======
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
>>>>>>> c28392c2190dd73451e3e34ff99a62638acf84c7
    </div>
    
  );
}

export default App;
