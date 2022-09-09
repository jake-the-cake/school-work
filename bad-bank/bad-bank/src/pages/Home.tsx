import { useContext } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../App"
import { MainPageCard } from "../components/MainPageCard"

export const Home = () => {
  const ctx: any = useContext(UserContext)
  const activeUser = ctx.users.filter((user:any) => user.isLoggedIn === true)
  console.log(ctx)
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
          <div className="home-controls flex-column">
            {
              activeUser[0]
              ? (<>
                <div className="card m-auto trans-card" style={{minWidth:'70%'}}>
                  <div className="card-header bg-success text-light">
                    Account Overview
                  </div>
                  <div className="card-body text-center">
                    <p className="card-text">Current balance is ${activeUser[0].balance}</p>
                    <p className="card-text">Member since 2022</p>
                    <div className="d-flex gap-3">
                      <Link to="./deposit" className="btn btn-primary">Make Deposit</Link>
                      <Link to='./withdraw' className="btn btn-primary">Withdraw Money</Link>
                    </div>
                    <Link to='./alldata' className="mt-3 btn btn-primary" style={{width:'100%'}}>Transaction History</Link>
                  </div>
                </div>
                  <div className="d-flex gap-3">
                    <Link to="./logout" className="btn btn-warning">Log Out</Link>
                    <Link to="./deleteaccount" className="btn btn-danger">Delete Account</Link>
                  </div>
              </>)
              : (<div className="d-flex gap-3 align-items-center">
                <Link to='./login'><button className="btn btn-success">Login</button></Link>
                <span>OR</span>
                <Link to='./createaccount'><button className="btn btn-outline-success">Create A New Account</button></Link>
              </div>)
            }
          </div>
        </div>
    }/>
  )
}