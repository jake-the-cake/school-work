const UserContext = React.createContext(null)

const App = () => {
  console.log('hi')
  const { HashRouter, Link, Route } = ReactRouterDOM
  return (
    <HashRouter>
      <div className='inner-container'>
        <h1>Routing</h1>
        <div className="links">
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/products'>Products</Link>
        </div>
        <hr />
        <div className="content">
          <UserContext.Provider value={{users:['peter'],pages:0}} >
            <Route path="/" exact component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/products" component={Products}/>
          </UserContext.Provider>
        </div>
      </div>
    </HashRouter>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))