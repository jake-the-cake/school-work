// no authorization but calls server lowdb.js
// add a post 
//  node lowClient.js http://localhost:3000/posts POST {"title":"my book"}
require('dotenv').config();
const request = require('request-promise');
const btoa = require('btoa');
const {ISSUER, CLIENT_ID, CLIENT_SECRET, SCOPE } = process.env
const [,, uri, method, body] = process.argv
//var uri = "http://localhost:3000/posts";
//var method = "POST";
//var body = {"title":"rising star"}
console.log("Body:"+body);
console.log("uri:"+uri);
if (!uri) {
  console.log('Usage: node client {url} [{method}] [{jsonData}]')
  process.exit(1)
}


const sendAPIRequest = async () => {

  try {
    const response = await request({
      uri,
      method,
      body: body,
      headers: {
        'content-type': 'application/json'
      }
      
    })
    console.log(response)

  } catch (error) {
    console.error(`Error: ${error.message}`)
}
}
sendAPIRequest();
