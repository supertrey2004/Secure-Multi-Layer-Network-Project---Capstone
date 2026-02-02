const express = require('express');
const session = require('express-session')
const app = express();
const port = 5000;
const api = "http://localhost:5050/";

// app
app.use(express.static("public"))
app.set("view engine", "ejs")

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(session({
    secret: '1234',
    resave: false,
    saveUninitialized: true,
    cookie: { 
        secure: false,
        maxAge: 1000 * 60 * 60
    }
}))

//baseline
// app.get("/", (req, res) => {
    // res.render("");
// })





// listening code
app.listen(port, () => {
    console.log("Express is now listening:" + port)
    console.log("http://localhost:" + port)
})