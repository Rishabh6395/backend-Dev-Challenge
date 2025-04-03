// REST API in Node.js & Express that serves a list of users.

import express from 'express'

const app = express()
app.use(express.json())

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is listing at: ${PORT}`)
})


app.get("/status",(req, res) => {
    const status = {
        "status" : "Running"
    }

    res.send(status)
})

// app.post("/users", (req, res) => {
//     const users = {
//         "users": [
//             {
//                 "id": 1,
//                 "name": "Leanne Graham",
//                 "username": "Bret",
//                 "email": "z6q8t@example.com",
//                 "address": {
//                     "street": "Kulas Light"
//                 }
//             },
//             {
//                 "id": 2,
//                 "name": "Ervin Howell",
//                 "username": "Antonette",
//                 "email": "8V2yK@example.com",
//                 "address": {
//                     "street": "Victor Plains"
//                 }
//             }
//         ]
//     }
//     res.json(users)
// })

// 2nd method: 

app.post("/users", (req, res) => {
    const user = req.body;
    res.json({message: "user created successfully", user})
})

