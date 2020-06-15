import React from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Title from './Title';
import SignUp from './signup';


function App() {
  return (
    <Router>

      <div className="App">
        <Title />
        <Route path='/signup' component={SignUp} />
      </div>
      
    </Router>
  );
}

export default App;
