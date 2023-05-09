import React from 'react';
import styled from 'styled-components';
import Message from '../../components/atomics/Message';
import Spinner from '../../components/atomics/Spinner';
import { Center } from '../../components/layout/flexbox';

const Loading: React.FC = () => {
  return (
    <>
      <StyleLoadingMessage>보유 카드 페이지 로딩중입니다.</StyleLoadingMessage>
      <StyledSpinnerWrapper>
        <Spinner />
      </StyledSpinnerWrapper>
    </>
  );
};

const StyleLoadingMessage = styled(Message)`
  width: 100%;
  height: 200px;

  text-align: center;

  position: fixed;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
`;

const StyledSpinnerWrapper = styled.div`
  width: 100%;
  height: 100px;

  ${Center}

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default Loading;
