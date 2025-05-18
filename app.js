const express = require('express')
const app = express()
const ExpressError = require("./ExpressError")

// app.use((req, res) => {
//     let { query } = req.query
//     console.log(query)
//     console.log("I am Middleware")
//     res.send("Middleware finished")
// })
// app.use((req, res, next) => {
//     console.log("Hi, I'm 1st middleware")
//     next();
// })

// app.use((req, res, next) => {
//     console.log("Hi, I'm 2nd middleware")
//     next();
// })

// app.use("/random", (req, res, next) => {
//     console.log("I am only for random")
//     next()
// })
const checkToken = (req, res, next) => {
    let { token } = req.query;
    if (token === "giveaccess") {
        next();
    }
    throw new ExpressError(401, "ACCESS DENIED!");

}

app.get("/api", checkToken, (req, res) => {
    res.send("Hello, Shivansh!! Data received")
})

//Utility middleware logger - morgan
// app.use((req, res, next) => {
//     req.time = new Date(Date.now()).toString()
//     console.log(req.method, req.hostname, req.path, req.time)
//     next()
// })

app.get("/err", (req, res) => {
    abcd = abcd;
})

app.get("/admin", (req, res) => {
    throw new ExpressError(403, "Access to admin is Forbidden")
})
app.use((err, req, res, next) => {
    let { status = 500, message = "Some Error Occurred" } = err
    res.status(status).send(message)
})

// app.use((req, res) => {
//     res.status(404).send("Page not found")
// })

app.get("/", (req, res) => {
    res.send("Hi, I am root")
})

app.get("/random", (req, res) => {
    res.send("This is a random page")
})

app.listen(8080, () => {
    console.log("Server listening on port 8080")
})