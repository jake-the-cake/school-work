import { useContext, useEffect, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { UserContext } from "../App"

interface ReturnLoginStatusProps {
  (
    loginStatus: boolean
  ) : JSX.Element[]
}

export const Navbar = () => {
  // import context
  const ctx: any = useContext(UserContext)
  
  // create a list of links for the navbar
  const links = [
    'Login',
    'Create Account',
    'Deposit',
    'Withdraw',
    'Transactions'
  ]

    
    // function to return navbar links based on login status
    const logFn: ReturnLoginStatusProps = (loginStatus) => {
      const linkArray = loginStatus ? links.slice(1) : links.slice(0,2)
      return (
        linkArray.map(link => <Link className='link' key={link.replace(' ', '').toLowerCase()} to={`./${link.replace(' ', '').toLowerCase()}`}>{link}</Link>)
        )
  }
  
  const navigate = useNavigate()
  
  // keep current page link highlighted
  const location = useLocation()
  useEffect(() => {
    Array.from(document.getElementsByClassName('link')).forEach(( link: Element) => {
      if (link.getAttribute('href') === location.pathname) link.classList.add('active') 
      else link.classList.remove('active')
    })
  }, [ location.pathname ])

  // display message under navbar when hovering links
  const [infoMessage, setInfoMessage] = useState('')
  useEffect(() => {
    const info = [
      ['Home', 'Return to the bank home page.'],
      ['All Data', 'View Data for all bank customers.'],
      ['Create Account', 'Create a new account (get a $50 bonus!).'],
      ['Log Out', 'Log out of your account.'],
      ['Login', 'Login to your account.'],
      ['Deposit', 'Deposit funds into your account.'],
      ['Withdraw', 'Withdraw funds from your account.'],
      ['Transactions', 'View all transactions for your account.'],
    ]

    Array.from(document.getElementsByClassName('link')).forEach((link: Element) => {
      link.addEventListener('mouseover', (event) => {
        setInfoMessage(info.filter(i => (event.target as HTMLAnchorElement).innerText === i[0])[0][1] || 'message')
        setTimeout(() => {
          (document.getElementById('info') as HTMLDivElement).style.top = '35px'
        }, 10)
      })
      link.addEventListener('mouseout', () => {
        (document.getElementById('info') as HTMLDivElement).style.top = '15px'
        setTimeout(() => {
          setInfoMessage('')
        }, 300)
      })
    })
  }, [ctx.state.activeUser])

  return (
    <><nav className='navbar bg-primary d-flex m-0 position-relative'>
      <div className='logo'>
        <Link to="./" className='text-light logo-text text-decoration-none'>BaddestBank</Link>
      </div>
      <>
      <Link className="link" to='/'>Home</Link>
      <Link className="link" to='/alldata'>All Data</Link>
      {
        ctx.state.activeUser ? <>{logFn(true)}<div className="link" onClick={()=>{
          ctx.dispatch({type:'failure'})
          navigate('./', {replace: true})
      }}>Log Out</div></> : logFn(false)
      }
      </>
    </nav>
    <div id="info" className="bg-warning text-dark text-bold text-center info">{ infoMessage }</div>
    </>
  )
}