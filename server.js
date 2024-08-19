import express from 'express'
import productRouter from './Routes/product.routes.js'
import authRouter from './Routes/auth.routes.js'
import bodyParser from 'body-parser'
import { connectDB } from './Config/db.js'
import 'dotenv/config'
import { error } from './Middleware/error.js'
import cookieParser from 'cookie-parser'

const app = express()
connectDB();

// body parser middleware
app.use(bodyParser.json())
// cookie parser
app.use(cookieParser())
// route mouting
app.use('/',productRouter)
app.use('/',authRouter)

// global error handler
app.use(error)

app.listen(process.env.PORT,()=>{
    console.log(`Server is running at port ${process.env.PORT}`);
})