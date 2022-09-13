import { useContext } from "react"
import { Link } from "react-router-dom"
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
      'Balance',
      'All Data'
    ]

  // function to return navbar links based on login status
  const logFn: ReturnLoginStatusProps = (loginStatus) => {
    const linkArray = loginStatus ? links.slice(2) : links
    return (
      linkArray.map(link => <Link className='link' key={link.replace(' ', '').toLowerCase()} to={`./${link.replace(' ', '').toLowerCase()}`}>{link}</Link>)
    )
  }

  return (
    <nav className='navbar bg-primary d-flex m-0'>
      <div className='logo'>
        <Link to="./" className='text-light logo-text text-decoration-none'>BaddestBank</Link>
      </div>
      <>
      {
        ctx.state.activeUser ? logFn(true) : logFn(false)
      }
      </>
    </nav>
  )
}