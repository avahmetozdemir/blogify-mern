import mongoose from "mongoose";


const postSchema = new mongoose.Schema({
    username : {
        type:String,
        required:true
    },
    title: {
        type: String,
        required:true
    },
    subtitle: {
        type: String,
        required: true
    },
    section: {
        type:String,
        required: true,
        enum: {
            values: ['cultural', 'tech', 'programming', 'psychology']
        }
    },
    text: {
        type:String,
        maxlength: [1000, 'Blog text must have less or equal then 1000 characters'],
        minlength: [10, 'Blog text must have more or equal then 10 characters']
    },
    image: {
        type: String,
        default: 'https://images.pexels.com/photos/459653/pexels-photo-459653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
},{timestamps:true})

const Post = mongoose.model('Post', postSchema)

export default Post