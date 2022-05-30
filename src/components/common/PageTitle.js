import { useNavigate } from "react-router-dom";

import styled from "styled-components";

export const PageTitle = ({ children }) => {
  return <PageTitleWrapperStyle>{children}</PageTitleWrapperStyle>;
};

const PageTitleWrapperStyle = styled.div`
  width: 100px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
