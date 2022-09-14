import { useContext } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../App"
import { MainPageCard } from "../components/MainPageCard"

export const Success = ({ type }:any) => {
  const ctx: any = useContext(UserContext)
  return (
    <MainPageCard
      title='Success!'
      subtitle={`Your ${type} has been processed.`}
      content={
        <div className="p-3">
          <div className="home-controls flex-column">
            {
              <>
                <div className="card m-auto" style={{minWidth:'70%'}}>
                  <div className="card-body text-center">
                    <p className="card-text"><b>Your new balance is ${ctx.state.activeUser.balance.toFixed(2)}</b></p>
                    <div className="d-flex gap-3">
                      <Link to="/deposit" className="btn btn-primary">Make Deposit</Link>
                      <Link to='/withdraw' className="btn btn-primary">Withdraw Money</Link>
                    </div>
                    <Link to='/alldata' className="mt-3 btn btn-primary" style={{width:'100%'}}>Transaction History</Link>
                  </div>
                </div>
              </>
            }
          </div>
        </div>
    }/>
  )
}