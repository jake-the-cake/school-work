// this is the client with Authorization OTKA
require('dotenv').config();
const request = require('request-promise');
const btoa = require('btoa');
const {ISSUER, CLIENT_ID, CLIENT_SECRET, SCOPE } = process.env
const [,, uri, method, body] = process.argv
//var uri = "http://localhost:3000/posts";
//var method = "POST";
//var body = {"title":"my star"}
console.log(`Issuer: ${ISSUER}`);
console.log("Body:"+JSON.stringify(body));
console.log("uri:"+uri);
if (!uri) {
  console.log('Usage: node client {url} [{method}] [{jsonData}]')
  process.exit(1)
}


const sendAPIRequest = async () => {

  try {
    const token = btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)
    const auth = await request({
      uri: `${ISSUER}/v1/token`,
      json: true,
      method: 'POST',
      headers: {
        authorization: `Basic ${token}`
      },
      form: {
        grant_type: 'client_credentials',
        scope: SCOPE
      }
    })
    console.log("OAuth2 AccessToken: "+JSON.stringify(auth));

    const response = await request({
      uri,
      method,
      body,
      headers: {
        'content-type': 'application/json',
        authorization: `${auth.token_type} ${auth.access_token}`
      }
      
    })

    console.log("OAuth2 Authorized: "+response)

  } catch (error) {
    console.error(`Error: ${error.message}`)
}
}


sendAPIRequest();