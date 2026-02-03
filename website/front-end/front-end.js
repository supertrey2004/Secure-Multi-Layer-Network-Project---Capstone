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

app.get("/", (req, res) => {
    let model = {username: "", password: "", error:""}
    res.render("login", model);
})

app.get("/register", (req, res) => {
    let model = {username: "", password: "", error:""}
    res.render("login", model);
})

app.get("/home", (req, res) => {
    let model = {username: "", password: "", error:""}
    res.render("login", model);
})

app.get("/addText", (req, res) => {
    let model = {username: "", password: "", error:""}
    res.render("login", model);
})

app.get("/listMe", (req, res) => {
    let model = {username: "", password: "", error:""}
    res.render("login", model);
})

app.get("/edit/:id", (req, res) => {
    let model = {username: "", password: "", error:""}
    res.render("login", model);
})

app.get("/del/:id", (req, res) => {
    let model = {username: "", password: "", error:""}
    res.render("login", model);
})

app.get("/list", (req, res) => {
    let model = {username: "", password: "", error:""}
    res.render("login", model);
})

app.get("/view/:id", (req, res) => {
    let model = {username: "", password: "", error:""}
    res.render("login", model);
})



// listening code
app.listen(port, () => {
    console.log("Express is now listening:" + port)
    console.log("http://localhost:" + port)
})