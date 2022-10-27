import React from 'react';
import { useDispatch } from 'react-redux';
import useInput from '../hooks/useInput';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { __addComment } from '../../redux/modules/commentSlice';
import {
  CommentFormContainer,
  CommentText,
  CommentButton
}
  from './CommentFormStyle'

const CommentForm = ({ detail }) => {
  // console.log(detail.comments)

  const [comment, setComment, onChangeComment] = useInput('');

  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // if (comment.trim() === '') return alert('댓글을 입력해 주세요!');

    dispatch(__addComment({
      id: 0,
      comment
    }));

    setComment('');


  };
  return (
    <CommentFormContainer onSubmit={onSubmitHandler}>
      <CommentText
        name='comment'
        value={comment}
        onChange={onChangeComment}
        placeholder='댓글을 입력해주세요!' />
      <CommentButton>댓글 등록</CommentButton>

    </CommentFormContainer>
  )
};

export default CommentForm;