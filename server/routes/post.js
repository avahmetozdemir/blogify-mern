import express from 'express'
import Post from '../models/Post.js'

const router = express.Router()



//CREATE POST
router.post('/',async(req,res)=> {
    const newPost = new Post(req.body)
    try {
        const savedPost =  await newPost.save()
        res.status(201).json({
            status: 'success',
            data: {
                savedPost
            }
        })
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        })
    }
})


//GET ALL POSTS
router.get('/',async(req,res)=> {
    const qNew = req.query.new
    try {
        let posts;
        try {
            if(qNew) {
                posts= await Post.find().sort({createdAt:- 1 }).limit(1)
            }else {
             posts =  await Post.find({})

            }
        
        res.status(200).json({
            status: 'success',
            data: {
                posts
            }
        })
            
        } catch (error) {
            
        }


        
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        })
    }
})

//GET SINGLE POST
router.get('/:id',async(req,res)=> {
    try {
        const post =  await Post.findById(req.params.id)
        res.status(200).json({
            status: 'success',
            data: {
                post
            }
        })
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        })
    }
})


//UPDATE POST
router.put('/:id',async(req,res)=> {
    try {
        const updatedPost =  await Post.findByIdAndUpdate(req.params.id, {
            $set:req.body
        },{new:true})
        res.status(200).json({
            status: 'success',
            data: {
                updatedPost
            }
        })
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        })
    }
})

router.delete('/:id',async(req,res)=> {
    try {
        const post = await Post.findById(req.params.id)

        if(post.username === req.body.username) {
            try {
                await post.delete()
                res.status(200).json({
                    status: 'success',
                    message:'Post has been deleted'
                })
            } catch (error) {
                res.status(500).json({
                    status: 'error',
                    message: error.message
                })
            }
        }else {
            res.status(401).json('You only delete your posts')
        }
        // res.status(200).json({
        //     status: 'success',
        //     message:'Post has been deleted'
        // })
        // normalde yukarıda comment kısmında alınan yer var iken Cannot set headers after they are sent to the client hatası alınmaktaydı. bunun fazlalık olduğu görülüp silindi ve sorun çözüldü. 
        
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        })
    }
})


export default router