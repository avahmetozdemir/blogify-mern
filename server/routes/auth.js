import express from 'express'
import User from '../models/User.js'
import bcrypt from 'bcrypt'
const router = express.Router()



//REGISTER
router.post('/register',async(req,res)=> {
    try {
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password : hashedPassword
        })
        
        const savedUser = await newUser.save()
        res.status(201).json({
            status: 'success',
            data: {
                savedUser
            }
        })
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        })
    }
})

//LOGIN
router.post('/login',async(req,res)=> {
    try {
        
        const user = await User.findOne({username : req.body.username})

        const validatedPass = await bcrypt.compare(req.body.password, user.password)
        !user || !validatedPass && res.status(400).json('Wrong credentials')
        
    const {password, ...others} = user._doc        
    user && validatedPass && res.status(201).json({
            status: 'success',
            data: {
               ...others
            }
        })
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        })
    }
})




export default router