import React from 'react';
import styled from 'styled-components';
import Message from '../../components/atomics/Message';

const NotFound: React.FC = () => {
  return <StyleErrorMessage>요청하신 페이지를 찾을 수 없습니다!!</StyleErrorMessage>;
};

const StyleErrorMessage = styled(Message)`
  width: 100%;
  height: 200px;

  text-align: center;

  position: fixed;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
`;

export default NotFound;
