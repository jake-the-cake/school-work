import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <nav className='navbar bg-primary d-flex m-0'>
      <div className='logo'>
        <Link to="./" className='text-light logo-text'>Baddest Bank</Link>
      </div>
      <Link className='link' to="./createaccount">Create Account</Link>
      <Link className='link' to="./login">Login</Link>
      <Link className='link' to="./deposit">Deposit</Link>
      <Link className='link' to="./withdraw">Withdraw</Link>
      <Link className='link' to="./balance">Balance</Link>
      <Link className='link' to="./alldata">All Data</Link>
    </nav>
  )
}