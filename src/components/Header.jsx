import './Header.css';

import React from 'react'

const Header = () => {
  return (
    <div className='Header '>
      <nav className='navbar' style={{ backgroundColor: '#1F305E'}}>
        <div className='container-fluid'>
          <a className='display-1 navbar-brand text-bg-white' id='header' href='/' >Library Management System</a>
        </div>
      </nav>
    </div>
  )
}

export default Header;