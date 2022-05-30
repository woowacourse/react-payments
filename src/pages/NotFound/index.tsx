import { memo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { AppContainer } from '../../components';

const Message = styled.div`
  font-size: 24px;
  margin: 100px 0 77px;
`;

const StyledLink = styled(Link)`
  animation: rainbowLink 3s infinite;
  font-size: 18px;
  text-decoration-line: none;
`;

function NotFound() {
  return (
    <AppContainer alignItems="center">
      <Message>404 Not Found</Message>
      <StyledLink to="/">카드 목록 페이지로 이동</StyledLink>
    </AppContainer>
  );
}

export default memo(NotFound);
