const express     = require('express')
const app         = express()
const mongoose    = require('mongoose')
var cookieParser  = require('cookie-parser')
const cors        = require('cors')
const dotenv      = require('dotenv')
var apiRoute      = require('./routes/api')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(cors())
app.use(express.static(__dirname + '/public'))
dotenv.config();

// Index Route
app.get("/", function (req, res) {
    res.status(200).sendFile("index.html");
}); 

// API ROUTES
app.use('/', apiRoute);

// DB
const url     = process.env.DATABASE_URL;
const connect = mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true }, () => 
    console.log('connected to DB!')
);
mongoose.set('useCreateIndex', true);

app.listen(process.env.PORT, () => {console.log(`The server is now running on Port ${process.env.PORT}`)});

module.exports = app;
