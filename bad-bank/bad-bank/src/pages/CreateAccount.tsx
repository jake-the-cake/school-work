import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../App"
import { MainPageCard } from "../components/MainPageCard"


export const CreateAccount = () => {
  const ctx: any = useContext(UserContext)
  const navigation = useNavigate()
  
  const handleCreateAccount = (event: any) => {
    event.preventDefault()
    const nodes = event.target.childNodes
    ctx.state.users.forEach((user:any) => {
      user.isLoggedIn = false
    })
    ctx.state.users.push(
      {
        name: nodes[1].value,
        password: nodes[3].value,
        email: nodes[5].value,
        balance: 100,
        isLoggedIn: true
      }
    )
    navigation('/', {replace: true})
  }

  return (
    <MainPageCard
      title='Create A New Account'
      subtitle="** All fields are required."
      content={
        <form className='form-group d-flex flex-column p-3'style={{gap:'1rem'}}  action="./" onSubmit={handleCreateAccount}>
          <label htmlFor='name'>Name</label>
          <input className="form-control" placeholder='Enter Name' name='name' type="text" />
          <label htmlFor='password'>Password</label>
          <input className="form-control" placeholder='Enter Password' name='password' type="text" />
          <label htmlFor='email'>Email Address</label>
          <input className="form-control" placeholder='Enter email' name='email' type="text" />
          <button className="btn btn-primary m-auto">Create</button>
        </form>
      }
    />
  )
}