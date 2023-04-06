import React from 'react';
import './DashBoard.css';

const HomePage = () => {
    return (
        <div>
            <div className='card' id='cardTitle'>
                <div className='card-body'>
                    <h1 className='display-6 card-title'>Home</h1>
                </div>
            </div>
            <div className='card' id='cardTitle'>
                <div className='card-body'>
                    <h4> Library Management System</h4>
                    <ol className='textSize'>
                        <li>Student</li>
                        <li>Books</li>
                        <li>Library</li>
                        <li>Book Loans</li>
                    </ol>
                </div>
            </div>
            <div className='card' id='cardTitle'>
                <div className='card-body'>
                    <h4> Features Included :</h4>
                    <ul className='textSize'>
                        <li>Student</li>
                        <ol>
                            <li>Student can take book borrow from Library</li>
                            <li>Show list of Books taken by Student</li>
                            <li>Register student and List of students</li>
                        </ol>
                        <li>Librarian</li>
                        <li>Books</li>
                        <li>Book Loans</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default HomePage;