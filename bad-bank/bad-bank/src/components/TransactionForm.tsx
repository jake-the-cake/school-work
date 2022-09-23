import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../App'

interface TransactionFormProps {
  type: string,
  setDepositAmount: React.Dispatch<React.SetStateAction<string>>,
  errorMessage: string,
  isEmpty: boolean,
  verb?: string
}

export const TransactionForm = ({ type, setDepositAmount, errorMessage, isEmpty, verb }: TransactionFormProps) => {
  const { state }: any = useContext(UserContext)
  const { activeUser } = state


  const navigate = useNavigate()

  const handleTransaction: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    const readableTimestamp = new Date(Date.now()).toLocaleDateString()
    const value = Number(((event.target as HTMLFormElement).children[1] as HTMLInputElement).value)
    activeUser.balance += value
    activeUser.transactions.push({
      date: readableTimestamp,
      message: `${ verb ? verb : type } in the amount of $${value.toFixed(2)}`,
      runningBalance: activeUser.balance
    })
    navigate('./success', {replace: true})
  }
  
  return (
    <form className='form-group d-flex flex-column p-3'style={{gap:'1rem'}}  action="/" onSubmit={handleTransaction}>
      <label htmlFor='name'>{ type } Amount</label>
      <input className="form-control" placeholder={`Enter ${ type } Amount`} name='name' type="text" onChange={( event ) => {
        setDepositAmount(event.target.value)
      }}/>
      <span className="error">{ errorMessage }</span>
      <button className="btn btn-primary m-auto" disabled={isEmpty}>{ type }</button>
    </form>
  )
}