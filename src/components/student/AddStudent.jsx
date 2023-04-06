import React, { useState } from 'react'

const AddStudent = () => {

  const [student, setStudent] = useState({
    "studentId": 0,
    "sname": ""
  })
  return (
    <div>
      <h2 className='display-3'>Add Student</h2>
      <h2 className='display-3'>List of Students</h2>
    </div>
  )
}

export default AddStudent;
