import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
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
      'Create Account',
      'Login',
      'Deposit',
      'Withdraw',
      'Transactions'
    ]

  // function to return navbar links based on login status
  const logFn: ReturnLoginStatusProps = (loginStatus) => {
    const linkArray = loginStatus ? links.slice(2) : links.slice(0,2)
    return (
      linkArray.map(link => <Link className='link' key={link.replace(' ', '').toLowerCase()} to={`./${link.replace(' ', '').toLowerCase()}`}>{link}</Link>)
    )
  }

  const navigate = useNavigate()

  return (
    <nav className='navbar bg-primary d-flex m-0'>
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
  )
}