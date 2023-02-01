const dotenv = require('dotenv');
dotenv.config()
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const { connectDB } = require('./src/db');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./src/graphql/schema');
const { authenticate } = require('./src/middleware/auth');
const cookieParser = require('cookie-parser');
//execute the connectDB function to our database
connectDB();

// Basic Middleware
const myLogger = function(req, res, next){
    // console.log('MyLogger Middleware')
    console.log(req.path);
    next()
}

app.use(myLogger);

//Add cookie parser middleware BEFORE the authenticate
app.use(cookieParser());

// Add authentication middleware to the app
app.use(authenticate);

// Add graphql middleware to app
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))


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

