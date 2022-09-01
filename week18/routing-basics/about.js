const About = () => {
  const ctx = React.useContext(UserContext)
  ctx.pages++
  return (
    <div>
      <h1>About</h1>
      {ctx.pages}
    </div>
  )
}