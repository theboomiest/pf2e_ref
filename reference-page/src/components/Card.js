import React from 'react';
import '../styles/Card.css';

const Card = ({ card, onClick }) => {
  return (
    <div className="card" onClick={() => onClick(card)}>
      <div className="card-icon">{card.icon}</div>
      <div className="card-title">{card.title}</div>
      <div className="card-summary">{card.summary}</div>
    </div>
  );
};

export default Card;
