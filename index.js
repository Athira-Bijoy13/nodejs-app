const express=require('express')
const cors = require('cors');
const userRouter = require('./routes/user');

const app=express()
const port=8000
require('./db/mongoose')
app.use(cors())
app.use(express.json())
app.use('/api/user',userRouter)

app.listen(port,async()=>{
    console.log("Running on port "+ port)
})