# expressgraphql01

Exercise 1 uses either data in index.js
Exercise 2 uses either student data or restaurant data in
restaurants.json

# GraphQL

## here are the query and mutation structures

query getContacts{
contacts{
name
email
}
query getContact($iid: Int = 1){
    contact(id:$id){
name
email
}
}

mutation setContacts{
setContact(input: {
name: "john williams",
email: "jrw@mit.edu",
age:50
}){
name
email
age
}
}

query getContacts{
contacts{
name
email
}
}
mutation deleteContacts($idd: Int = 1){
  deleteContact(id: $idd){
ok
}
}

mutation editContacts($idd: Int = 1, $age: Int = 35){
editContact(id: $idd, age: $age){
name
age
}
}

mutation editrestaurants($idd: Int = 1, $name: String = "OLDO"){
editrestaurant(id: $idd, name: $name){
name
description
}
}
mutation setrestaurants {
setrestaurant(input: {
name: "Granite",
description: "American"}) {
name
description
}
}
mutation deleterestaurants($idd: Int = 1){
  deleterestaurant(id: $idd){
ok
}
}
query getrestaurants {
restaurants {
name
description
dishes{
name
price
}
}
}
query getrestaurant($iid: Int = 1){
    restaurant(id:$iid){
name
description
}
}
