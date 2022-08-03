const autoFocus = (id) => {
    setTimeout(()=>{
        document.getElementById(id).focus()
    },1000)
}


const Withdraw = ({screen, balance, setBalance}) => {
    autoFocus('withdraw-input')
    const [currentBalance, setCurrentBalance] = React.useState(balance)

    const handleSubmit = (e) => {
        e.preventDefault()
        const newBalance = currentBalance - Number(document.getElementById('withdraw-input').value)
        setBalance(newBalance)
        setCurrentBalance(newBalance)
        screen(<TransactionSummary
            screen={screen}
            balance={newBalance}
            setBalance={setBalance} />)
    }

    return (
        <>
            <div className="balance-check">Current Balance: ${currentBalance}</div>
            <form onSubmit={handleSubmit}>
                <input type="number" id='withdraw-input' />
                <button>Withdraw</button>
            </form>
        </>
    )
}

const Deposit = ({screen, balance, setBalance}) => {
    autoFocus('deposit-input')
    const [currentBalance, setCurrentBalance] = React.useState(balance)

    const handleSubmit = (e) => {
        e.preventDefault()
        const newBalance = currentBalance + Number(document.getElementById('deposit-input').value)
        setBalance(newBalance)
        screen(<MainMenu
            screen={screen}
            balance={newBalance}
            setBalance={setBalance} />)
    }

    return (
        <>
            <div className="balance-check">Current Balance: ${currentBalance}</div>
            <form onSubmit={handleSubmit}>
                <input type="number" id="deposit-input" />
                <button>Deposit</button>
            </form>
        </>
    )
}

const AccountBalance = ({balance, setBalance, screen}) => {
    return (
        <div className="balance-container">
            <div className="balance-check">Balance: ${balance}</div>
            <button>Main Menu</button>
        </div>

    )
}

const TransactionSummary = () => {
    return (
        <div className="summary-container">
            <div className="summary-status">Transaction successful</div>
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
                screen(<><p>Thank you for banking with Jake!</p><button onClick={() => window.location.reload()}>Start Over?</button></>)
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