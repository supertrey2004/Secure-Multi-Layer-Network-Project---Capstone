require('dotenv').config();

const { dal } = require("./data/mongoDAL")
const bcrypt = require('bcrypt');
const express = require('express');

const app = express();
const port = process.env.PORT;
const saltRounds = parseInt(process.env.SALTROUNDS);
const DBuser = process.env.DBUSER
const DBfile = process.env.DBFILE


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
    }
    res.json(response);
})

app.post("/login", async (req, res) => {
    let code = 0
    let data = {}

    let username = req.body.username
    let password = req.body.password

    let usernameEx = await dal.getDocumentByUser(DBuser, username)
    //console.log(usernameEx, usernameEx[0])

    if (usernameEx[0] && await bcrypt.compare(password, usernameEx[0].password)) {
        code = 1
        data = {id:usernameEx[0]._id, username: usernameEx[0].username}
    }

    let response = {
        code: code,
        data: data
    }
    res.json(response);
})

app.post("/register", async (req, res) => {
    let code = 0

    let username = req.body.username
    let password = req.body.password

    let usernameEx = await dal.getDocumentByUser(DBuser, username)
    //console.log(usernameEx, usernameEx[0])

    if (!usernameEx[0]) {
        let hash = await bcrypt.hash(password, saltRounds)

        let user = {
            username: username,
            password: hash
        }

        //console.log(user)

        await dal.addDocument(DBuser, user)
        code = 1
    }

    let response = {
        code: code
    }
    res.json(response);
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

app.post("/logger", async (req, res) => {
    let code = 0

    let data = req.body.log
    let date = req.body.date

    let log = {
            info: data,
            date: date
        }

        //console.log(user)

        let results = await dal.addDocument("logs", log)
        //console.log(results)
        if (results.acknowledged) {
            code = 1
        }

    let response = {
        code: code
    }
    res.json(response);
})





// listening code
app.listen(port, () => {
    console.log("Express is now listening:" + port)
    console.log("http://localhost:" + port)
})