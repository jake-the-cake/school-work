import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { UserContext } from "../App"
import { MainPageCard } from "../components/MainPageCard"

export const AccountCreated = ({ type }:any) => {
  const ctx: any = useContext(UserContext)
  const navigate = useNavigate()
  return (
    <MainPageCard
      title='Success!'
      subtitle={`Your new account has been created, ${ctx.state.activeUser.name}.`}
      content={
        <div className="p-3 homepage-container">
          <div className="home-controls flex-column">
            {
              <>
                <div className="card m-auto" style={{minWidth:'70%'}}>
                  <div className="card-body text-center">
                    <p className="card-text"><b>You've been rewarded with a sign up bonus of ${ctx.state.activeUser.balance.toFixed(0)} !</b></p>
                    <div className="d-flex gap-3 justify-content-center">
                      <Link to="/" className="btn btn-primary">Go To Homepage</Link>
                      <div onClick={()=>{
                        ctx.dispatch({type:'failure'})
                        navigate('/', {replace: true})
                      }} className="btn btn-warning">Log Out</div>
                    </div>
                    <Link to='/createaccount' className="mt-3 btn btn-success">Create Another New Account</Link>
                  </div>
                </div>
              </>
            }
          </div>
        </div>
    }/>
  )
}