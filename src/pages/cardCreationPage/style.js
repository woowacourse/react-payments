import styled from 'styled-components';

const Styled = {
  Form: styled.form`
    margin-top: 25px;
    display: flex;
    flex-direction: column;

    & > *:not(:last-child) {
      margin-bottom: 19px;
    }
  `,
  ButtonContainer: styled.div`
    position: absolute;
    bottom: 25px;
    right: 25px;
  `,
};

export default Styled;
