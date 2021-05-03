import styled, { keyframes } from 'styled-components';
import { COLOR } from '../../../constants/color';

const infiniteSpin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Styled = {
  LoadingCircleWrapper: styled.div`
    height: 86px;
    width: 86px;
    display: inline-block;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
  `,
  LoadingCircle: styled.div`
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 6px solid;
    border-radius: 50%;
    animation: ${infiniteSpin} 1s ease-in-out infinite;
    border-color: ${props => (props.borderColor ? props.borderColor : COLOR.BLACK)} transparent transparent transparent;
  `,
};

export default Styled;
