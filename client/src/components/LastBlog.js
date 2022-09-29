import styledEngine from "@mui/styled-engine";
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 500px;
  background-color: #fcf5f5;
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`;

const Image= styled.img`
flex: 1;
width: 500px;
height: 500px;
margin-right: 10px;
object-fit: fill;

`

const Category = styled.h4`
font-size: 30px;
margin: 0 0 5 0
`

const Article = styled.div`
flex : 2;
`

const Title = styled.h2`
font-size: 40px;
margin-bottom: 5px;
`

const Text = styled.article`
  font-size : 25px;
`

const LastBlog = () => {
  const [lastPost,setLastPost] = useState([])

  useEffect(()=> {
    const fetchLastPost =async()=> {
      const res = await axios.get('http://localhost:5500/api/v1/posts?new=true')
      const data = await res.data
      const post = await data.data.posts
      setLastPost(post)
    }
    fetchLastPost()
  },[])

  return (
    <Container>
       <Image src={lastPost[0]?.image}/>
    <Article>
      <Title>{lastPost[0]?.title} <span style={{fontSize: '20px'}}>{new Date(lastPost[0]?.updatedAt).toDateString()}</span></Title>
      <Category>{lastPost[0]?.subtitle}</Category>
      <Text>{lastPost[0]?.text} </Text>
    </Article>
    </Container>
  );
};

export default LastBlog;