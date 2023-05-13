import styled, { keyframes } from "styled-components";

const Spinner = () => {
  const rotate = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  `;

  const SpinnerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  `;

  const SpinnerAnimation = styled.div`
    width: 20px;
    height: 20px;
    border: 3px solid rgba(0, 0, 0, 0.1);
    border-top-color: #3498db;
    border-radius: 50%;
    animation: ${rotate} 1s ease-in-out infinite;
  `;

  return (
    <SpinnerContainer>
      <SpinnerAnimation />
    </SpinnerContainer>
  );
};

export default Spinner;
