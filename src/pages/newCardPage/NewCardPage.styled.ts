import styled from "styled-components";

export const NewCardContainer = styled.div`
  width: 376px;
  height: 700px;
  padding: 20px 30px 0 30px;
  margin: auto;
`;

export const InputSection = styled.div`
  height: 482px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;
