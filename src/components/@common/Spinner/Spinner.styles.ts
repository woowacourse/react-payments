import styled, { keyframes } from "styled-components";

// .MuiCircularProgress-indeterminate {
// }
const circleRotate = keyframes`
 0% {
    transform: rotate(0deg);
    /* Fix IE11 wobbly */
    transform-origin: 50% 50%;
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Styled = {
  Wrapper: styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    padding: 0;
    margin: 0;
    background: rgba(255, 255, 255, 0.7);
  `,

  SpinnerContainer: styled.div`
    position: fixed;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    margin: auto;
  `,

  SpinnerImage: styled.img`
    width: 24px;
    height: 24px;
    animation: ${circleRotate} 2s linear infinite;
  `,
};
