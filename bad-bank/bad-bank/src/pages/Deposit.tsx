import { useContext } from "react"
import { UserContext } from "../App"
import { MainPageCard } from "../components/MainPageCard"
import { TransactionForm } from "../components/TransactionForm"


export const Deposit = () => {
  const { state }: any = useContext(UserContext)
  const { activeUser } = state

  return (
    <MainPageCard
      title='Deposit Cash'
      subtitle={`Current balance: $${activeUser.balance.toFixed(2)}`}
      content={
        <TransactionForm type='Deposit' />
      }
    />
  )
}