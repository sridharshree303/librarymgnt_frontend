import React from 'react';
import axios from 'axios';
import { useEffect,useState } from 'react';

const ListAllBooks = () => {
  //implementation
  const [books, setBooks] = useState([]);

  useEffect(() => {

    //books
    axios.get(`http://localhost:8082/book/list`).then(
      response => {
        setBooks(response.data);
      }
    ).catch(
      error => console.log(error)
    )

  }, [])
  return (
    <div className=''>
      {/* -------- Dashboard title ----------- */}
      <div className='card' id='cardTitle'>
        <div className='card-body'>
          <h1 className='display-6 card-title'>List All Books</h1>
        </div>
      </div>
      {/* ------- statics cards ---------- */}
      <div className='row'>
        <div className='sizing card pt-3 pb-3 col-3 '>
          <span id='count'>{books.length}
            <h6 id="countName">Total Books</h6></span>
        </div>
      </div>

      {/* -------- Available Books ------------- */}
      <div className='row'>
        <div className='card sizing card-body' >
          {/* <h6 className='card-title display-6'> Books List</h6> */}
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
                      <td>{book.authors.map(item => item.name + ",")}.</td>
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

export default ListAllBooks
