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

app.post("/addText", async (req, res) => {
    let code = 0

    if (req.body.userId != '' && req.body.name != '' && req.body.content != '') {
        let data = {
            userId: req.body.userid,
            name: req.body.name,
            path: req.body.path,
            content: req.body.content,
            date: new Date()
        }

        await dal.addDocument(DBfile,data)
        code = 1
    }
    let response = {
        code: code
    }
    res.json(response);
})


app.post("/listMe", async (req, res) => {
    let dataBody = req.body
    let docs = await dal.getDocumentsByTable(DBfile, {userId: dataBody.userId})
    //console.log(docs)

    let response = {
        code: 1,
        data: docs
    }
    res.json(response);
})


app.post("/edit/:id", async (req, res) => {

    let params = req.params
    let id = params.id
    let docForm = req.body
    const docBase = await dal.getDocumentByID(DBfile, id)
    const doc = docBase[0]
    
    //console.log(id, docForm)

    let updatedDoc = {
        userId: doc.userId,
        name: docForm.name,
        path: docForm.path,
        content: docForm.content,
        date: new Date()
    }

    //console.log(updateddoc)

    await dal.updateDocument(DBfile, id, updatedDoc)

    let response = {
        code: 1
    }

    res.json(response);
})

app.get("/del/:id", async (req, res) => {

    let params = req.params
    let id = params.id

    let response = {
        code: 1
    }

    await dal.deleteDocument(DBfile, id)

    res.json(response);
})

app.get("/list", async (req, res) => {
    let docs = await dal.getAllDocuments(DBfile)
    //console.log(docs)
    let output = []

    for (let index = 0; index < docs.length; index++) {
        const element = docs[index];

        let user = await dal.getDocumentByID(DBuser, element.userId)
        //console.log(user)

        let doc = {
            owner: user[0].username,
            name: element.name,
            path: element.path,
            content: element.content,
        }
        //console.log(doc)
        output.push(doc)
    }

    //console.log(output)

    let response = {
        code: 1,
        data: output
    }
    res.json(response);
})

app.get("/view/:id", async (req, res) => {

    let params = req.params
    let id = params.id

    const docBase = await dal.getDocumentByID(DBfile, id)
    const doc = docBase[0]
    //console.log(doc)

    let response = {
        code: 1,
        doc: doc
    }

    res.json(response);
})

app.post("/logger", async (req, res) => {
    let code = 0

    let data = req.body.log
    let date = new Date()

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