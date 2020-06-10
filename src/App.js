import React from 'react';
import './App.css';
import Landing from "./components/Landing"
import Signup from "./components/Form"
import Jumbo from "./components/Jumbo"
function App() {
  return (
    <div className="App">
      <div className="Navbar">
        <style>{'body { background-color: #edd7cc; }'}</style>
        <Landing />
      </div>
      <Jumbo />
      <Signup />
    </div>
    
  );
}

export default App;
