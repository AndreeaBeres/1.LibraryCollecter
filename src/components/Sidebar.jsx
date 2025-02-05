import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Sidebar.css';  // Path to Sidebar.css in the src/css folder

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Booklist</h2>
      <ul>
        <li><Link to="/fantasy">Fantasy</Link></li>
        <li><Link to="/fiction">Fiction</Link></li>
        <li><Link to="/action-adventure">Action + Adventure</Link></li>
        <li><Link to="/mystery">Mystery</Link></li>
        <li><Link to="/horror">Horror</Link></li>
        <li><Link to="/thriller-suspense">Thriller + Suspense</Link></li>
        <li><Link to="/romance">Romance</Link></li>
      </ul>
      <h3>
        <Link to="/home" style={{ color: '#333', textDecoration: 'none' }}>
          Home
        </Link>
      </h3>
    </div>
  );
};

export default Sidebar;
