import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <ul>
    <li>
      <Link to="/">Calculator</Link>
    </li>
    <li>
      <Link to="/history">History</Link>
    </li>
    <li>
      <Link to="/otherPage">otherPage</Link>
    </li>
  </ul>
);

export default Header;
