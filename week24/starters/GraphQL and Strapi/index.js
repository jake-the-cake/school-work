var { graphqlHTTP } = require('express-graphql');
var { buildSchema, assertInputType } = require('graphql');
var express = require('express');

// Construct a schema, using GraphQL schema language
var contacts = [
  {
    id:1,
    name: "peter parker",
    age: 21,
    email: "peter@mit.edu",
    courses: [
      { number: "1.00", name: "engr comp" },
      { number: "3.00", name: "intro bio" }
    ]
  },
  {
    id:2,
    name: "bruce wayne",
    age: 32,
    email: "bruce@mit.edu",
    courses: [
      { number: "2.00", name: "intro ME" },
      { number: "3.00", name: "intro MS" }
    ]
  },
  {
    id:3,
    name: "diana prince",
    age: 25,
    email: "diana@mit.edu",
    courses: [
      { number: "2.00", name: "intro arch" },
      { number: "1.00", name: "intro chem" }
    ]
  },
];
var schema = buildSchema(`
type Query{
  contact(id: Int): Contact
  contacts: [Contact]
},
type Contact {
  id: Int
  name: String
  email: String
  age: Int
  courses:[Course]
}
type Course{
  number: String
  name: String
}
input ContactInput{
  name: String
  email: String
  age: Int
}
type DeleteResponse{
  ok: Boolean!
}
type Mutation{
  setContact(input: ContactInput): Contact

  deleteContact(id: Int!): DeleteResponse
  editContact(id: Int!, age: Int!): Contact
}
`);
// The root provides a resolver function for each API endpoint


var root = {
  contact : (arg)=>contacts[arg.id],
  contacts : ()=> contacts,
  setContact : ({input}) => {
    contacts.push({name:input.name,email:input.email,age:input.age})
    return input
  },
  deleteContact : ({id})=>{
    const ok = Boolean(contacts[id])
    let delc = contacts[id];
    contacts = contacts.filter(item => item.id !== id)
    console.log(JSON.stringify(delc)) 
    return {ok}
  },
  editContact: ({id, ...contact}) => {
    if(!contacts[id]) {
      throw new Error("contact doesn't exist")
    }
    contacts[id] = {
    ...contacts[id],...contact
    }
    return contacts[id]
  }
}
var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
var port = 5500
app.listen(5500,()=> console.log('Running Graphql on Port:'+port));