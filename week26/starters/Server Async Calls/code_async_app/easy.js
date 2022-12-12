const express = require('express');
const app     = express();

// serve static files from public directory
app.use(express.static('public'));

// create user account
function create(name, email, password){
    return({
        name,
        email,
        password
    });
}

// create user API
app.get('/account/create/:name/:email/:password', function (req, res) {
    res.send(create(
        req.params.name,
        req.params.email,
        req.params.password
    ));
})
 
// start server
app.listen(3000, function(){
    console.log('Running on port 3000');
});