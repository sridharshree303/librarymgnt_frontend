import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StudentLoansByID = () => {

  const [student, setStudent] = useState({
    studentId: 0,
  });

  const [list, setList] = useState([]);

  const [students, setStudents] = useState([]);

  const changeHandler = (event) => {
    setStudent({
      ...student,
      [event.target.name]: event.target.value,
    });
  }


  const submitHandler = (event) => {
    event.preventDefault();
    axios.get(`http://localhost:8082/student/books/${student.studentId}`).then(
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
    axios.get(`http://localhost:8082/student/list`).then(
      response => {
        setStudents(response.data);
      }
    ).catch(
      error => console.log(error)
    )

  }, [])

  return (
    <div>
      <div className='card' id='cardTitle'>
        <div className='card-body'>
          <h1 className='display-6 card-title'> Books loan's by Student :</h1>
          <hr />
        </div>

        <div className='card-body'>
          <form className='row' onSubmit={submitHandler}>
            <div className="col-3 searchLid offset-1 mb-3">
              <label htmlFor="studentId" className="form-label">Choose Student :</label>
              <select className="form-select"
                aria-label="select student label"
                id="studentId"
                name="studentId"
                value={student.studentId}
                onChange={changeHandler}
                aria-describedby="studentHelp">
                <option defaultValue> Select Student</option>
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
                        <th scope="col">BookID</th>
                        <th scope="col">Title</th>
                        <th scope="col">Authors</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        list.map((book, index) => {
                          return (
                            <tr key={index}>
                              <th scope="row">{index + 1}</th>
                              <td>{book.bookId}</td>
                              <td>{book.title}</td>
                              <td>{book.authors.map(item => item.name + ",")}.</td>
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

export default StudentLoansByID
