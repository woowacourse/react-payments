import styled, { keyframes } from 'styled-components';
import { StyledMessage } from '../pages/SuccessPage.style';

const Loading = () => {
  return (
    <StyleSpinnerContainer>
      <StyleCircle>
        <StyleCard1></StyleCard1>
        <StyleCard2></StyleCard2>
        <StyleCard3></StyleCard3>
        <StyleCard4></StyleCard4>
      </StyleCircle>

      <StyledRegisterMessage>카드를 등록중입니다</StyledRegisterMessage>
    </StyleSpinnerContainer>
  );
};

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const floating = keyframes`
  0% {
    transform: translate(-50%, -50%) translateY(-30px);
  }

  50% {
    transform: translate(-50%, -50%) translateY(30px);
  }

  100% {
    transform: translate(-50%, -50%) translateY(-30px);
  }
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
    opacity: 0.2;
  }
  
  50% {
    transform: rotate(180deg);
    opacity: 0.7;
  }

  100% {
    transform: rotate(360deg);
    opacity: 0.2;
  }
`;

const StyleSpinnerContainer = styled.div`
  margin: auto;
  top: 50%;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyleCircle = styled.div`
  animation: ${rotate} 10s linear infinite;
`;

const StyleCard = styled.div`
  top: 50%;
  left: 50%;
  position: absolute;
  width: 100px;
  height: 60px;
  border-radius: 5px;
  animation: ${floating} 10s ease-in-out infinite;
`;

const StyleCard1 = styled(StyleCard)`
  transform: translate(-10%, -50%);
  background-color: #4caf50;
  animation-delay: 0s;
`;

const StyleCard2 = styled(StyleCard)`
  transform: translate(-20%, -10%);
  background-color: blue;
  animation-delay: 1s;
`;

const StyleCard3 = styled(StyleCard)`
  transform: translate(-30%, -20%);
  background-color: red;
  animation-delay: 2s;
`;

const StyleCard4 = styled(StyleCard)`
  transform: translate(-40%, -30%);
  background-color: yellow;
  animation-delay: 3s;
  opacity: 1;
`;

const StyledRegisterMessage = styled(StyledMessage)`
  animation: ${fadeOut} 10s linear forwards;
`;

export default Loading;
