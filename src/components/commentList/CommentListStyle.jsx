import styled from 'styled-components';


export const CommentListContainer = styled.div`
  width:1000px;
  height: 100px;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const CommentInput = styled.input`
  width: 500px;
  `;

export const ButtonStyle = styled.button`
  
  width: 45px;
  height: 45px;
  cursor: pointer;
  color: #4a9eff;
  border: none;
  background-color: transparent;
  font-size: 15px;
  &:hover{
    color: #0065b8;
  }
`;

export const CommentListBox = styled.div`
  width: 1000px;
  border-bottom:1px solid #4a9eff;
  margin-bottom: 10px;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
`;

