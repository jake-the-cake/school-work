import { useContext, useState } from "react"
import { UserContext } from "../App"
import { MainPageCard } from "../components/MainPageCard"
import { TransactionForm } from "../components/TransactionForm"

export const Withdraw = () => {
  const { state }: any = useContext(UserContext)
  const { activeUser } = state
  
  const [depositAmount, setDepositAmount] = useState('')
  const [isEmpty, setIsEmpty] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  
  // const handleWithdraw: React.FormEventHandler<HTMLFormElement> = (event) => {
  //   event.preventDefault()
  //   const readableTimestamp = new Date(Date.now()).toLocaleDateString()
  //   const value = Number(((event.target as HTMLFormElement).children[1] as HTMLInputElement).value)
  //   activeUser.balance -= value
  //   activeUser.transactions.push({
  //     date: readableTimestamp,
  //     message: `Withdrawal in the amount of $${value.toFixed(2)}`,
  //     runningBalance: activeUser.balance
  //   })
  //   navigate('./success', {replace: true})
  // }

  return (
    <MainPageCard
      title='Withdraw Cash'
      subtitle={`Current balance: $${activeUser.balance.toFixed(2)}`}
      content={
        <TransactionForm type='Withdraw' verb='Withdrawal' setDepositAmount={setDepositAmount} isEmpty={isEmpty} errorMessage={errorMessage} />
      }
    />
  )
}