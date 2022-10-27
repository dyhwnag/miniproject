import React, { useEffect, useState } from 'react';
import {
  CommentListContainer,
  ButtonStyle,
  CommentListBox,
  CommentInput
} from './CommentListStyle'

import { useDispatch, useSelector } from 'react-redux';
import { __getComments, __deleteComment, __putComment } from '../../redux/modules/commentSlice';
import useInput from '../hooks/useInput';

const CommentList = ({ detail }) => {
  const dispatch = useDispatch();
  const { comments } = useSelector((state) => state.comments);
  const [commentText, setComment, onChangeComment] = useInput('');
  const [bool, setBool] = useState(true);
  const [editId, seteditId] = useState(-1);

  const [inputState, setInputState] = useState({});

  useEffect(() => {
    dispatch(__getComments())
  }, [dispatch]);




  // const comments = [
  //   { id: 1, comment: "test1" },
  //   { id: 2, comment: "test2" },
  //   { id: 3, comment: "test3" },
  //   { id: 4, comment: "test4" },
  // ]

  const onChangeInput = (e) => {
    // input의 onChange는 본 함수를 호출한다.
    // 이때 파라메터 e를 기본적으로 넘겨준다.
    // e.target은 input 태그다.
    // e.target.name은 input 태그의 name이다
    // e.target.value는 input 태그의 value다.

    // 1. e.target 구조분해한다.
    const { value, name } = e.target;

    // 2. inputState를 변경한다. [name]은 name의 값을 이름(=key,property)로 사용하겠다는 말이다.
    // name이 comment.id다
    // inputState는 { 1: 'test1' } 이렇게 저장된다.
    // e.target.name이 2, 즉 comment.id가 2인 input에 값이 변경(onChange)되면
    // inputState는 { 1: 'test1', 2: 'test2' } 처럼 2가 추가된다.
    // 이렇게 1,2,3,4.... comment.id 값을 이름(=key,property)로 하는 객체를 만들 수 있다.
    // 접근하는 방법은 아래와 같이 두가지 방법이 있다.
    // inputState.1 or inputState['1']
    // inputState[1 + ''] <= 1 + '' 는 '1'이 되는 꼼수다.
    setInputState({ ...inputState, [name]: value });

    //console.log(inputState);
  }



  return (
    <CommentListContainer>
      <h3>댓글 목록</h3>
      {comments.map((comment) => {
        return (
          <CommentListBox key={comment.id}>
            {
              comment.id === editId ?
                (<CommentInput type='text' name={comment.id} value={
                  // inputState 객체에 comment.id + '' 즉 1+'' 즉 '1'이 있는지 확인한다.
                  inputState.hasOwnProperty(comment.id + '')

                    // 있다면, input text의 value 값을 inputState['1'] 로 세팅
                    ? inputState[comment.id + '']

                    // 없다면, comment.comment 기본값으로 세팅
                    : comment.comment} onChange={onChangeInput} />)
                :
                (<pre>{comment.comment}</pre>)
            }
            {
              comment.id === editId ?
                (<ButtonStyle onClick={() => {
                  // 저장 디스패치
                  //dispatch(__putComment())
                  seteditId(-1);
                }}>저장</ButtonStyle>)
                :
                (<ButtonStyle onClick={() => {
                  seteditId(comment.id);
                }}>수정</ButtonStyle>)
            }

            <ButtonStyle onClick={() => {
              // 삭제 디스패치
            }}>삭제</ButtonStyle>
          </CommentListBox>
        )
      })}
    </CommentListContainer>


  )
}

export default CommentList;