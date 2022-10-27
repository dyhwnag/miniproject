import React, { useEffect } from 'react';
import CommentForm from '../commentForm/CommentForm';
import CommentList from '../commentList/CommentList';

import { useNavigate, useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { __getPostDetail, __deletePostDetail } from '../../redux/modules/postsSlice';

import {
  DetailContainer,
  DetailInfoBox,
  ImageBox,
  TextBox,
  ButtonBox,
  TitleBox,
  ButtonStyle,
  ButtonStyle2
} from './DetailInfoStyle';

const DetailInfo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { id } = useParams();
  const { detail } = useSelector((state) => state.posts);

  console.log(detail)


  useEffect(() => {
    dispatch(__getPostDetail(id));
  }, [])

  return (
    <>
      <DetailContainer>
        <TitleBox>
          <h3>{detail.title}({detail.category})</h3>
          <ButtonStyle2 onClick={() => { navigate('/posts') }}><i className="fa-solid fa-delete-left"></i></ButtonStyle2>
        </TitleBox>
        <DetailInfoBox>
          <ImageBox><img width={850} height={300} src={detail.imgUrl} /></ImageBox>
        </DetailInfoBox>
        <TextBox>
          <p>{detail.content}</p>
          <ButtonBox>
            <ButtonStyle onClick={() => { navigate(`/update/${id}`) }}>수정하기</ButtonStyle>
            <ButtonStyle onClick={() => {
              const confirm = window.confirm('진짜로 지울까요?');
              if (confirm) {
                dispatch(__deletePostDetail(id));
              } else {
                return;
              }
              navigate('/posts')

            }}>삭제하기</ButtonStyle>
          </ButtonBox>
        </TextBox>
      </DetailContainer>
      <CommentForm detail={detail} />
      <CommentList detail={detail} />

    </>
  )
}

export default DetailInfo;