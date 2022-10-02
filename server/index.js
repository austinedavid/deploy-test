const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.get('/', (req, res)=>{
    res.json("trying heroku deployment now")
})
const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>console.log("app is running now"))