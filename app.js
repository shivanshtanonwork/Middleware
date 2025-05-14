const express = require('express')
const app = express()

// app.use((req, res) => {
//     let { query } = req.query
//     console.log(query)
//     console.log("I am Middleware")
//     res.send("Middleware finished")
// })
app.use((req, res, next) => {
    console.log("Hi, I'm 1st middleware")
    next();
})

app.use((req, res, next) => {
    console.log("Hi, I'm 2nd middleware")
    next();
})

app.get("/", (req, res) => {
    res.send("Hi, I am root")
})

app.get("/random", (req, res) => {
    res.send("This is a random page")
})

app.listen(8080, () => {
    console.log("Server listening on port 8080")
})