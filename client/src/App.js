import React from 'react';

import Navbar from './components/Navbar.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Pages/Home';

import './App.css';
import About from './components/Pages/About.js';
import HowItWorks from './components/Pages/HowItWorks.js';
import GetStarted from './components/Pages/GetStarted.js';
import Family from './components/Pages/Family.js';
import Random from './components/Pages/Random.js';
import Fun from './components/Pages/Fun.js';
import Nature from './components/Pages/Nature.js';
import Culture from './components/Pages/Culture.js';
import filterService from './services/filterService';






function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/About' exact component={About} />
          <Route path='/HowItWorks' exact component={HowItWorks} />
          <Route path='/GetStarted' exact component={GetStarted} />
          <Route path='/Family' exact component={Family} />
          <Route path='/Random' exact component={Random} />
          <Route path='/Fun' exact component={Fun} />
          <Route path='/Random' exact component={Fun} />
          <Route path='/Nature' exact component={Nature} />
          <Route path='/Culture' exact component= {Culture}/>
        </Switch>
      </Router>
      
    </>
  );
}






export default App;












// code to connect to server

// import React, { useState, useEffect } from 'react';

// // SERVICES
// import userService from './services/userService';

// function App() {
//   const [users, setusers] = useState(null);

//   useEffect(() => {
//     if (!users) {
//       getusers();
//     }
//   });

//   const getusers = async () => {
//     let res = await userService.getAll();
//     setusers(res);
//   };

//   const renderUser = (user) => {
//     return (
//       <li key={user._id}>
//         <h3>
//           {`${user.first_name} 
//           ${user.last_name}`}
//         </h3>
//         <p>{user.location}</p>
//       </li>
//     );
//   };

//   return (
//     <div>
//       <ul>
//         {users && users.length > 0 ? (
//           users.map((user) => renderUser(user))
//         ) : (
//           <p>No users found</p>
//         )}
//       </ul>
//     </div>
//   );
// }

// export default App;
