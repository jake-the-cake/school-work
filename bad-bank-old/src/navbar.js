const Navbar = () => {
  return (
    <nav className='navbar bg-primary d-flex m-0'>
      <div className='logo'>
        <a href="./" className='text-light logo-text'>Baddest Bank</a>
      </div>
      <a href="./createaccount">Create Account</a>
      <a href="./login">Login</a>
      <a href="./deposit">Deposit</a>
      <a href="./withdraw">Withdraw</a>
      <a href="./balance">Balance</a>
      <a href="./alldata">All Data</a>
    </nav>
  )
}