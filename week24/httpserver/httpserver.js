const http = require('http')

const server = http.createServer(( req, res ) => {
  res.setHeader('Content-Type', 'application/json')

  const postRoutes = [
    '/user',
  ]
  
  const getRoutes = [
    '/',
    '/orders'
  ]

  const basicReqRes = ( req, res ) => {
    let body= ''
    req.on( 'data', ( data ) => {
      body += data
    })
    req.on( 'end', () => {
      let parsed
      try {
        parsed = JSON.parse( body || '{}' )
      }
      catch ( e ) {
        res.statusCode = 400
        res.end(`{
        "error": "CANNOT_PARSE"
      }`)
      }
      res.end( JSON.stringify({
        error: false,
        username: parsed.username || 'no username provided'
      }))
    })
  }

  if ( req.method === 'POST' && req.url === postRoutes.filter(( route ) => route === req.url )[0] ) basicReqRes( req, res )
  else if ( req.method === 'GET' && req.url === getRoutes.filter(( route ) => route === req.url )[0] ) basicReqRes( req, res )
  else {
    res.statusCode = 405;
    res.end(`{
      "error": "METHOD_NOT_ALLOWED"
    }`)
    return
  }


})

server.listen( 3000, () => {
  console.log( 'running on 3000' )
})