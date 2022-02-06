import React from 'react';
import './Header.css'

function Header() {
  return (
  <div className='header'>

      <div className="logo-container">
          <img src="Assets/header/punkLogo.png" className='punkLogo' alt="" />
      </div>

      <div className="searchBar">
        <div className="searchIconContainer">
          <img src="Assets/header/search.png" alt="" />
        </div>
        <input type="text" className="searchInput"  placeholder='Collection, item or user ...'/>
      </div>

      <div className="headerItems">
        <p>Drops</p>
        <p>Marketplace</p>
        <p>Create</p>
      </div>
      
  </div>
  );
}

export default Header;
