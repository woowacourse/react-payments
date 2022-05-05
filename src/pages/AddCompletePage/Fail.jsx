import { memo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Button } from '../../components';

const Message = styled.div`
  font-size: 24px;
  margin: 100px 0 77px;
`;

const StyledLink = styled(Link)`
  animation-duration: 3s;
  animation-name: rainbowLink;
  animation-iteration-count: infinite;
  font-size: 18px;
  text-decoration-line: none;

  @keyframes rainbowLink {
    0% {
      color: #ff2a2a;
    }
    15% {
      color: #ff7a2a;
    }
    30% {
      color: #ffc52a;
    }
    45% {
      color: #43ff2a;
    }
    60% {
      color: #2a89ff;
    }
    75% {
      color: #202082;
    }
    90% {
      color: #6b2aff;
    }
    100% {
      color: #e82aff;
    }
  }
`;

function Fail() {
  return (
    <>
      <Message>등록된 카드 정보가 없습니다.</Message>
      <Button
        content={
          <StyledLink to="/add">카드 정보 입력 페이지로 이동</StyledLink>
        }
        margin={{ t: '20px' }}
      />
    </>
  );
}

export default memo(Fail);
