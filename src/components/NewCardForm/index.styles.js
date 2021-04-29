import styled from 'styled-components';

export const NewCardFormWrapper = styled.form`
  width: 25rem;
  .card-form-btns {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    min-height: 2.5rem;

    button {
      width: 3rem;
      height: 2.5rem;
      cursor: pointer;
    }
  }
`;
