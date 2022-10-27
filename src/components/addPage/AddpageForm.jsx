
import React, { useEffect } from 'react'
import { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux/es/exports';
import { __addPosts } from '../../redux/modules/postsSlice';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../header/Header';

// http://www.hanghaetour.shop/api/posts

const AddpageForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [imgFile, setImgFile] = useState(null);
  const [imgUrl, setImgUrl] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');

  const [post, setPost] = useState({
    imgUrl: '',
    title: '',
    content: '',
    category: ''
  })


  const onChagneTitleHandler = (e) => {
    const { value } = e.target;
    setTitle(value)
  }

  const onChangeImgHandler = (e) => {
    const { files } = e.target;
    console.log({ files })
    for (let i = 0; i < files.length; i++) {
      setImgFile(files[i])
      setImgUrl(files[i].name)
    }

    console.log(setImgUrl())
  }


  const onChangeCategoryHandler = (e) => {
    const { value } = e.target;
    setCategory(value)
  }

  const onChangeContentHandler = (e) => {
    const { value } = e.target;
    setContent(value)
  }

  const onImageUploadCancleHandler = () => {
    setImgUrl('')
  }

  // useEffect(() => {
  //   if (title === ''
  //     || imgUrl === ''
  //     || category === ''
  //     || category === '여행지역을 골라주세요'
  //     || content === ''
  //   ) {
  //     return setIsDisabled(true)
  //   } else {
  //     return setIsDisabled(false)
  //   }
  // }, [title, imgUrl, category, content])


  // 이미지 파일을 보내야함.
  const onClickAddPostHandler = () => {

    const formdata = new FormData();

    formdata.append("title", title);
    formdata.append("category", category);
    formdata.append("content", content);

    formdata.append("imgurl", imgUrl);
    // formdata.append('dto', new Blob([JSON.stringify(formdata)], { type: "//http://www.hanghaetour.shop/api/posts"}))


    dispatch(__addPosts(formdata));
    console.log(formdata)

    // 글 작성 시 홈으로 보냄
    if (imgFile === null || title === '' || content === '') {
      return
    } else {
      return navigate('/posts')
    }
  };


  return (
    <>
      <Header />

      <StyledFormBox>
        <ContentBox>

          <div>
            <label >제목</label>
            <div>
              <input name='title' type="text" placeholder="어디로 여행가지?" onChange={(e) => onChagneTitleHandler(e)} />
            </div>
          </div>

          <div>
            <label>이미지</label>
            {imgUrl === ''
              ? <label htmlFor="ex_file" type="button" style={{ width: '100%', cursor: 'pointer', display: 'block' }}> 클릭하세요</label>
              : <div>이미지 파일: {imgUrl} <button type='button' onClick={onImageUploadCancleHandler}>취소</button></div>}
            <div className="control">
              <input
                id="ex_file"
                name='img'
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                placeholder="이미지를 넣으려면 클릭하세요"
                onChange={(e) =>
                  onChangeImgHandler(e)
                }
              />
            </div>
          </div>

          <div>
            <label >위치</label>
            <div>
              <div>
                <select onChange={(e) => onChangeCategoryHandler(e)}>
                  <option>여행 지역을 골라주세요</option>
                  <option>서울</option>
                  <option>경기도</option>
                  <option>강원도</option>
                  <option>충청도</option>
                  <option>경상도</option>
                  <option>전라도</option>
                  <option>제주도</option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <label>내용</label>
            <div>

              <textarea name="content" placeholder="메시지를 입력해주세요" onChange={(e) => onChangeContentHandler(e)} style={{ resize: 'none' }} ></textarea>

            </div>
          </div>
        </ContentBox>


        <ButtonGroup>
          <div>
            <form className="control" onSubmit={(e) => {
              e.preventDefault(e);
              onClickAddPostHandler(e);
            }}>
              <button type='submit'>작성완료</button>
            </form>
          </div>
          <div className="control">
            <button onClick={() => { navigate('/posts') }} >취소</button>
          </div>
        </ButtonGroup>



      </StyledFormBox >
    </>
  )
}

export default AddpageForm;

const StyledFormBox = styled.div`
  color: white;
  width: 100vw;
  height:100vh;
  background-color: rgba(20,40,50);
  
  display: inline-block;
  justify-content:center;
  text-align:center;
`
const ContentBox = styled.div`
  margin: 30px;
  
  gap: 20px;
`

const ButtonGroup = styled.div`
  display:flex;
  justify-content:center;

  gap: 20px;
`