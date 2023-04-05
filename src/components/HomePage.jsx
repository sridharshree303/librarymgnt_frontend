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
        </div>
    )
}

export default HomePage;