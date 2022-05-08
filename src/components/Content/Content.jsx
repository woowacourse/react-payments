import React from 'react';
import styled from 'styled-components';

const Content = ({ children }) => {
  return <StyledContent>{children}</StyledContent>;
};

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin: 46px 22px 26px;
`;

export default Content;
