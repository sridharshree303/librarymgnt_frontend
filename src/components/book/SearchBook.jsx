import React, { useState } from 'react';
import axios from 'axios';
import './Book.css';

const SearchBook = () => {

  const [book, setBook] = useState({
    name: "",
  });

  const [bookObj, setBookObj] = useState({
    bookId: null,
    title: "",
    authors: [],
    library: {
      lid: 1
    },
    quantity: null
  });

  const changeHandler = (event) => {
    setBook({
      ...book,
      [event.target.name]: event.target.value,
    });
  }

  const submitHandler = (event) => {
    event.preventDefault();
    axios.get(`http://localhost:8082/book/list/${book.name}`).then(
      response => {
        console.log(response.data);
        setBookObj(response.data);
        alert("sucessfull");
      }
    ).catch(
      error => {console.log(error)
      alert(error.response.data);
      }
    )
  }

  return (
    <div>
      <div className='card' id='cardTitle'>
        <div className='card-body'>
          <h1 className='display-6 card-title'>Search Book By Title:</h1>
          <hr />
        </div>

        <div className='card-body'>
          <form className='row' onSubmit={submitHandler}>
            <div className="col-3 searchLid offset-1">
              <label htmlFor="name" className="form-label">Enter Book :</label>
              <input className="form-control"
                aria-label="select Book name label"
                id="name"
                name="name"
                value={book.name}
                onChange={changeHandler}
                aria-describedby="bookHelp" />
              <div id="bookHelp" className="form-text">Enter book name to check details ex: Java, Spring, SQL, etc</div>
            </div>
            <div className='row'>
              <button type="submit" className="btn btn-primary col-3 offset-1 my-3">Submit</button>
            </div>
          </form>
        </div>
        <div>
          {
            bookObj === null ? null :
              <div className='card card-body m-3'>
                <div id='cardTitle'>
                  {/* <div className='card-body'> */}
                  <h4> Book Details :</h4>
                  <ul className='textSize'>
                    <li>BookId : {bookObj.bookId}</li>
                    <li>Title : {bookObj.title}</li>
                    <li>Authors : &nbsp;
                      {
                        bookObj.authors.map(item => item.name + ",")
                      }.
                    </li>
                    <li>Quantity : {bookObj.quantity}</li>
                      
                  </ul>
                </div>
              </div>
            // </div>
          }
        </div>
      </div>
    </div>
  )
}

export default SearchBook;
