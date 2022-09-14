import { useContext } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../App"
import { MainPageCard } from "../components/MainPageCard"

export const Home = () => {
  const ctx: any = useContext(UserContext)
  console.log(ctx.state.users)
  return (
    <MainPageCard
      title='Welcome to Baddest Bank'
      subtitle='Safety is your #1 concern!'
      content={
        <div className="homepage-container">
          <div className="home-message">
            {
              ctx.state.activeUser
              ? `Welcome ${ctx.state.activeUser.name}`
              : 'Let\'s get started'
            }
          </div>
          <div className="home-controls flex-column">
            {
              ctx.state.activeUser
              ? (<>
                <div className="card m-auto trans-card" style={{minWidth:'70%'}}>
                  <div className="card-header bg-success text-light">
                    Account Overview
                  </div>
                  <div className="card-body text-center">
                    <p className="card-text">Current balance is ${ctx.state.activeUser.balance.toFixed(2)}</p>
                    <p className="card-text">Member since 2022</p>
                    <div className="d-flex gap-3">
                      <Link to="./deposit" className="btn btn-primary">Make Deposit</Link>
                      <Link to='./withdraw' className="btn btn-primary">Withdraw Money</Link>
                    </div>
                    <Link to='./alldata' className="mt-3 btn btn-primary" style={{width:'100%'}}>Transaction History</Link>
                  </div>
                </div>
                  <div className="d-flex gap-3">
                    <Link to="./" className="btn btn-warning" onClick={() => ctx.dispatch({type:'failure'})}>Log Out</Link>
                    <Link
                      to="./"
                      className="btn btn-danger"
                      onClick={ () => {
                        const { users, activeUser } = ctx.state
                        users.forEach((user: any, index: number) => {
                          if (user.name === activeUser.name) {
                            users.splice(index, 1)
                            ctx.dispatch({type:'failure'})
                          }
                        })
                      }}>Delete Account</Link>
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