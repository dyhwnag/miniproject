import React, { useEffect, useState } from 'react';
import useInput from '../hooks/useInput';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { __getPostDetail, __putPostDetail } from '../../redux/modules/postsSlice';
import {
  DetailUpdateContainer,
  ImageBox,
  FormBox,
  InputStyle,
  TextareaStyle,
  ButtonBox,
  TextStyle,
  UpdateButton,
  Sselect
} from './DetailUpdateStyle';

const DetailUpdate = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { id } = useParams();
  const { detail } = useSelector((state) => state.posts);
  console.log(detail)

  const [title, setTitle, onChangeTitle] = useInput(detail.title);
  const [content, setCoentent, onChageContent] = useInput(detail.content);

  const [category, setCategory] = useState('');
  //const [imgUrl, setImgUrl] = useState('');


  useEffect(() => {
    dispatch(__getPostDetail(id))
  }, []);




  const onSubmitHandler = (e) => {
    e.preventDefault()
    if (title.trim() === '' ||
      content.trim() === '') return alert('모든 항목을 입력해 주세요!');
    dispatch(__putPostDetail(
      {
        id: detail.id,
        title,
        content,
        category,
        imgUrl: detail.imgUrl
      }
    ));
    navigate(`/detail/${id}`)
  };

  // const onimgChangeHandler = (e) => {
  //   const formData = new FormData();
  //   formData.append('file', e.target.value);
  //   setImgUrl(formData);
  // }



  return (
    <DetailUpdateContainer>
      <FormBox>
        {/* <ImageBox type='file' onChange={onimgChangeHandler} /> */}
        <Sselect value={category} onChange={(e) => {
          setCategory(e.target.value)
        }}>
          <option>지역선택</option>
          <option>서울</option>
          <option>경기도</option>
          <option>강원도</option>
          <option>충청도</option>
          <option>전라도</option>
          <option>경상도</option>
          <option>제주도</option>
        </Sselect>
        <form onSubmit={onSubmitHandler}>
          <TextStyle>제목</TextStyle>
          <InputStyle type='text'
            name='title'
            value={title}
            onChange={onChangeTitle} />
          <TextStyle>내용</TextStyle>
          <TextareaStyle type='text'
            name='title'
            value={content}
            onChange={onChageContent} />

          <ButtonBox>

            <UpdateButton>수정 완료</UpdateButton>
          </ButtonBox>
        </form>
      </FormBox>
    </DetailUpdateContainer>
  )
}
export default DetailUpdate;