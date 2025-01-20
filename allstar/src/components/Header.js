// // components/Header.js
// import React from "react";
// import "./Styling/Header.css";

// const Header = () => (
//   <header className="header">
//     <h1>NBA All-Star Voting</h1>
//     <p>
//       Every vote with your NBA ID gets you another chance to win a trip to
//       All-Star!
//     </p>
//     <input type="text" placeholder="Search players" className="search-bar" />
//   </header>
// );

// export default Header;




// components/Header/Header.js
import React from "react";
import "./scss/Header.scss";

const Header = () => (
  <header className="header">
    <div className="logo">
      <h1>NBA All-Star Voting</h1>
      <p>Every vote with your NBA ID gets you another chance to win a trip to All-Star!</p>
    </div>
    <input type="text" className="search-bar" placeholder="Search players" />
  </header>
);

export default Header;
