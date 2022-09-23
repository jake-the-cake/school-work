import { useContext, useEffect, useState } from "react"
import { UserContext } from "../App"
import { MainPageCard } from "../components/MainPageCard"
import { TransactionForm } from "../components/TransactionForm"


export const Deposit = () => {
  const { state }: any = useContext(UserContext)
  const { activeUser } = state
  const [depositAmount, setDepositAmount] = useState('')
  const [isEmpty, setIsEmpty] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    if (depositAmount === '') {
      setIsEmpty(true)
      setErrorMessage('')
    }
    else if (Number(depositAmount) < 0) {
      setIsEmpty(true)
      setErrorMessage('Negative amounts are not allowed')
    }
    else {
      setIsEmpty(false)
      depositAmount.replace('.', '').split('').forEach((character: string) => {
        console.log(typeof Number(character))
        if (Number(character) * 0 !== 0) {
          setErrorMessage('You can only enter numbers.')
          setIsEmpty(true)
        }
        else {
          setErrorMessage('')
        }
      })
    }
  },[depositAmount])
  
  // const handleTransaction: React.FormEventHandler<HTMLFormElement> = (event) => {
  //   event.preventDefault()
  //   const readableTimestamp = new Date(Date.now()).toLocaleDateString()
  //   const value = Number(((event.target as HTMLFormElement).children[1] as HTMLInputElement).value)
  //   activeUser.balance += value
  //   activeUser.transactions.push({
  //     date: readableTimestamp,
  //     message: `Deposit in the amount of $${value.toFixed(2)}`,
  //     runningBalance: activeUser.balance
  //   })
  //   navigate('./success', {replace: true})
  // }

  return (
    <MainPageCard
      title='Deposit Cash'
      subtitle={`Current balance: $${activeUser.balance.toFixed(2)}`}
      content={
        <TransactionForm type='Deposit' setDepositAmount={setDepositAmount} errorMessage={errorMessage} isEmpty={isEmpty} />
      }
    />
  )
}