import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Blogs from '../components/Blogs'
import CreateBlog from '../components/CreateBlog'
import LastBlog from '../components/LastBlog'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
function Home() {
  const [posts,setPosts] = useState([])
  useEffect(()=> {
    const fetchPosts = async ()=> {
      const res = await axios.get('http://localhost:5500/api/v1/posts')
      const data = await res.data
      const posts = await data.data.posts
      setPosts(posts)
    }

    fetchPosts()

    
  },[])


  return (
    <div style={{width:'1500px',  margin:'auto'}}>
    <Navbar/>
    <LastBlog/>
    <Blogs posts={posts}/>
    <CreateBlog/>
    <Footer/>
    </div>
  )
}

export default Home