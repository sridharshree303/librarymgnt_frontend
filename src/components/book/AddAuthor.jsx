import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AddAuthor = () => {
  const [list, setList] = useState([]);

  const [author, setAuthor] = useState({
    name: "",
    id: 0
  })

  const changeHandler = (event) => {
    setAuthor({
      ...author,
      [event.target.name]: event.target.value,
    });
  }

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(author)
    axios.post("http://localhost:8082/author/save", author).then(
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
    axios.get(`http://localhost:8082/author/list`).then(
      response => {
        setList(response.data);
      }
    ).catch(
      error => console.log(error)
    )
  }, [])

  return (
    <div>
      {/* ----------- add author ------------- */}
      <div className='card' id='cardTitle'>
        <div className='card-body'>
          <h1 className='display-6 card-title'>Add Author Info </h1>
          <hr />
        </div>

        <div className='card-body'>
          <form className='row g-3' onSubmit={submitHandler}>
            <div className=" textBox col-4 mb-3">
              <label htmlFor="name" className="form-label">Enter Author Name :</label>
              <input type="text"
                className="form-control"
                id="name"
                name="name"
                value={author.name}
                placeholder='Enter Author Name'
                onChange={changeHandler}
                aria-describedby="authorHelp" />
              <div id="authorHelp" className="form-text">Enter author valid name...</div>
            </div>
            <div className='row'>
              <button type="submit" className="btn btn-primary col-3 offset-1">Submit</button>
            </div>
          </form>

        </div>
      </div>
      {/* ----------- list all authors-------------- */}
      <div className='card' id='cardTitle'>
        <div className='card-body'>
          <h1 className='display-6 card-title'>List all Authors</h1>
          <hr />
        </div> 

        <div className='card-body'>
          <table className="table table-hover ">
            <thead >
              <tr>
                <th scope="col">#</th>
                <th scope="col">Author ID</th>
                <th scope="col">Author Name</th>
              </tr>
            </thead>
            <tbody>
              {
                list.map((author, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{author.id}</td>
                      <td>{author.name}</td>
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

export default AddAuthor;
