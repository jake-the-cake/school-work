const express = require('express')
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

var restaurants = [{id:0,name:"Woodshill"},{id:1,name:"Fiorellas"}]

const app = express();
app.use(express.json());

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: "Restaurants API",
            version: "1.0.0"
        }
    },
        apis: ["app.js"]
}
/**
 * @swagger
 * /restaurants:
 *  get:
 *      summary: get all restaurants
 *      produces:
 *          application/json
 *  responses:
 *      200: success
 *      description : an array of restaurants
 *      schema:
 *          $ref: "#definitions/restaurant"
 * definitions:
 *  restaurant:
 *      properties:
 *          id:
 *              type: integer
 *          name:
 *              type: string
 * 
 * 
 */


const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
app.get("/restaurants", (req,res)=>{
    res.send(restaurants);
})

/**
 * @swagger
 * /restaurant:
 *  post:
 *      summary: add a restaurant
 *      requestBody:
 *          $ref: '#/components/requestBodies/RestaurantBody'
 *      required:
 *          -id:
 *          -name:
 * responses:
 *          201:
 *              description: created restaurant
 *
 * definitions:
 *  restaurant:
 *      properties:
 *          id:
 *              type: integer
 *          name:
 *              type: string
 * components:
 *  requestBodies:
 *      RestaurantBody:
 *          description: A JSON object of restaurant information
 *          required: true
 *          content:
 *              application/json:
 *              schema:
 *                  $ref: '#/definitions/restaurant'
 *       
 */


app.post("/restaurant",(req,res)=>{
    res.send(`${req.body.name} created`)
})


app.listen(4000,()=>console.log('Listening on 4000'))