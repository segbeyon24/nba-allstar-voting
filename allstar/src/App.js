// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [westFrontcourtVotes, setWestFrontcourtVotes] = useState(0);
//   const [eastFrontcourtVotes, setEastFrontcourtVotes] = useState(0);
//   const [westGuardVotes, setWestGuardVotes] = useState(0);
//   const [eastGuardVotes, setEastGuardVotes] = useState(0);

//   const handleVote = (region, position) => {
//     if (region === 'west' && position === 'frontcourt') {
//       setWestFrontcourtVotes(westFrontcourtVotes + 1);
//     } else if (region === 'east' && position === 'frontcourt') {
//       setEastFrontcourtVotes(eastFrontcourtVotes + 1);
//     } else if (region === 'west' && position === 'guard') {
//       setWestGuardVotes(westGuardVotes + 1);
//     } else if (region === 'east' && position === 'guard') {
//       setEastGuardVotes(eastGuardVotes + 1);
//     }
//   };

//   return (
//     <div className="container">
//       <h1>NBA All-Star Voting</h1>
//       <p>Every vote with your NBA ID gets you another chance to win a trip to All-Star.</p>
//       <div className="search-bar">
//         <input type="text" placeholder="Search players..." />
//       </div>
//       <div className="regions">
//         <div className="region">
//           <h2>WEST</h2>
//           <div className="position">
//             <h3>FRONTCOURT</h3>
//             <button onClick={() => handleVote('west', 'frontcourt')}>
//               Vote {westFrontcourtVotes}
//             </button>
//           </div>
//           <div className="position">
//             <h3>GUARD</h3>
//             <button onClick={() => handleVote('west', 'guard')}>
//               Vote {westGuardVotes}
//             </button>
//           </div>
//         </div>
//         <div className="region">
//           <h2>EAST</h2>
//           <div className="position">
//             <h3>FRONTCOURT</h3>
//             <button onClick={() => handleVote('east', 'frontcourt')}>
//               Vote {eastFrontcourtVotes}
//             </button>
//           </div>
//           <div className="position">
//             <h3>GUARD</h3>
//             <button onClick={() => handleVote('east', 'guard')}>
//               Vote {eastGuardVotes}
//             </button>
//           </div>
//         </div>
//       </div>
//       <button className="submit-button">Submit Votes</button>
//     </div>
//   );
// }

// export default App;


//--------------------Atempt 2----------------------------------------------------------------

//--------------------------------------------------------------------------------------------

// import React from "react";
// import Header from "./components/Header";
// import VotingPanel from "./components/VotingPanel";
// import Footer from "./components/Footer";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <VotingPanel />
//       <Footer />
//     </div>
//   );
// }

// export default App;




//----------------------------------Atempt 3---------------------------------------------------------

//----------------------------------------------------------------------------------------------------

import React from "react";
import Header from "./components/Header";
import VotingPanel from "./components/VotingPanel";
import Footer from "./components/Footer";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <VotingPanel />
      <Footer />
    </div>
  );
}

export default App;
