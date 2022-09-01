const Products = () => {
  const ctx = React.useContext(UserContext)
  ctx.pages++
  return (
    <div>
      <h1>Products</h1>
      {ctx.pages}
    </div>
  )
}