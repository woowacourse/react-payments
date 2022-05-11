import { memo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Button } from '../../components';

const Message = styled.div`
  font-size: 24px;
  margin: 100px 0 77px;
`;

const StyledLink = styled(Link)`
  animation: rainbowLink 3s infinite;
  font-size: 18px;
  text-decoration-line: none;
`;

function Fail() {
  return (
    <>
      <Message>등록된 카드 정보가 없습니다.</Message>
      <Button margin={{ t: '20px' }}>
        <StyledLink to="/add">카드 정보 입력 페이지로 이동</StyledLink>
      </Button>
    </>
  );
}

export default memo(Fail);
