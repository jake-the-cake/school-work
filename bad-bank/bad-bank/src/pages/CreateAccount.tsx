import { Dispatch, SetStateAction, useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../App"
import { MainPageCard } from "../components/MainPageCard"

/*  ::: Validation Station :::  */
const validateUsername = ( value: string ) => {
  if (value.length < 5) return { error: 'Username is too short.'}
  let isValid: boolean = true
  value.split('').forEach((character: string) => {
    if (!/^[a-zA-Z]/.test(character)) isValid = false
  })
  if (isValid) return { data: value }
  else return { error: 'Username can only contain letters.' }
}

const validatePassword = ( value: string ) => {
  if (value.length < 8) return { error: 'Password is too short.'}
  return { error: undefined, data: value }
}

const validateEmail = ( value: string ) => {
  return { error: undefined, data: value }
}


export const CreateAccount = () => {
  const { state }: any = useContext(UserContext)
  const navigation = useNavigate()
  
  const [userValue, setUserValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')
  const [emailValue, setEmailValue] = useState('')
  const [errors, setErrors]: [any[], Dispatch<SetStateAction<(any[])>>] = useState([undefined,undefined,undefined])

  const timestamp = Date.now()
  const readableTimestamp = new Date(timestamp).toLocaleDateString()
  const accountBonus = 50

  const handleCreateAccount = (event: any) => {
    event.preventDefault()

    const [
      validatedUser,
      validatedPassword,
      validatedEmail
    ] = [
      validateUsername(userValue),
      validatePassword(passwordValue),
      validateEmail(emailValue)
    ]

    if (!validatedUser.error && !validatedPassword.error && !validatedEmail.error) {
      state.users.push(
        {
          name: validatedUser.data,
          password: validatedPassword.data,
          email: validatedEmail.data,
          balance: accountBonus,
          transactions: [
            {
              date: readableTimestamp,
              message:`$${ accountBonus } new account bonus applied.`,
              runningBalance: accountBonus
            }
          ]
        }
      )
      navigation('/', {replace: true})
    }
    else {
      setErrors([ validatedUser.error, validatedPassword.error, validatedEmail.error])
    }
  }

  const handleValueChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    callback: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setErrors([undefined, undefined, undefined])
    callback(event.target.value)
  }

  const displayError = ( message: string ) => (
    <div className="error">{ message }</div>
  )

  return (
    <MainPageCard
      title='Create A New Account'
      subtitle="** All fields are required."
      content={      
        <form
          className='form-group d-flex flex-column p-3'
          style={{gap:'1rem'}}
          action="./"
          onSubmit={handleCreateAccount}
        >
          
          <label htmlFor='name'>
            Name
          </label>
          <input
            onChange={(e) => handleValueChange(e, setUserValue)}
            id='username'
            className="form-control"
            placeholder='Enter Name'
            name='name'
            type="text"
          />
          { errors[0] && displayError(errors[0])}
          
          <label htmlFor='password'>
            Password
          </label>
          <input
            onChange={(e) => handleValueChange(e, setPasswordValue)}
            id='password'
            className="form-control"
            placeholder='Enter Password'
            name='password'
            type="password"
          />
          { errors[1] && displayError(errors[1])}
          
          <label htmlFor='email'>
            Email Address
          </label>
          <input
            onChange={(e) => handleValueChange(e, setEmailValue)}
            id='email'
            className="form-control"
            placeholder='Enter email'
            name='email'
            type="text"
          />
          { errors[2] && displayError(errors[2])}
          
          <button className="btn btn-primary m-auto">
            Create
          </button>

        </form>
      }
    />
  )
}