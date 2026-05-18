import styled from '@emotion/styled';

export const Wrapper = styled.div`
  background-color: white;
  width: 376px;
  height: 750px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
  box-sizing: border-box;
`;

export const Message = styled.p`
  font-size: 18px;
  font-weight: 700;
  line-height: 1.5;
  color: #000000;
  text-align: center;
  margin: 0 0 48px 0;
`;

export const ConfirmButton = styled.button`
  width: 100%;
  height: 52px;
  background-color: #333333;
  color: #f3f3f3;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
`;
