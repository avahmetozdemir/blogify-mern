import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import postRoute from './routes/post.js'
import userRoute from './routes/user.js'
import authRoute from './routes/auth.js'
import cors from 'cors'
dotenv.config()
const app = express()
const port = process.env.PORT || 6000
const DB = process.env.DATABASE


//middlewares
app.use(cors())
app.use(express.json())
app.use('/api/v1/posts', postRoute)
app.use('/api/v1/users', userRoute)
app.use('/api/v1/auth', authRoute)


app.use(cors())

//connect DB
mongoose.connect(DB).then(()=> {
    console.log('DB Connection is successfull');
})





//listening
app.listen(port,()=> {
    console.log(`Server is listening on port ${port}`);
})