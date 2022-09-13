import { useContext } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../App"

export const Navbar = () => {
  const ctx: any = useContext(UserContext)
  console.log(ctx)
  const linksLoggedOut = [
      'Create Account',
      'Login',
      'Deposit',
      'Withdraw',
      'Balance',
      'All Data'
    ]

  const linksLoggedIn = [
      'Deposit',
      'Withdraw',
      'Balance',
      'All Data'
    ]

    const loggedIn = () => {
      return (
        linksLoggedIn.map(link => <Link className='link' key={link.replace(' ', '').toLowerCase()} to={`./${link.replace(' ', '').toLowerCase()}`}>{link}</Link>)
      )
    }

    const loggedOut = () => {
      return (
        linksLoggedOut.map(link => <Link className='link' key={link.replace(' ', '').toLowerCase()} to={`./${link.replace(' ', '').toLowerCase()}`}>{link}</Link>)
      )
    }

  return (

    <nav className='navbar bg-primary d-flex m-0'>
      <div className='logo'>
        <Link to="./" className='text-light logo-text text-decoration-none'>BaddestBank</Link>
      </div>
      <>
      {
        ctx.state.activeUser ? loggedIn : loggedOut
      }
      </>
    </nav>
  )
}