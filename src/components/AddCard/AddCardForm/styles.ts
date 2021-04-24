import styled from 'styled-components';
import { BAEMINT } from '../../../constants/palette';

export const AddCardFormContainer = styled.div`
  .credit-card {
    margin: 3rem auto 2rem;
  }

  .password-dot::after {
    content: '';
    width: 0.375em;
    height: 0.375em;
    display: block;
    border-radius: 50%;
    background-color: ${BAEMINT};
  }

  .question-mark {
    width: fit-content;
    height: fit-content;
    position: relative;
    display: flex;
    align-items: center;
    margin: auto 0 auto 1rem;
    cursor: pointer;

    &:hover::after {
      content: '';
      position: absolute;
      display: block;
      width: 10rem;
      height: 10rem;
      left: 2.5rem;
      top: -2.5rem;
      background: url('/images/example.png') no-repeat;
    }
  }

  .submit-btn {
    position: fixed;
    bottom: 4%;
    right: 4%;
  }
`;
