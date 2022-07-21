import React from 'react'
import { useFormik } from 'formik'
import './index.css'

function App() {

  const formik = useFormik(
    {
      initialValues: {
        email: '',
        password: ''
      },
      onSubmit: values => {
        return alert('Login Successful')
      },
      validate: values => {
        const errors = {}
        if (!values.email) errors.email = 'Field required'
        if (!values.password) errors.password = 'Field required'
        if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          errors.email = 'Username should be an email'
        }
        return errors
      }
    }
  )

  return (
    <div className='container'>
      <form onSubmit={formik.handleSubmit}>
        <div className='label'>Email:</div>
        <input type="text" name="email" id="emailField" onChange={formik.handleChange} value={formik.values.email} />
        { formik.errors.email ? <div className='error'>{formik.errors.email}</div>: null}
        <div className='label'>Password:</div>
        <input type="text" id="pswField" name="password" onChange={formik.handleChange} value={formik.values.password} />
        { formik.errors.password ? <div className='error'>{formik.errors.password}</div>: null}
        <div id="emailError"></div>
        <button type='submit'>Submit</button>
        </form>
    </div>
  );
}

export default App;
