import express from 'express'
import router from './Routes/routes.product.js'
import bodyParser from 'body-parser'
import { connectDB } from './Config/db.js'
import 'dotenv/config'
import { error } from './Middleware/error.js'

const app = express()
connectDB();

// body parser middleware
app.use(bodyParser.json())

// route mouting
app.use('/',router)

// global error handler
app.use(error)

app.listen(process.env.PORT,()=>{
    console.log(`Server is running at port ${process.env.PORT}`);
})