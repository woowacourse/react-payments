import styled from '@emotion/styled';

const Styled = {
  Container: styled.div`
    padding: 0 28px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
  `,

  Header: styled.h2`
    text-align: center;
    font-weight: normal;
    margin: 0;
    margin-bottom: 77px;
  `,

  InputContainer: styled.div`
    width: 80%;
    min-width: 200px;
    margin: 0 auto;
    margin-top: 33px;

    input {
      outline: none;
    }
  `,

  ButtonContainer: styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 172px;
  `,
};

export default Styled;
