import * as React from 'react';
import { useState,useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import FilledInput from '@mui/material/FilledInput';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import NativeSelect from '@mui/material/NativeSelect';
import TextField from '@mui/material/TextField';
import { useGlobalContext } from '../context';
import axios from 'axios';


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

export default function CreateBlog() {
    const {open,handleClose,user} = useGlobalContext()
    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [section, setSection] = useState("programming");
    const [text,setText] = useState("")
    const [imgUrl,setImgUrl] = useState('')


    const handleCreate = async(e) => {
      e.preventDefault()
      const newPost = {
        username: user?.data.username, 
        title,
        subtitle,
        section,
        text,
        image: imgUrl
      }


     try {
      const res  = await axios.post('http://localhost:5500/api/v1/posts',newPost)
      const data = await res.data
      const savedData =  await data.data.savedPost
      console.log(savedData);
      setTitle("")
      setSubtitle("")
      setText("")
      setImgUrl("")
       window.location.replace(`/posts/${savedData._id}`)
     } catch (error) {
      
     }


    }   
    
   
    

    
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleCreate}>
          <FormControl fullWidth>
        <InputLabel htmlFor="component-outlined">Title</InputLabel>
        <OutlinedInput
          id="component-outlined"
          value={title}
          onChange={(e)=>setTitle(e.target.value) }   
          label="Name"
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
          value={imgUrl }
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
          defaultValue="Default Value"
          sx={{width:400,height:124, mb: 2}}
          value={text}
          onChange={e=>setText(e.target.value)}
        />
        
        
        
        <Button type='submit' variant="contained" color="success">
                        Create
        </Button>
          </form>
        
        </Box>
        
      </Modal>
    </div>
  );
}
