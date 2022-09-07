import { Link } from "react-router-dom"
import { MainPageCard } from "../components/MainPageCard"

export const Home = () => {

  return (
    <MainPageCard
      title='Welcome to Baddest Bank'
      subtitle='Safety is your #1 concern!'
      content={
        <div className="homepage-container">
          <div className="home-controls">
            <Link to='./login'><button className="btn btn-success">Login</button></Link>
            <span className="me-2 ms-2">OR</span>
            <Link to='./createaccount'><button className="btn btn-outline-success">Create A New Account</button></Link>
          </div>
        </div>
    }/>
  )
}