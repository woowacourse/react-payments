import styled from 'styled-components';

export const AddCardFormContainer = styled.div`
  .question-mark {
    position: relative;
    display: flex;
    align-items: center;
    margin-left: 1rem;
    cursor: pointer;

    &:hover::after {
      content: '';
      position: absolute;
      display: block;
      width: 10rem;
      height: 10rem;
      left: 2.5rem;
      top: -1.5rem;
      background: url('/images/example.png') no-repeat;
    }
  }

  .submit-btn {
    position: fixed;
    bottom: 4%;
    right: 4%;
  }
`;
