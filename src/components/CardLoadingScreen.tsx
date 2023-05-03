import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import styled, { keyframes } from 'styled-components';

interface CardLoadingScreenProps {
  message?: string;
  isShow?: boolean;
}

function CardLoadingScreen({ message, isShow = false }: CardLoadingScreenProps) {
  const [loadingMessageAnimation, setLoadingMessageAnimation] = useState('');

  useEffect(() => {
    setTimeout(() => {
      if (loadingMessageAnimation === '') {
        setLoadingMessageAnimation('.');
      }
      if (loadingMessageAnimation === '.') {
        setLoadingMessageAnimation('..');
      }
      if (loadingMessageAnimation === '..') {
        setLoadingMessageAnimation('');
      }
    }, 200);
  }, [setLoadingMessageAnimation, loadingMessageAnimation]);

  return createPortal(
    isShow && (
      <StyledCardLoadingScreenBackground>
        <StyledCardLoadingTemplate>
          <div />
          <span>
            {message}
            {loadingMessageAnimation}
          </span>
        </StyledCardLoadingTemplate>
      </StyledCardLoadingScreenBackground>
    ),
    document.body,
  );
}

const StyledCardLoadingScreenBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  background: white;
`;

const cardBlink = keyframes`
  0% {
    opacity: 100%
  }
  50% {
    opacity: 30%
  }
  100% {
    opacity: 100%
  }
`;

const StyledCardLoadingTemplate = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 42px;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  & > div {
    width: 172px;
    height: 108px;
    background: #d9d9d9;
    border-radius: 10px;
    background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);

    animation: 1s ${cardBlink} linear infinite;
  }

  & > span {
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    align-items: center;
    text-align: center;

    color: #575757;
    opacity: 0.9;
  }
`;

export default CardLoadingScreen;
