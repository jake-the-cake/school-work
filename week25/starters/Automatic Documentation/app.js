const express = require('express');
const app     = express();
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

// data parser - used to parse post data
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Library API',
            version: '1.0.0'
        }
    },
    apis: ['app.js']
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

/**
* @swagger
* /books:
*   get:
*     description: Get all books
*     responses:
*       200:
*         description: Success
*
*/
app.get('/books', (req,res) => {
    res.send([
        {
            isbn : '9781781100486',
            title: 'Harry Potter and the Sorcerer\'s Stone',
            author: 'J.K. Rowling',
            publisher: 'Scholastic'
        }
    ]);
});

/**
* @swagger
* /book:
*   post:
*     description: Get one book
*     parameters:
*     - name: title
*       description: Book title
*       in: body
*       required: true
*       type: string
*     responses:
*       200:
*         description: Success
*
*/
app.post('/book', (req,res) => {
    const title = req.body.title;
    res.send({ title});
});

app.listen(3000, () => {
    console.log('Running on port 3000');
})