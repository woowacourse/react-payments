import styled from 'styled-components';

const Field = styled.div`
  margin: 16px 0;
  position: relative;

  .transparent {
    background-color: transparent;
  }

  .cvc-block {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }

  .password-block {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
  }
`;

export default Field;
