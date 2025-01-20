// // components/VotingPanel.js
// import React from "react";
// import ConferenceSection from "./ConferenceSection";
// import "./Styling/VotingPanel.css";

// const VotingPanel = () => (
//   <main className="voting-panel">
//     <ConferenceSection title="West" />
//     <ConferenceSection title="East" />
//   </main>
// );

// export default VotingPanel;







// components/VotingPanel/VotingPanel.js
import React from "react";
import ConferenceSection from "./ConferenceSection";
import "./scss/VotingPanel.scss";

const VotingPanel = () => (
  <div className="voting-panel">
    <ConferenceSection title="West" />
    <ConferenceSection title="East" />
  </div>
);

export default VotingPanel;
