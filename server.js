import express from 'express'
import router from './Routes/routes.product.js'
import bodyParser from 'body-parser'
import { connectDB } from './Config/db.js'
import 'dotenv/config'

const app = express()
connectDB();

// body parser middleware
app.use(bodyParser.json())

// route mouting
app.use('/',router)

// global error handler
app.use((err,req,res,next)=>{
    res.json({
        message:err
    })
})

app.listen(process.env.PORT,()=>{
    console.log(`Server is running at port ${process.env.PORT}`);
})