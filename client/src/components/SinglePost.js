import axios from 'axios';
import React, { useEffect, useState,useRef } from 'react'
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import  {FiEdit} from 'react-icons/fi'
import  {RiDeleteBin7Line} from 'react-icons/ri'
import { useGlobalContext } from '../context';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import NativeSelect from '@mui/material/NativeSelect';
import TextField from '@mui/material/TextField';
const Container = styled.div`
  height: 70vh;
  background-color: #fcf5f5;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Image= styled.img`
flex: 1;
width: 500px;
height: 300px;
margin-right: 10px;
object-fit: contain;


`
const Category = styled.h4`
font-size: 30px;
margin: 0
margin-bottom: 5px;
`

const Article = styled.div`
flex : 2;
padding:15px;
text-align:justify;
`

const Title = styled.h2`
font-size: 40px;
margin-bottom: 5px;
`

const Text = styled.article`
  font-size : 25px;
`
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 5,
      height: 480,
  };

function SinglePost() {
    const {user} = useGlobalContext()
    const [post,setPost] = useState([])


    

    const location = useLocation()
    const postId = location.pathname.split('/')[2]

    useEffect(()=> {
        const fetchSinglePost = async()=> {
            const res =  await axios.get(`http://localhost:5500/api/v1/posts/${postId}`)
            const data = await res.data
            const post = await data.data.post
            setPost(post)
        }
        fetchSinglePost()
    }, [postId])

    const handleDelete = async()=> {
        try {
            await axios.delete(`http://localhost:5500/api/v1/posts/${post._id}`, {data: {username: user.data.username}})
            window.location.replace('/')
        } catch (error) {
            
        }


    }
    //update
    const titleRef = useRef()
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false)
     const [title, setTitle] = useState(``);
    const [subtitle, setSubtitle] = useState("");
    const [section, setSection] = useState("");
    const [text,setText] = useState("")
    const [imgUrl,setImgUrl] = useState("")

    
    const handleUpdate= async()=> {
        const res  = await axios.put(`http://localhost:5500/api/v1/posts/${post._id}`, {
            title,
            subtitle,
            section,
            text,
            imgUrl 
        })
    }


    return (
    <Container>
        <Image src={post.image}/>
        <Article>
        <Title>{post.title}<span style={{fontSize:'15px', marginLeft:'5px', marginRight:'5px'}}>{post.section}</span>{user && user.data.username === post.username && <><RiDeleteBin7Line color ='red' size={20} onClick={handleDelete}/> <FiEdit onClick={handleOpen} color='green' size={20}/></>} </Title>
        <Category>{post.subtitle} <span style={{fontSize:'15px'}}>{new Date(post.updatedAt).toDateString()}</span></Category>
        <Text>{post.text}</Text>
        </Article>
        <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleUpdate}>
          <FormControl fullWidth>
        <InputLabel htmlFor="component-outlined">Title</InputLabel>
        <OutlinedInput
          id="component-outlined"
          value={title}
        onChange={(e)=>setTitle(e.target.value) }   
          label="Title"
          sx={{mb:2}}
        />
      </FormControl>
      <FormControl fullWidth>
        <InputLabel htmlFor="component-outlined">Subtitle</InputLabel>
        <OutlinedInput
          id="component-outlined"
          value={subtitle}
          onChange={e=>setSubtitle(e.target.value)}   
          label="Name"
          sx={{mb:2}}
        />
      </FormControl>

      <FormControl fullWidth>
        <InputLabel htmlFor="component-outlined">Image URL</InputLabel>
        <OutlinedInput
          id="component-outlined"
          value={imgUrl}
          onChange={e=>setImgUrl(e.target.value)}   
          label="Name"
          sx={{mb:2}}
        />
      </FormControl>

      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Section
        </InputLabel>
        <NativeSelect
          defaultValue={section}
          onChange={e=>setSection(e.target.value)}
          sx={{mb:2}}
          inputProps={{
            name: 'age',
            id: 'uncontrolled-native',
          }}
        >
          <option value={'programming'}>Programming</option>
          <option value={'cultural'}>Cultural</option>
          <option value={'tech'}>Tech</option>
          <option value={'psychology'}>Psychology</option>
        </NativeSelect>
      </FormControl>
      
      <TextField
          id="outlined-multiline-static"
          label="Text"
          multiline
          rows={4}
          sx={{width:400,height:124, mb: 2}}
          value={text}
          onChange={e=>setText(e.target.value)}
        />
        
        
        
        <Button type='submit' variant="contained" color="success">
                        Update
        </Button>
          </form>
        
        </Box>
        
      </Modal>
    </div>
    </Container>
    
  )
}

export default SinglePost