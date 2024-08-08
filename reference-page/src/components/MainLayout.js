import React from 'react';
import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';
import '../styles/MainLayout.css';

const MainLayout = () => {
  return (
    <div className="main-layout">
      <LeftColumn />
      <RightColumn />
    </div>
  );
};

export default MainLayout;
