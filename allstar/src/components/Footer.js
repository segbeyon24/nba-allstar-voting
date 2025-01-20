// // components/Footer.js
// import React from "react";
// import "./Styling/Footer.css";

// const Footer = () => (
//   <footer className="footer">
//     <button className="submit-button">Submit Votes</button>
//     <div className="vote-summary">
//       <span>West: 0 / 5</span>
//       <span>East: 0 / 5</span>
//     </div>
//   </footer>
// );

// export default Footer;









// components/Footer/Footer.js
import React from "react";
import "./scss/Footer.scss";

const Footer = () => (
  <footer className="footer">
    <div className="vote-summary">
      <span>West: 0 / 5</span>
      <span>East: 0 / 5</span>
    </div>
    <button className="submit-button">Submit Votes</button>
  </footer>
);

export default Footer;
