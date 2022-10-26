This starts with the OKTA example client.js and index.js
However, the database part is a bit obscure so I changed it to
use lowdb database. We can now see the data in the file db.json
The following work together
lowClient.js and lowdb.js (with the authorization commented out)
lowClientAuth.js and lowdb.js with authorization on. 
These can be run in two terminal windows 
Or they can be run in debug mode
.env needs to be populated from OKTA data