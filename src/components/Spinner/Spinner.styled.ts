import styled from 'styled-components';
import { COLOR } from '../../constants/card';

export const SpinnerBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Spinner = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: 8px solid transparent;
  border-top-color: ${COLOR.TOSS_BLUE};
  border-bottom-color: ${COLOR.TOSS_BLUE};
  animation: spinner 1s ease infinite;
  @keyframes spinner {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
