import React, { useState } from 'react';
import Card from './Card';
import Modal from './Modal';
import '../styles/LeftColumn.css';
import { cardData } from './cardData';

const LeftColumn = () => {
  const [activeTab, setActiveTab] = useState('Tab1');
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const closeModal = () => {
    setSelectedCard(null);
  };

  const renderContent = () => {
    const cards = cardData[activeTab];

    if (!cards) {
      return <div>No cards available</div>;
    }

    // Ensure only 24 cards are displayed (4 rows of 6 cards each)
    const displayedCards = cards.slice(0, 24);

    return (
      <div className="card-grid">
        {displayedCards.map((card) => (
          <Card key={card.id} card={card} onClick={handleCardClick} />
        ))}
      </div>
    );
  };

  return (
    <div className="left-column">
      <div className="tabs">
        <button onClick={() => setActiveTab('Tab1')}>Combat</button>
        <button onClick={() => setActiveTab('Tab2')}>Exploration</button>
        <button onClick={() => setActiveTab('Tab3')}>Downtime</button>
      </div>
      <div className="content">
        {renderContent()}
      </div>
      {selectedCard && <Modal card={selectedCard} onClose={closeModal} />}
    </div>
  );
};

export default LeftColumn;
