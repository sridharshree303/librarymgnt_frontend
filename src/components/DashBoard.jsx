import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './DashBoard.css';

export default function DashBoard() {
    //implementation
    const [books, setBooks] = useState([]);
    const [student, setStudent] = useState([]);
    const [librarians, setLibrarians] = useState([]);
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {

        //books
        axios.get(`http://localhost:8082/book/list`).then(
            response =>{ 
                setBooks(response.data);
            }
        ).catch(
            error => console.log(error)
        )

        //students
        axios.get(`http://localhost:8082/student/list`).then(
            response =>{
                setStudent(response.data);
            }
        ).catch(
            error => console.log(error)
        )

        //librarians
        axios.get(`http://localhost:8082/librarian/list`).then(
            response =>{
                setLibrarians(response.data);
            }
        ).catch(
            error => console.log(error)
        )

        //students
        axios.get(`http://localhost:8082/bookloan/list_transactions`).then(
            response =>{
                setTransactions(response.data);
            }
        ).catch(
            error => console.log(error)
        )

    }, [])


    return (
        <div>
            {/* -------- Dashboard title ----------- */}
            <div className='card' id='cardTitle'>
                <div className='card-body'>
                    <h1 className='display-6 card-title'>DashBoard</h1>
                </div>
            </div>
            {/* ------- statics cards ---------- */}
            <div className='row'>
                <div className='sizing card card-body col-2 '>
                    <span id='count'>{student.length}
                        <h6 id="countName">Total Students</h6></span>
                </div>
                <div className='sizing card card-body col-2 '>
                    <span id='count'>{books.length}
                        <h6 id="countName">Total Books</h6></span>
                </div>
                <div className='sizing card card-body col-2 '>
                    <span id='count'> {librarians.length}
                        <h6 id="countName">Total Librarians</h6></span>
                </div>
                <div className='sizing card card-body col-2 '>
                    <span id='count'> {transactions.length}
                        <h6 id="countName">Total Transactions</h6></span>
                </div>
            </div>

            {/* -------- Available Books ------------- */}
            <div className='row'>
                <div className='card sizing card-body' >
                    <h6 className='card-title display-6'> Books List</h6>
                    <table className="table table-hover  ">
                        <thead >
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">BookID</th>
                                <th scope="col">Title</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Authors</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                books.map((book, index) => {
                                    return (
                                        <tr key={index}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{book.bookId}</td>
                                            <td>{book.title}</td>
                                            <td>{book.quantity}</td>
                                            <td>{book.authors.map(item => item.name +",")}.</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    )
}


/*
    <tr>
        <th scope="row">2</th>
        <td>00002</td>
        <td>Spring</td>
        <td>15</td>
        <td>Emily, Elena, John</td>
    </tr>
    <tr>
        <th scope="row">3</th>
        <td>00003</td>
        <td>React</td>
        <td>10</td>
        <td>Pearson, Joseph</td>
    </tr>
    <tr>
        <th scope="row">4</th>
        <td>00004</td>
        <td>Jenkins</td>
        <td>15</td>
        <td>Emily, Elena, John</td>
    </tr>
    <tr>
        <th scope="row">5</th>
        <td>00005</td>
        <td>SQL</td>
        <td>20</td>
        <td>Pearson, Joseph</td>
    </tr>
*/