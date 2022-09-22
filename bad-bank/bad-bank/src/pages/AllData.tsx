import { useContext } from "react"
import { UserContext } from "../App"
import { MainPageCard } from "../components/MainPageCard"


export const AllData = () => {
  const { state }: any = useContext(UserContext)
  const { users } = state
  
  const userTransactions = (user: any, key: number) => {
    return (
      <div key={user.name + key} className="d-flex flex-column-reverse gap-2">
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
        <h5 className="text-danger">
          <span className="text-primary">User: </span>  
          {user.name} 
          <span className="text-primary ms-5">Email: </span> 
          {user.email}
        </h5>
      </div>
    )
  }

  return (
    <MainPageCard
      title='All Account Data'
      content={
        <div className="d-flex flex-column-reverse gap-4 w-100 p-3">
          {
            users.map((user: any, index:number) => userTransactions(user, index))
          }
        </div>
      }
    />
  )
}