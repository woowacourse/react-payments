import styled, { keyframes } from 'styled-components';

const moveSpinner = keyframes`
    0% {
        transform: translateX(0)
    }
    50%{
        transform: translateX(100%);
    }

    100% {
        transform: translateX(0);
    }
`;

export const Styled = {
  Spinner: styled.div`
    width: 85px;
    height: 106px;
    background: #333333;
    border-radius: 10px;
    animation: ${moveSpinner} 1.5s ease-in-out;
  `,
  SpinnerBase: styled.div`
    position: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    margin: 50% 0;
    width: 170px;
    height: 106px;
    background: #d9d9d9;
    border-radius: 10px;
  `,
};
