const express = require('express');
const app = express();
const port = 3000;
const path = require('path')


app.set('view engine', 'ejs');
//update location of the folder for the res.render to use
app.set('views', path.join(__dirname, 'src/templates/views'))

//set up middleware to parse form data and add to request body
app.use(express.urlencoded({extended: true }))

app.get('/', (req, res) => {
    res.send('Hello World');
});

//import the function from the routes module
const initRoutes = require('./src/routes');
//execute the function with app as argument
initRoutes(app);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

