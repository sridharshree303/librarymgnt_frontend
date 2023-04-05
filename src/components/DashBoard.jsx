import React from 'react';
import './DashBoard.css';

export default function DashBoard() {
    return (
        <div className=''>
            {/* -------- Dashboard title ----------- */}
            <div className='card' id='cardTitle'>
                <div className='card-body'>
                    <h1 className='display-6 card-title'>DashBoard</h1>
                </div>
            </div>
            {/* ------- statics cards ---------- */}
            <div className='row'>
                <div className='sizing card card-body col-2 '>
                    <span id='count'>60
                        <h6 id="countName">Total Students</h6></span>
                </div>
                <div className='sizing card card-body col-2 '>
                    <span id='count'>250
                        <h6 id="countName">Total Books</h6></span>
                </div>
                <div className='sizing card card-body col-2 '>
                    <span id='count'> 4
                        <h6 id="countName">Total Librarians</h6></span>
                </div>
                <div className='sizing card card-body col-2 '>
                    <span id='count'> 777
                        <h6 id="countName">Total Transactions</h6></span>
                </div>
            </div>

            {/* -------- Available Books ------------- */}
            <div className='row'>
                <div className='card sizing card-body' >
                    <h6 className='card-title display-6'> Available Books</h6>
                    <div className='card-body'>
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Handle</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td colspan="2">Larry the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
