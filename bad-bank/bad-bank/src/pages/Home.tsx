import { useContext } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../App"
import { MainPageCard } from "../components/MainPageCard"

export const Home = () => {
  const ctx: any = useContext(UserContext)
  const activeUser = ctx.users.filter((user:any) => user.isLoggedIn === true)
  console.log(activeUser[0])
  return (
    <MainPageCard
      title='Welcome to Baddest Bank'
      subtitle='Safety is your #1 concern!'
      content={
        <div className="homepage-container">
          <div className="home-message">
            {
              activeUser[0]
              ? `Welcome ${activeUser[0].name}`
              : 'Let\'s get started'
            }
          </div>
          <div className="home-controls">
            <Link to='./login'><button className="btn btn-success">Login</button></Link>
            <span className="me-2 ms-2">OR</span>
            <Link to='./createaccount'><button className="btn btn-outline-success">Create A New Account</button></Link>
          </div>
        </div>
    }/>
  )
}