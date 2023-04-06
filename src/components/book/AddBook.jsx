import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Book.css';

const AddBook = () => {

  const [author, setAuthor] = useState({
    name: "",
    id: 0,
  })

  const [authorsList, setAuthorsList] = useState([]);

  const [book, setBook] = useState({
    bookId: 0,
    title: "",
    authors: [],
    library: {
      lid: 1
    },
    quantity: 0
  })


  const changeHandler = (event) => {
    setBook({
      ...book,
      [event.target.name]: event.target.value,
    });

    setAuthor({
      ...author,
      [event.target.name]: event.target.value,
    })

  }

  const submitHandler = (event) => {
    event.preventDefault();
    book.authors.push(author);
    console.log(book)
    axios.post("http://localhost:8082/book/save", book).then(
      response => {
        console.log(response.data);
        alert("sucessfull");
      }
    ).catch(
      error => console.log(error)
    )
  }

  const [booksList, setBooksList] = useState([]);

  useEffect(() => {

    //authors
    axios.get(`http://localhost:8082/author/list`).then(
      response => {
        setAuthorsList(response.data);
      }
    ).catch(
      error => console.log(error)
    )

    //books list
    axios.get("http://localhost:8082/book/list").then(
      response => {
        setBooksList(response.data);
      }
    ).catch(
      error => {
        console.log(error);
      }
    )


  }, [])
  return (
    <div>
      {/* ----------Add book -------------- */}
      <div className='card' id='cardTitle'>
        <div className='card-body'>
          <h1 className='display-6 card-title'>Add Student Info </h1>
        </div>
      </div>
      <div className='card' id='cardTitle'>
        <div className='card-body'>
          <form className='row g-3' onSubmit={submitHandler}>

            <div className=" col-3  mb-3">
              <label htmlFor="title" className="form-label">Enter Book Title :</label>
              <input type="text"
                className="form-control"
                id="title"
                name="title"
                value={book.title}
                placeholder='Enter Book Name'
                onChange={changeHandler}
                aria-describedby="bookHelp" />
              <div id="bookHelp" className="form-text">Enter Book name </div>
            </div>

            <div className="col-3 offset-1 mb-3">
              <label htmlFor="id" className="form-label">Choose Author :</label>
              <select className="form-select"
                aria-label="select librarian label"
                id="id"
                name="id"
                value={author.id}
                onChange={changeHandler}
                aria-describedby="authorHelp">
                <option defaultValue> Select Author</option>
                {
                  authorsList.map(item => {
                    return (
                      <option key={item.id} value={item.id}>{item.name}</option>
                    )
                  })
                }
              </select>
              <div id="authorHelp" className="form-text">Select author from available in the dropdown</div>
            </div>

            <div className=" col-3 offset-1  mb-3">
              <label htmlFor="quantity" className="form-label">Enter Book Quantity :</label>
              <input type="text"
                className="form-control"
                id="quantity"
                name="quantity"
                value={book.quantity}
                placeholder='Enter Book Name'
                onChange={changeHandler}
                aria-describedby="bookHelp" />
              <div id="bookHelp" className="form-text">Enter Book quantity 1 to 100 </div>
            </div>

            <div className='row'>
              <button type="submit" className="btn btn-primary col-12  ">Submit</button>
            </div>
          </form>
        </div>
      </div>
      {/* ---------- List Books -------------- */}
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
                booksList.map((book, index) => {
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

export default AddBook
