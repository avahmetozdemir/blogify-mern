import express from 'express'
import User from '../models/User.js'

const router = express.Router()


//GET ALL USERS
router.get('/',async(req,res)=> {
    try {
        const users =  await User.find({})
        res.status(200).json({
            status: 'success',
            data: {
                users
            }
        })
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        })
    }
})

//GET SINGLE USER
router.get('/:id',async(req,res)=> {
    try {
        const user =  await User.findById(req.params.id)
        res.status(200).json({
            status: 'success',
            data: {
                user
            }
        })
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        })
    }
})



//DELETE USER
router.delete('/:id',async(req,res)=> {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json({
            status: 'success',
            message:'User has been deleted'
        })
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        })
    }
})


export default router