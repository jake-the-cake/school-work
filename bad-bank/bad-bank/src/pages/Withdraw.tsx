import { useContext } from "react"
import { UserContext } from "../App"
import { MainPageCard } from "../components/MainPageCard"
import { TransactionForm } from "../components/TransactionForm"

export const Withdraw = () => {
  const { state }: any = useContext(UserContext)
  const { activeUser } = state  

  return (
    <MainPageCard
      title='Withdraw Cash'
      subtitle={`Current balance: $${activeUser.balance.toFixed(2)}`}
      content={
        <TransactionForm type='Withdraw' verb='Withdrawal' />
      }
    />
  )
}