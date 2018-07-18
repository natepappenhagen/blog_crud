const express        = require('express');
const app            = express();
const bodyParser     = require('body-parser');
const methodOverride = require('method-override');
const session        = require('express-session');
// require db
require('./db/db');

// set Up our session
app.use(session({
  secret: 'this is a random secret string that you make up',
  resave: false, // only save when the session object has been modified
  saveUninitialized: false // useful for login sessions, we only want to to save when we modify
  // session
}));

// Set up middleware
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended: false}));

const userController   = require('./controllers/auth');
const authorsController = require('./controllers/authors');
const articlesController = require('./controllers/articles');

// set up controller routes
app.use('/auth', userController);
app.use('/authors', authorsController);
app.use('/articles', articlesController);

app.get('/', (req, res) => {
  res.render('index.ejs');
});



app.listen(3000, () => {
  console.log('App is listening on port 3000');
});