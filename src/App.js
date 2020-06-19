// import React, { Component } from 'react';
// import './App.css';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Landing from "./components/Landing"
// import CustomNavbar from "./components/CustomNavbar"
// import { auth, addUserDocument } from './firebase'
// import Register from './components/Register';
// import Login from './components/Login';
// import About from './components/About';
// import Todolist from './components/Todolist';



// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       currentUser: null
//     }
//   }

//   componentDidMount() {
//     this.unsubsribe = auth.onAuthStateChanged(async (authenticated) => {
//       if (authenticated) {
//         // User is signed in.
//         addUserDocument(authenticated)
//         console.log(authenticated)
//       } else {
//         // No user is signed in.
//       }
//     });
//   }

//   componentWillUnmount() {
//     this.unsubsribe();
//   }


//   render() {

//     return (
//       <Router>
//         <div className="App">
//           <CustomNavbar />
//           <div className="">
//             <style>{'body { background-color: #edd7cc; }'}</style>
//             < Route path="/" exact={true} component={Landing} />
//           </div>
//           < Route path="/" exact={true} component={About} />
//           < Route path="/register" exact={true} component={Register} />
//           < Route path="/login" exact={true} component={Login} />
//           < Route path='/todolist' exact={true} component={Todolist} />
//         </div>
//       </Router >

//     );
//   }
// }

// export default App;
