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
    ctx.users.forEach((user:any) => {
      user.isLoggedIn = false
    })
    ctx.users.push(
      {
        name: nodes[0].value,
        password: nodes[1].value,
        email: nodes[2].value,
        balance: 100,
        isLoggedIn: true
      }
    )
    navigation('/', {replace: true})
    console.log(ctx.users)
  }

  return (
    <MainPageCard
      title='Create A New Account'
      subtitle="** All fields are required."
      content={
        <form className='form-group d-flex flex-column p-3'style={{gap:'1rem'}}  action="./" onSubmit={handleCreateAccount}>
          <input className="form-control" placeholder='name' name='name' type="text" />
          <input className="form-control" placeholder='password' name='password' type="text" />
          <input className="form-control" placeholder='email' name='email' type="text" />
          <button className="btn btn-primary m-auto">Create</button>
        </form>
      }
    />
  )
}