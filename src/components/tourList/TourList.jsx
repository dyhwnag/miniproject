import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { __getPosts } from '../../redux/modules/postsSlice';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const TourList = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);
  console.log(posts)


  useEffect(() => {
    dispatch(__getPosts());
  }, [dispatch]);

    return (
    
        <div>
          <section>
            <div>
              <button
                style={{
                  color: "#fff", 
                  background:"#508dff", 
                  borderRadius:"3px", 
                  padding:"5px 10px", 
                  fontWeight:"600",
                  marginTop:"15px",
                  marginRight:"10px"
                }}
              onClick={()=> navigate('/addpost')}>작성하기</button>
            </div>
          </section>
          <section>
            <ListContainer>
              {posts.length !== 0 && posts.map((post) => {
                return (
                  <PostBox key={post.id}>
                    <Link
                      style={{textDecoration:'none'}}
                       to={`/detail/${post.id}`}>
                        <Title>{post.category}</Title>
                        <Title>{post.title}</Title>
                        <ListImageBox><img style={{width: 300, height: 200, borderRadius: 10}} src={post.imgUrl} /></ListImageBox>
                    </Link>
                  </PostBox>
                )
              })}
            </ListContainer>
          </section>
        </div>
      
  
    )
}

export default TourList;

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 30px;
`
const PostBox = styled.div`
  width : 300px;
  height : 280px;
  padding : 15px;

  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  &:hover{
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
  border : 2px solid black;
  border-radius : 20px 10px;
  background-color: white;
`
const ListImageBox = styled.div`
  height: 35vh;
`

const Title = styled.div`
border : 1px solid black;
border-radius: 10px;
margin:10px;
`
// const ListContainer = styled.div`
//   width: 900px;
//   border: 1px solid black;

// `

// const StyledFormBox = styled.div`
//   width: 100vw;
//   height:100vh;
//   background-color: rgba(20,40,50);
  
//   display: inline-block;
//   justify-content:center;

// `

// const PostsList = styled.div`
//       display: flex;
//       flex-wrap: wrap;
// `

// const AddButton = styled.div`
//   display: flex;
//   justify-content: center;
// `;