const Home = () => {
  const ctx = React.useContext(UserContext)
  ctx.pages++
  return (
    <div>
      <h1>Home </h1>
      {ctx.pages}
      Hello Mr. {ctx.users}
    </div>
  )
}

