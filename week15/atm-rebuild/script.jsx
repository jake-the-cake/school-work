const autoFocus = (id) => {
    setTimeout(()=>{
        document.getElementById(id).focus()
    },1000)
}


const Withdraw = ({screen, balance, setBalance}) => {
    autoFocus('withdraw-input')
    const originalBalance  = balance

    const [currentBalance, setCurrentBalance] = React.useState(balance)
    const [error, setError] = React.useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        const newBalance = currentBalance - Number(document.getElementById('withdraw-input').value)
        setBalance(newBalance)
        setCurrentBalance(newBalance)
        screen(<TransactionSummary
            screen={screen}
            balance={newBalance}
            setBalance={setBalance}
            was={originalBalance}
            change={Number(document.getElementById('withdraw-input').value) * -1} />)
    }

    const handleChange = (e) => {
        if (Number(e.target.value > balance)) {
            setError(true)
        }
        else {
            if (error) {
                setError(false)
            }
        }
    }

    return (
        <div>
            <div className="balance-check">Current Balance: ${currentBalance}</div>
            <form onSubmit={handleSubmit}>
                <input type="number" id='withdraw-input' onChange={handleChange}/>
                { error && <div className="error">Insufficient Funds</div> }
                <button disabled={error}>Withdraw</button>
            </form>
        </div>
    )
}

const Deposit = ({screen, balance, setBalance}) => {
    autoFocus('deposit-input')
    const originalBalance  = balance

    const [error, setError] = React.useState(false)
    const [currentBalance, setCurrentBalance] = React.useState(balance)

    const handleSubmit = (e) => {
        e.preventDefault()
        const newBalance = currentBalance + Number(document.getElementById('deposit-input').value)
        setBalance(newBalance)
        setCurrentBalance(newBalance)
        screen(<TransactionSummary
            screen={screen}
            balance={newBalance}
            setBalance={setBalance}
            was={originalBalance}
            change={Number(document.getElementById('deposit-input').value)} />)
    }

    const handleChange = (e) => {
        if (Number(e.target.value) < 0) {
            setError(true)
        }
        else {
            if (error) {
                setError(false)
            }
        }
    }

    return (
        <div>
            <div className="balance-check">Current Balance: ${currentBalance}</div>
            <form onSubmit={handleSubmit}>
                <input type="number" id="deposit-input" onChange={handleChange} />
                { error && <div className="error">Deposits cannot be less than $0</div> }
                <button disabled={error}>Deposit</button>
            </form>
        </div>
    )
}

const AccountBalance = ({balance, setBalance, screen}) => {
    const handleClick = (e) => {
        e.preventDefault()
        screen(<MainMenu
            screen={screen}
            balance={balance}
            setBalance={setBalance} />)
    }
    return (
        <div className="balance-container">
            <div className="summary-detail">Current Balance: ${balance}</div>
            <button onClick={handleClick}>Main Menu</button>
        </div>

    )
}

const TransactionSummary = ({balance, setBalance, screen, change, was}) => {
    return (
        <div className="summary-container">
            <div className="summary-status">Transaction successful</div>
            <div className='summary-detail'>Starting Balance: ${was}</div>
            <div className='summary-detail'>{change < 0 ? `Withdrawal of $${change * -1}` : `Deposit of $${change}`}</div>
            <AccountBalance balance={balance} setBalance={setBalance} screen={screen} />
        </div>
    )
}


const MainMenu = ({screen, balance, setBalance}) => {
    const handleMenuSelection = (e) => {
        switch (e.target.id) {
            case 'withdraw':
                screen(<Withdraw screen={screen} balance={balance} setBalance={setBalance} />)
                break
            case 'deposit':
                screen(<Deposit screen={screen} balance={balance} setBalance={setBalance} />)
                break
            case 'balance':
                screen(<AccountBalance balance={balance} setBalance={setBalance} screen={screen} />)
                break
            default:
                screen(<div><p>Thank you for banking with Jake!</p><button onClick={() => window.location.reload()}>Start Over?</button></div>)
        }
    }

    return (
        <div className='menu'>
            <span className="menu-title">Welcome! Select a function to continue.</span>
            <button className="menu-button" id='withdraw' onClick={handleMenuSelection}>Withdraw</button>
            <button className="menu-button" id='deposit' onClick={handleMenuSelection}>Deposit</button>
            <button className="menu-button" id='balance' onClick={handleMenuSelection}>Check Balance</button>
            <button className="menu-button" onClick={handleMenuSelection}>Exit</button>
        </div>
    )
}


const AtmMachine = () => {    
    const [atmScreen, setAtmScreen] = React.useState(null)
    const [balance, setBalance] = React.useState(0)
    
    React.useEffect(() => {
        setAtmScreen(<MainMenu
            screen={setAtmScreen}
            balance={balance}
            setBalance={setBalance} />)
    }, [])

    return (
        <>{ atmScreen }</>
    )
}

ReactDOM.render(<AtmMachine />, document.getElementById('root'))