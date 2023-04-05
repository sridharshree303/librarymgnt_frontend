import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

const BookLoanTrasactions = () => {
  //implementation
  const [books, setBooks] = useState([]);
  const [student, setStudent] = useState([]);
  const [librarians, setLibrarians] = useState([]);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {

    //books
    axios.get(`http://localhost:8082/book/list`).then(
      response => {
        setBooks(response.data);
      }
    ).catch(
      error => console.log(error)
    )

    //students
    axios.get(`http://localhost:8082/student/list`).then(
      response => {
        setStudent(response.data);
      }
    ).catch(
      error => console.log(error)
    )

    //librarians
    axios.get(`http://localhost:8082/librarian/list`).then(
      response => {
        setLibrarians(response.data);
      }
    ).catch(
      error => console.log(error)
    )

    //students
    axios.get(`http://localhost:8082/bookloan/list_transactions`).then(
      response => {
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
          <h1 className='display-6 card-title'>Book Loan Transactions</h1>
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
          <table className="table table-hover  ">
            <thead >
              <tr>
                <th scope="col">#</th>
                <th scope="col">Loan Date</th>
                <th scope="col">LoanId</th>
                <th scope="col">Librarian</th>
                <th scope="col">Student</th>
                <th scope="col">Book Title</th>
              </tr>
            </thead>
            <tbody>
              {
                transactions.map((transact, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{transact.loanDate}</td>
                      <td>{transact.loanId}</td>
                      <td>{transact.librarian.name}</td>
                      <td>{transact.student.sname}</td>
                      <td>{transact.book.title}</td>
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

export default BookLoanTrasactions;
