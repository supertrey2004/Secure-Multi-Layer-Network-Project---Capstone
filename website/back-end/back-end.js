const { dal } = require("./data/mongoDAL")
const express = require('express');

const app = express();
const port = 5050;


app.use(express.urlencoded({extended: true}))
app.use(express.json())

//baseline
// app.get("/", async (req, res) => {
    // let response = {
        //code: 1,
        //data:
    //}
    // res.json(response);
// })

app.get("/", (req, res) => {
    let response = {
        message: "Welcome to my Capstone api",
        routes: [
            {
                route: "http://localhost:" + port,
                desc: "Home page with help to routes"
            },
        ]
    }
    res.json(response);
})

app.get("/login", (req, res) => {
    let model = {username: "", password: "", error:""}
    res.render("login", model);
})

app.get("/register", (req, res) => {
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