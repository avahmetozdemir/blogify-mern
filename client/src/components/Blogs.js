import React,{useEffect, useState} from 'react'
import BlogCard from './BlogCard'
import styled from "styled-components";
import axios from 'axios'
const Container = styled.div`
 padding:5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({posts}) => {
  return (
    <Container>
      {posts.map((item) => <BlogCard item={item} key={item._id} />)
        }
    </Container>
  );
};

export default Products;