import React from 'react';
import { NavLink } from 'react-router-dom';
import './SideMenu.css';

const SideMenu = () => {

  return (
    <div className='SideMenu'>
      <div>
        <NavLink to="/"><button className='btn NoColor'>Home</button></NavLink>
      </div>
      <div>
        <NavLink to="/dashboard"><button className='btn NoColor' >DashBoard</button></NavLink>
      </div>
      <div className='dropend'>
        <button className='btn NoColor dropend dropdown-toggle' type='button' id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Library</button>
        <ul className="dropdown-menu " aria-labelledby="dropdownMenuButton1">
          <li><a className="dropdown-item" href="/library/allbooks">List All Books</a></li>
          <li><a className="dropdown-item" href="/library/librarian">Librarian's</a></li>
          <li><a className="dropdown-item" href="/library/booksissued">Books Issued By Librarian </a></li>
        </ul>
      </div>
      <div className='dropend'>
        <button className='btn NoColor dropend dropdown-toggle' type='button' id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Books</button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><a className="dropdown-item" href="/book">Add Book</a></li>
          <li><a className="dropdown-item" href="/book/search">Search Book</a></li>
          <li><a className="dropdown-item" href="/book">Book's List</a></li>
          <li><a className="dropdown-item" href="/author">Save Author</a></li>
          <li><a className="dropdown-item" href="/author">Author's List</a></li>
          <li><a className="dropdown-item" href="/author/search">Author Books</a></li>
        </ul>
      </div>
      <div className='dropend'>
        <button className='btn NoColor dropend dropdown-toggle' type='button' id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Student</button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><a className="dropdown-item" href="/student">Add Student</a></li>
          <li><a className="dropdown-item" href="/student">List of Students</a></li>
          <li><a className="dropdown-item" href="/student/search">Student Book Loans</a></li>
        </ul>
      </div>
      <div className='dropend'>
        <button className='btn NoColor dropend dropdown-toggle' type='button' id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Book Loans</button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><a className="dropdown-item" href="/bookloan">Take Book</a></li>
          <li><a className="dropdown-item" href="/bookloan/all">BookLoans Transactions</a></li>
        </ul>
      </div>
    </div>
  )
}

export default SideMenu
