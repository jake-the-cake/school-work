import { Link } from "react-router-dom"

export const Navbar = () => {
  const links = [
      'Create Account',
      'Login',
      'Deposit',
      'Withdraw',
      'Balance',
      'All Data'
    ]

  return (
    <nav className='navbar bg-primary d-flex m-0'>
      <div className='logo'>
        <Link to="./" className='text-light logo-text text-decoration-none'>BaddestBank</Link>
      </div>
      {
        links.map(link => <Link className='link' key={link.replace(' ', '').toLowerCase()} to={`./${link.replace(' ', '').toLowerCase()}`}>{link}</Link>
        )
      }
    </nav>
  )
}