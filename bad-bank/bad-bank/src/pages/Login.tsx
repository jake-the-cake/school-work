import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../App"
import { MainPageCard } from "../components/MainPageCard"


export const Login = () => {
  const ctx: any = useContext(UserContext)
  const navigation = useNavigate()
  
  const handleLogin = (event: any) => {
    event.preventDefault()
    const providedUserName = ctx.state.users.filter((user:any) => user.name === event.target.children[1].value)[0]
    if (providedUserName && providedUserName.password === event.target.children[3].value) {
      ctx.state.activeUser = providedUserName
      ctx.dispatch({type: 'success'})
      navigation('/', {replace: true})
    }
    else {
      console.log('no good')
    }
  }

  return (
    <MainPageCard
      title='Login For Access'
      content={
        <form className='form-group d-flex flex-column p-3'style={{gap:'1rem'}}  action="./" onSubmit={handleLogin}>
          <label htmlFor='name'>Name</label>
          <input className="form-control" placeholder='Enter Name' name='name' type="text" />
          <label htmlFor='password'>Password</label>
          <input className="form-control" placeholder='Enter Password' name='password' type="text" />
          <button className="btn btn-primary m-auto">Login</button>
        </form>
      }
    />
  )
}