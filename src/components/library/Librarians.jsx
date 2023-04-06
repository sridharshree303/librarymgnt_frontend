import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Library.css';

const Librarians = () => {

  const [list, setList] = useState([]);

  let [librarian,setLibrarian] = useState({
      librarianId: 0,
      name: "",
      library: {
        lid: 1
      }
  }) ; 


  const changeHandler = (event) => {
      setLibrarian({
         ...librarian,
         [event.target.name] :event.target.value,
      });
  }

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(librarian)
    axios.post("http://localhost:8082/librarian/save",librarian).then(
      response =>{ console.log(response.data);
      alert("sucessfull");
      }
    ).catch(
      error => console.log(error)
    )
  }

  useEffect(() => {
    //librarians
    axios.get(`http://localhost:8082/librarian/list`).then(
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
          <h1 className='display-6 card-title'>Add Librarian</h1>
          <hr />
        </div>
        
        <div className='card-body'>
          <form className='row g-3' onSubmit={submitHandler}>
            <div className=" textBox col-4 mb-3">
              <label htmlFor="book" className="form-label">Enter Librarian Name :</label>
              <input type="text"
                className="form-control"
                id="name"
                name="name"
                value={librarian.name}
                placeholder='Enter Librarian Name'
                onChange={changeHandler}
                aria-describedby="bookHelp" />
              <div id="bookHelp" className="form-text">Enter Book name following "librarySix"</div>
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
          <h1 className='display-6 card-title'>List All Librarians</h1>
          <hr />
        </div>
        
        <div className='card-body'>
          <table className="table table-hover  ">
            <thead >
              <tr>
                <th scope="col">#</th>
                <th scope="col">LibrarianID</th>
                <th scope="col">Name</th>
              </tr>
            </thead>
            <tbody>
              {
                list.map((lib, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{lib.librarianId}</td>
                      <td>{lib.name}</td>
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

export default Librarians
