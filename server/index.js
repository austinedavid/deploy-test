const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.get('/', (req, res)=>{
    res.json("trying heroku deployment now")
})
app.listen(5000, ()=>console.log("app is running now"))