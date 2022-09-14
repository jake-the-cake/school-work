import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../App"
import { MainPageCard } from "../components/MainPageCard"


export const Deposit = () => {
  const { state }: any = useContext(UserContext)
  const { activeUser } = state
  const navigate = useNavigate()
  
  const handleWithdraw: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    const readableTimestamp = new Date(Date.now()).toLocaleDateString()
    const value = Number(((event.target as HTMLFormElement).children[1] as HTMLInputElement).value)
    activeUser.balance += value
    activeUser.transactions.push({
      date: readableTimestamp,
      message: `Deposit in the amount of $${value.toFixed(2)}`,
      runningBalance: activeUser.balance
    })
    navigate('./success', {replace: true})
  }

  return (
    <MainPageCard
      title='Deposit Cash'
      subtitle={`Current balance: $${activeUser.balance.toFixed(2)}`}
      content={
          <form className='form-group d-flex flex-column p-3'style={{gap:'1rem'}}  action="/" onSubmit={handleWithdraw}>
          <label htmlFor='name'>Amount</label>
          <input className="form-control" placeholder='Enter Deposit Amount' name='name' type="text" />
          <button className="btn btn-primary m-auto">Deposit</button>
        </form>
      }
    />
  )
}