import React from 'react';
import './SideMenu.css';

const SideMenu = () => {
  return (
    <div className='SideMenu'>
      <div>
        <button className='btn NoColor'>Home</button>
      </div>
      <div>
        <button className='btn NoColor'>DashBoard</button>
      </div>
      <div className='dropend'>
        <button className='btn NoColor dropend dropdown-toggle' type='button' id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Library</button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><a className="dropdown-item" href="/">List All Books</a></li>
          <li><a className="dropdown-item" href="/">Add Librarian</a></li>
          <li><a className="dropdown-item" href="/">Librarian's List</a></li>
          <li><a className="dropdown-item" href="/">Books Issued By Librarian </a></li>
        </ul>
      </div>
      <div className='dropend'>
        <button className='btn NoColor dropend dropdown-toggle' type='button' id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Books</button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><a className="dropdown-item" href="/">Add Book</a></li>
          <li><a className="dropdown-item" href="/">Search Book</a></li>
          <li><a className="dropdown-item" href="/">Book's List</a></li>
          <li><a className="dropdown-item" href="/">Save Author</a></li>
          <li><a className="dropdown-item" href="/">Author's List</a></li>
          <li><a className="dropdown-item" href="/">Author Books</a></li>
        </ul>
      </div>
      <div className='dropend'>
        <button className='btn NoColor dropend dropdown-toggle' type='button' id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Student</button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><a className="dropdown-item" href="/">Add Student</a></li>
          <li><a className="dropdown-item" href="/">List of Students</a></li>
          <li><a className="dropdown-item" href="/">Student Book Loans</a></li>
        </ul>
      </div>
      <div className='dropend'>
        <button className='btn NoColor dropend dropdown-toggle' type='button' id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Book Loans</button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><a className="dropdown-item" href="/">Take Book</a></li>
          <li><a className="dropdown-item" href="/">BookLoans Transactions</a></li>
        </ul>
      </div>
    </div>
  )
}

export default SideMenu
