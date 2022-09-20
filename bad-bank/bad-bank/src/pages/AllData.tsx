import { useContext } from "react"
import { UserContext } from "../App"
import { MainPageCard } from "../components/MainPageCard"


export const AllData = () => {
  const { state }: any = useContext(UserContext)
  const { users, activeUser } = state
  
  const userTransactions = (user: any) => {
    return (
      <div className="d-flex flex-column-reverse gap-2">
        {
          user.transactions.map((line: any, index: number) => {
            return (
              <div key={index} className="d-flex w-100 justify-content-between">
                <span style={{flex:'1', textAlign:'center'}}>
                  {line.date}
                </span>
                <span style={{flex:'3', textAlign:'center'}}>
                  {line.message}
                </span>
                <span style={{flex:'1', textAlign:'center'}}>
                  $ <i>{line.runningBalance.toFixed(2)}</i>
                </span>
              </div>
            )
          })
        }
        <div className="d-flex w-100 justify-content-between gap-2">
          <span className='table-head' style={{flex:'1'}}>Date</span>
          <span className='table-head' style={{flex:'3'}}>Action</span>
          <span className='table-head' style={{flex:'1'}}>Balance</span>
        </div>
        <h5 className="text-danger">User <span className="text-primary">{'>>>'}</span> {user.name}</h5>
      </div>
    )
  }

  return (
    <MainPageCard
      title='Transaction Report'
      subtitle={`Showing all transaction history for "${activeUser.name}"`}
      content={
        <div className="d-flex flex-column-reverse gap-4 w-100 p-3">
          {
            users.map((user: any) => userTransactions(user))
          }
        </div>
      }
    />
  )
}