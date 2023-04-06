import React, { useState } from 'react';
import axios from 'axios';
import './Book.css';

const AuthorBooks = () => {

  const [author, setAuthor] = useState({
    name: "",
  });

  const [booksObj, setBooksObj] = useState([]);

  const changeHandler = (event) => {
    setAuthor({
      ...author,
      [event.target.name]: event.target.value,
    });
  }

  const submitHandler = (event) => {
    event.preventDefault();
    axios.get(`http://localhost:8082/author/list/${author.name}`).then(
      response => {
        console.log(response.data);
        setBooksObj(response.data);
        alert("sucessfull");
      }
    ).catch(
      error => {
        console.log(error)
        alert(error.response.data);
        setBooksObj([]);
      }
    )
  }

  return (
    <div>
      {/* -------- Search By Author ---------- */}
      <div className='card' id='cardTitle'>
        <div className='card-body'>
          <h1 className='display-6 card-title'>Search Author By Name:</h1>
          <hr />
        </div>

        <div className='card-body'>
          <form className='row' onSubmit={submitHandler}>
            <div className="col-3 searchLid offset-1">
              <label htmlFor="name" className="form-label">Enter Author Name :</label>
              <input className="form-control"
                aria-label="select author name label"
                id="name"
                name="name"
                value={author.name}
                onChange={changeHandler}
                aria-describedby="authorHelp" />
              <div id="authorHelp" className="form-text">Enter author name to check details</div>
            </div>
            <div className='row'>
              <button type="submit" className="btn btn-primary col-3 offset-1 my-3">Submit</button>
            </div>
          </form>
        </div>
      </div>
      {/* ---------- Books details ------------- */}
      <div>
        {
          booksObj.length === 0
            ? null
            :
            <div className='row'>
              <div className='card sizing card-body'>
                <h6 className='card-title display-6 pb-3 pt-3'> Books List</h6>
                
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
                      booksObj.length !== 0 && booksObj.map((book, index) => {
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
        }
      </div>
    </div>
  )
}

export default AuthorBooks
