// // components/ConferenceSection.js
// import React from "react";
// import PlayerCard from "./PlayerCard";
// import "./Styling/ConferenceSection.css";

// const ConferenceSection = ({ title }) => (
//   <section className="conference-section">
//     <h2>{title} Conference</h2>
//     <div className="player-category">
//       <h3>Frontcourt</h3>
//       <div className="player-grid">
//         <PlayerCard />
//         <PlayerCard />
//         <PlayerCard />
//       </div>
//     </div>
//     <div className="player-category">
//       <h3>Guard</h3>
//       <div className="player-grid">
//         <PlayerCard />
//         <PlayerCard />
//       </div>
//     </div>
//   </section>
// );

// export default ConferenceSection;







// components/ConferenceSection/ConferenceSection.js
import React from "react";
import PlayerCard from "./PlayerCard";
import "./scss/ConferenceSection.scss";

const ConferenceSection = ({ title }) => (
  <div className="conference-section">
    <h2 className="conference-title">{title}</h2>
    <div className="position-section">
      <h3>Frontcourt</h3>
      <div className="player-grid">
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
      </div>
    </div>
    <div className="position-section">
      <h3>Guard</h3>
      <div className="player-grid">
        <PlayerCard />
        <PlayerCard />
      </div>
    </div>
  </div>
);

export default ConferenceSection;
