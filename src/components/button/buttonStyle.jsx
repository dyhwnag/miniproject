import styled from 'styled-components';

export const DetailNavBtn = styled.button`
  background-color: white;
  font-size: var(--font-medium);
  padding: 10px 30px;
  border-radius: 30px;
`;

export const FeedUpdateBtn = styled.button`
  background-color: var(--color-pink);
  font-size: var(--font-regular);
  padding: 5px 15px;
  border-radius: 10px;
  transition: all var(--animation-duration) ease-in;
  &:hover {
    background-color: pink;
    transform: scale(1.1);
  }
`;

export const CommentBtn = styled.button`
  height: 40px;
  width: 40px;
  border: none;
  border-radius: 50%;
  /* background-color: var(--color-grey); */
  background-color: var(--color-dark-white);
  font-size: var(--font-medium);
  padding: 5px;
  margin: 0 10px;
  transition: all var(--animation-duration) ease-in;
  &:disabled {
    background-color: var(--color-grey);
    cursor: default;
  }
  &:hover {
    background-color: var(--color-pink);
    transform: scale(1.2);
  }
  &:disabled:hover {
    background-color: var(--color-grey);
    transform: scale(1);
  }
`;

export const PrevBtn = styled.button`
  background-color: white;
  font-size: var(--font-medium);
  padding: 15px 35px;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #bb5eb6;
    transform: scale(1.1);
    font-weight: bold;
    color: white;
  }
`;

export const WriteBtn = styled.button`
  background-color: white;
  font-size: var(--font-medium);
  padding: 15px 35px;
  margin-right: 15px;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #bb5eb6;
    transform: scale(1.1);
    font-weight: bold;
    color: white;
  }
`;

export const FeedDelete = styled.button`
  background-color: white;
  width: 70px;
  height: 70px;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #bb5eb6;
    transform: scale(1.1);
    color: white;
  }
`;