const express = require('express')

var restaurants = [{id:0,name:"Woodshill"},{id:1,name:"Fiorellas"}]

const app = express();
app.use(express.json());
let options = {
    dotfiles: "ignore",
    redirect:false
}

app.use(express.static('public',options))

app.get("/",(req,res)=>{
let html = "<img src='img/tenor.gif'/>"
let key = "<a href='.secret/key.txt'>secret key </a>"
res.send(html+key)
}
)
app.get("/restaurants", (req,res)=>{
    res.send(restaurants);
})

app.post("/restaurant",(req,res)=>{
    res.send(`${req.body.name} created`)
})


app.listen(4000,()=>console.log('Listening on 4000'))