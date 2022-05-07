import styled from "styled-components";
import { css } from "styled-components";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  ${({ type }) =>
    type === "add"
      ? css`
          height: 850px;
        `
      : css`
          height: 700px;
        `}
  border: 1px solid ${({ theme }) => theme.colors.pageBorder};
  padding: 20px 15px;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background-color: #e4e4e4;
    border-radius: 100px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 100px;
    border: 6px solid rgba(0, 0, 0, 0.18);
    border-left: 0;
    border-right: 0;
    background-color: ${({ theme }) => theme.colors.scroll};
  }
`;

export default PageContainer;
