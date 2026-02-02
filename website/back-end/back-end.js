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









// listening code
app.listen(port, () => {
    console.log("Express is now listening:" + port)
    console.log("http://localhost:" + port)
})