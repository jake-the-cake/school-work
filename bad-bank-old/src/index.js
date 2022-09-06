const { HashRouter, Routes, Route } = ReactRouterDOM

const App = () => {
  let user = false
  return (
    <>
      <Navbar />
      <HashRouter>
          <Route path="/" component={<AllData />} />
      </HashRouter>
      {user ? <>hi</> : <>bye</>}
      <AllData />
    </>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)