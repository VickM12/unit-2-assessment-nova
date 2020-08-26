require('dotenv').config()
///Dependencies/////
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');


///Middleware////
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(methodOverride('_method'));

///Mongoose/////
const mongoURI = process.env.MONGO_URI
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
    console.log("connected to mongo");
})

///Port Listener////
//Heroku Port access///
const PORT = process.env.PORT || 3000;





// listen
app.listen(PORT, () => {
    console.log('listening on: ' + PORT);
});