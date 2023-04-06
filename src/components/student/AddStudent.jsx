import React, { useState ,useEffect} from 'react';
import axios from 'axios';
import './student.css';

const AddStudent = () => {

  const [list, setList] = useState([]);

  const [student, setStudent] = useState({
    "studentId": 0,
    "sname": ""
  })

  const changeHandler = (event) => {
    setStudent({
      ...student,
      [event.target.name]: event.target.value,
    });
  }

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(student)
    axios.post("http://localhost:8082/student/save", student).then(
      response => {
        console.log(response.data);
        alert("sucessfull");
      }
    ).catch(
      error => console.log(error)
    )
  }

  useEffect(() => {
    //librarians
    axios.get(`http://localhost:8082/student/list`).then(
      response => {
        setList(response.data);
      }
    ).catch(
      error => console.log(error)
    )
  }, [])

  return (
    <div>
      {/* ----------- add librarian ------------- */}
      <div className='card' id='cardTitle'>
        <div className='card-body'>
          <h1 className='display-6 card-title'>Add Student Info </h1>
          <hr />
        </div>

        <div className='card-body'>
          <form className='row g-3' onSubmit={submitHandler}>
            <div className=" textBox col-4 mb-3">
              <label htmlFor="name" className="form-label">Enter Student Name :</label>
              <input type="text"
                className="form-control"
                id="name"
                name="name"
                value={student.sname}
                placeholder='Enter Student Name'
                onChange={changeHandler}
                aria-describedby="studentHelp" />
              <div id="studentHelp" className="form-text">Enter student Valid Name...</div>
            </div>
            <div className='row'>
              <button type="submit" className="btn btn-primary col-3 offset-1">Submit</button>
            </div>
          </form>

        </div>
      </div>

      {/* ------------- list all librarians ------------- */}
      <div className='card' id='cardTitle'>
        <div className='card-body'>
          <h1 className='display-6 card-title'>List All Students</h1>
          <hr />
        </div>

        <div className='card-body'>
          <table className="table table-hover  ">
            <thead >
              <tr>
                <th scope="col">#</th>
                <th scope="col">Student ID</th>
                <th scope="col">Student Name</th>
              </tr>
            </thead>
            <tbody>
              {
                list.map((student, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{student.studentId}</td>
                      <td>{student.sname}</td>
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

export default AddStudent;
