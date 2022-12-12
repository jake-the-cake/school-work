const express = require('express');
const app     = express();

// serve static files from public directory
app.use(express.static('public'));

// create user account simulate
function create(name, email, password){
    return new Promise((resolve, reject) => {    
        setTimeout(() => {
            try{
                resolve({
                        name,
                        email,
                        password
                });
            }
            catch(err){
                reject(err);
            }
        }, 2000);    
    })
}

// create user API
app.get('/account/create/:name/:email/:password', function (req, res) {

    create(req.params.name,req.params.email,req.params.password).
        then((user) => {
            console.log(user);
            res.send(user);            
        }).catch((err) => console.log(err));
})
 
// start server
app.listen(3000, function(){
    console.log('Running on port 3000');
});