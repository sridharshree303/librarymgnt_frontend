import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

const BooksIssuedByLibrarian = () => {

  const [librarian, setLibrarian] = useState({
    lid: 0,
  });

  const [list, setList] = useState([]);

  const [librarians, setLibrarians] = useState([]);

  const changeHandler = (event) => {
    setLibrarian({
      ...librarian,
      [event.target.name]: event.target.value,
    });
  }


  const submitHandler = (event) => {
    event.preventDefault();
    axios.get(`http://localhost:8082/librarian/list/${librarian.lid}`).then(
      response => {
        console.log(response.data);
        alert("sucessfull");
        setList(response.data);
      }
    ).catch(
      error => console.log(error)
    )
  }

  useEffect(() => {

    //librarians
    axios.get(`http://localhost:8082/librarian/list`).then(
      response => {
        setLibrarians(response.data);
      }
    ).catch(
      error => console.log(error)
    )

  }, [])

  return (
    <div>
      <div className='card' id='cardTitle'>
        <div className='card-body'>
          <h1 className='display-6 card-title'>Search Issued Books By Librarian :</h1>
        </div>
        <hr />
        <div className='card-body'>
          <form className='row' onSubmit={submitHandler}>
            <div className="col-3 searchLid offset-1 mb-3">
              <label htmlFor="lid" className="form-label">Choose Librarian :</label>
              <select className="form-select"
                aria-label="select librarian label"
                id="lid"
                name="lid"
                value={librarian.lid}
                onChange={changeHandler}
                aria-describedby="librarianHelp">
                <option defaultValue> Select librarian</option>
                {
                  librarians.map(item => {
                    return (
                      <option key={item.librarianId} value={item.librarianId}>{item.name}</option>
                    )
                  })
                }
              </select>
              <div id="librarianHelp" className="form-text">Select librarian available in the dropdown</div>
            </div>
            <div className='textbox col-4 mb-3'>

            </div>
            <div className='row'>
              <button type="submit" className="btn btn-primary col-3 offset-1 my-3">Submit</button>
            </div>
          </form>
        </div>
      </div>
      {/* ------------ show the list of library */}
      <div className='card' id='cardTitle'>
        <div className='card-body'>
          <div className='row'>
            {
              list.length === 0 ? <h4>No data Found</h4> 
              :
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
                    list.map((transact, index) => {
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
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default BooksIssuedByLibrarian;
