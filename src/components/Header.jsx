import React from 'react';
import '../css/Header.css';  // Path to Header.css in the src/css folder

const Header = () => {
  return (
    <header>
      <h1>LibraryCollection</h1>
      <div className="centered-text">
        Your recommended website where you can choose your favorite books.
      </div>
    </header>
  );
};

export default Header;
