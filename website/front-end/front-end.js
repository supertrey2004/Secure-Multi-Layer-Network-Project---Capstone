require('dotenv').config();

const express = require('express');
const session = require('express-session')
const app = express();
const port = process.env.PORT;
const api = process.env.API_LINK;

// app
app.use(express.static("public"))
app.set("view engine", "ejs")

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(session({
    secret: process.env.SESSION_SECRET,
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

app.post("/login", async (req, res) => {
    let url = api + "login"
    let model = {username: req.body.username, password: req.body.password, error:""};
    //model['username']
    //model['password']
    //model['error']

    if ((model['username'] != '' && model['password'] != '')) {
        let data = {
            username: model['username'],
            password: model['password']
        }

        let headers = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        }

        await fetch(url, headers)
            .then(resp => resp.json())
            .then(data => {
                //console.log(data)
                if (data.code == 0) {
                    model['error'] = "Username or password are wrong"
                } else {
                    req.session.username = data.data.username
                    req.session.userid = data.data.id
                    //console.log(req.session)
                }
            })
    } else{
        model['error'] = "Please fill in all fields"
    }
    //console.log(model)
    if (model['error'] == '') {
        res.redirect("/home");
    } else {
        res.render("login", model)
    }
}) 

app.get("/register", (req, res) => {
    let model = {username: "", password: "", password_again: "", error:""}
    res.render("register", model);
})

app.post("/register", async (req, res) => {
    let url = api + "register"
    let model = {username: req.body.username, password: req.body.password, password_again: req.body.password_again, error:""}
    //model['username']
    //model['password']
    //model['password_again']
    //model['error']

    if ((model['username'] != '' && model['password'] != '' && model['password'] == model['password_again'])) {
        let data = {
            username: model['username'],
            password: model['password']
        }

        let headers = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        }

        await fetch(url, headers)
            .then(resp => resp.json())
            .then(data => {
                //console.log(data.code == 0)
                if (data.code == 0) {
                    model['error'] = "Username already in use"
                }
            })
    } else{
        model['error'] = "Please fill in all fields and match passwords"
    }
    //console.log(model)
    if (model['error'] == '') {
        logger(model)
        res.redirect("/");
    } else {
        res.render("register", model)
    }
})

app.get("/home", (req, res) => {
    logger(req.session)
    //console.log("HOME", req.session)
    let model = {username: req.session.username}
    res.render("home", model);
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

//functions

function logger(log) {
    let url = api + "logger"

    let logData = {
        log: log, 
        date: new Date()
    }

    let headers = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(logData),
    }

    fetch(url, headers)
        .then(resp => resp.json())
        .then(data => {
            if (data.code == 0) {
                console.log("Log error")
                console.log("LOG: ", logData)
            }
        })
}