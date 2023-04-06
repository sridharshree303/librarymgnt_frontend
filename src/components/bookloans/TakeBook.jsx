import React, { useEffect, useState } from 'react'
import Librarians from '../library/Librarians';
import axios from 'axios';

const TakeBook = () => {

  //implementation
  const [students, setStudents] = useState([]);
  const [librarians, setLibrarians] = useState([]);

  const [inputData, setInputData] = useState({
    studentId: 0,
    librarianId: 0,
    bookName: ""
  });

  useEffect(() => {

    //students
    axios.get(`http://localhost:8082/student/list`).then(
      response => {
        setStudents(response.data);
       
      }
    ).catch(
      error => {
        console.log(error);
        
      }
    )

    //librarians
    axios.get(`http://localhost:8082/librarian/list`).then(
      response => {
        setLibrarians(response.data);
      }
    ).catch(
      error => console.log(error)
    )

  }, [])

  const changeHandler = (event) => {
    setInputData({
      ...inputData,
      [event.target.name]: event.target.value
    })
  }

  const submitHandler = (event) => {
    event.preventDefault();
    axios.post(`http://localhost:8082/bookloan/loan/${inputData.bookName}/${inputData.studentId}/${inputData.librarianId}`).then(
      response => {
        console.log(response.data);
      }
    ).catch(
      error => console.log(error)
    )
  }

  return (
    <div>
      <div className='card' id='cardTitle'>
        <div className='card-body'>
          <h1 className='display-6 card-title'>Take Book</h1>
        </div>
      </div>
      <div className='card' id='cardTitle'>
        <div className='card-body'>
          <form className='row g-3' onSubmit={submitHandler}>

            <div className=" col-3  mb-3">
              <label htmlFor="book" className="form-label">Enter Book Title :</label>
              <input type="text"
                className="form-control"
                id="bookName"
                name="bookName"
                value={inputData.bookName}
                placeholder='Enter Book Name'
                onChange={changeHandler}
                aria-describedby="bookHelp" />
              <div id="bookHelp" className="form-text">Enter Book name available in the table</div>
            </div>

            <div className="col-3 offset-1 mb-3">
              <label htmlFor="librarianId" className="form-label">Choose Librarian :</label>
              <select className="form-select"
                aria-label="select librarian label"
                id="librarianId"
                name="librarianId"
                value={inputData.librarianId}
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

            <div className="col-3 offset-1 mb-3">
              <label htmlFor="studentId" className="form-label">Choose Student :</label>
              <select className="form-select"
                aria-label="select student label"
                id="studentId"
                name="studentId"
                value={inputData.studentId}
                onChange={changeHandler}
                aria-describedby="studentHelp">
                <option defaultValue> Select student</option>
                {
                  students.map(item => {
                    return (
                      <option key={item.studentId} value={item.studentId}>{item.sname}</option>
                    )
                  })
                }
              </select>
              <div id="studentHelp" className="form-text">Select student available in the dropdown</div>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>

          </form>
        </div>
      </div>
      <div className='card' id='cardTitle'>
        <div className='card-body'>
              <p>display sucessful message and response data here</p>
        </div>
      </div>
    </div>

  )
}

export default TakeBook
