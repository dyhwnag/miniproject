import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CommentFormContainer = styled.form`
  width:1000px;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 45px;
  margin-bottom: 20px;
`;

export const CommentText = styled.textarea`
  border: 1px solid #4a9eff;
  outline-color: #4a9eff;
  width: 750px;
  height: 90px;
`;

export const CommentButton = styled.button`
  color: #fff;
  border: 1px solid #4a9eff;
  background-color: #508dff;
  border-radius: 15px;
  width: 200px;
  height: 95px;
  
  cursor: pointer;
  &:hover{
    font-weight: bold;
    border: 1px solid #0065b8;
    background-color: #0065b8;
    
  }

`;