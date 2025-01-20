// src/components/PlayerSelectionPanel.js
import React from 'react';
import PlayerCard from './Styling/PlayerCard';

const PlayerSelectionPanel = ({ conference, players, onSelect }) => (
  <section>
    <h2>{conference} Conference</h2>
    <div className="player-grid">
      {players.map((player) => (
        <PlayerCard key={player.id} player={player} onSelect={onSelect} />
      ))}
    </div>
  </section>
);

export default PlayerSelectionPanel;
