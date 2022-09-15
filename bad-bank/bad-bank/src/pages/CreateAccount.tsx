import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../App"
import { MainPageCard } from "../components/MainPageCard"


/*  ::: Validation Station :::  */
const validateUsername = ( value: string ) => {
  console.log(`value: ${ value }`)
  return value
}



export const CreateAccount = () => {
  const { state }: any = useContext(UserContext)
  const navigation = useNavigate()
  
  const [userValue, setUserValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')
  const [emailValue, setEmailValue] = useState('')

  const timestamp = Date.now()
  const readableTimestamp = new Date(timestamp).toLocaleDateString()
  const accountBonus = 50

  const handleCreateAccount = (event: any) => {
    event.preventDefault()
    state.users.push(
      {
        name: validateUsername( userValue ),
        password: passwordValue,
        email: emailValue,
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

  const handleValueChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    callback: React.Dispatch<React.SetStateAction<string>>
  ) => {
    callback(event.target.value)
  }

  // console.log({
  //   username: userValue,
  //   password: passwordValue,
  //   email: emailValue
  // })

  return (
    <MainPageCard
      title='Create A New Account'
      subtitle="** All fields are required."
      content={
        <form className='form-group d-flex flex-column p-3'style={{gap:'1rem'}}  action="./" onSubmit={handleCreateAccount}>
          <label htmlFor='name'>Name</label>
          <input onChange={(e) => handleValueChange(e, setUserValue)} id='username' className="form-control" placeholder='Enter Name' name='name' type="text" />
          <label htmlFor='password'>Password</label>
          <input onChange={(e) => handleValueChange(e, setPasswordValue)} id='password' className="form-control" placeholder='Enter Password' name='password' type="text" />
          <label htmlFor='email'>Email Address</label>
          <input onChange={(e) => handleValueChange(e, setEmailValue)} id='email' className="form-control" placeholder='Enter email' name='email' type="text" />
          <button className="btn btn-primary m-auto">Create</button>
        </form>
      }
    />
  )
}