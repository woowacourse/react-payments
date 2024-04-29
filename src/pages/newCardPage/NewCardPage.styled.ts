import styled from "styled-components";

export const NewCardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 376px;
  height: 100vh;
  padding: 0 30px;
  margin: auto;
`;

export const InputSection = styled.div`
  height: calc(100vh - 238px);
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  & > :last-child {
    margin-bottom: 50px;
  }
`;

export const Button = styled.div`
  position: absolute;
  width: 436px;
  height: 52px;
  bottom: 0;
  left: 0;
  color: #ffffff;
  background: #333333;
  line-height: 52px;
  text-align: center;
  cursor: pointer;
`;
