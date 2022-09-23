import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../App'

interface TransactionFormProps {
  type: string,
  verb?: string
}

export const TransactionForm = ({ type, verb }: TransactionFormProps) => {
  const { state }: any = useContext(UserContext)
  const { activeUser } = state
  const [depositAmount, setDepositAmount] = useState('')
  const [isEmpty, setIsEmpty] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')
  const [warningMessage, setWarningMessage] = useState('')

    useEffect(() => {
    if (depositAmount === '') {
      setIsEmpty(true)
      setErrorMessage('')
      setWarningMessage('')
    }
    else if (Number(depositAmount) < 0) {
      setIsEmpty(true)
      setErrorMessage('Negative amounts are not allowed')
    }
    else {
      setIsEmpty(false)
      depositAmount.replace('.', '').split('').forEach((character: string) => {
        if (Number(character) * 0 !== 0) {
          setErrorMessage('You can only enter numbers.')
          setIsEmpty(true)
        }
        else {
          if ( type === 'Withdraw'  && depositAmount > activeUser.balance) {
            setWarningMessage('This transaction will result in a $5 overdraft fee.')
          }
          else {
            setWarningMessage('')
          }
          setErrorMessage('')
        }
      })
    }
  },[depositAmount, activeUser.balance, type])


  const navigate = useNavigate()

  const handleTransaction: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    const readableTimestamp = new Date(Date.now()).toLocaleDateString()
    const value = Number(((event.target as HTMLFormElement).children[1] as HTMLInputElement).value)
    switch (type) {
      case 'Deposit':
        activeUser.balance += value
        break
      case 'Withdraw':
        activeUser.balance -= value
        break
        default:
          console.log('IDK WHAT HAPPENED! -- TransactionForm.tsx @ handleTransaction')
    }
    activeUser.transactions.push({
      date: readableTimestamp,
      message: `${ verb ? verb : type } in the amount of $${value.toFixed(2)}`,
      runningBalance: activeUser.balance
    })
    if (warningMessage !== '') {
      activeUser.balance -= 5
      activeUser.transactions.push({
      date: readableTimestamp,
      message: `$5 Overdraft Charge.`,
      runningBalance: activeUser.balance
    })
    }
    navigate('./success', {replace: true})
  }
  
  return (
    <form className='form-group d-flex flex-column p-3'style={{gap:'1rem'}}  action="/" onSubmit={handleTransaction}>
      <label htmlFor='name'>{ type } Amount</label>
      <input className="form-control" placeholder={`Enter ${ type } Amount`} name='name' type="text" onChange={( event ) => {
        setDepositAmount(event.target.value)
      }}/>
      <span className="error">{ errorMessage }</span>
      { warningMessage && <span className="warning">{ warningMessage }</span> }
      <button className="btn btn-primary m-auto" disabled={isEmpty}>{ warningMessage ? 'Withdraw And Accept Fee' : type }</button>
    </form>
  )
}