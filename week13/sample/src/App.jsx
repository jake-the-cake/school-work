import React, { useState } from 'react';
import './App.css';
import { useFormik } from 'formik'

function App() {
  const [values, setValues] = useState({
    name: '',
    email:'',
    password:''
  })

  const handleChange = (event) => {
    setValues({...values, [event.target.name]: event.target.value})
    event.preventDefault()
  }

  const handleClick = (event) => {
    event.preventDefault()
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: ''
    },
    onSubmit: values => {
      console.log(values)
    }
  })

  return (
    <div>
      <form className='form' onSubmit={formik.handleSubmit} name="form" id="form">
        <div className='label'>Name</div>
          <input type="text" name="name" id="name" onChange={formik.handleChange} />
        <div className='label'>Email</div>
        <input type="text" name="email" id="email" onChange={formik.handleChange} />
        <div className='label'>Password</div>
        <input type="text" name="password" id="password" onChange={formik.handleChange} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default App;
