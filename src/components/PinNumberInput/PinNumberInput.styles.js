import styled from '@emotion/styled';

const Styled = {
  Container: styled.div`
    input {
      box-shadow: ${(props) => (props.isError ? '0 0 0 2px #ff0000 inset' : 'none')};
      box-sizing: border-box;
    }
  `,

  Header: styled.div`
    font-size: 12px;
    margin-bottom: 7px;
  `,

  InputContainer: styled.div`
    display: flex;
    align-items: center;

    & label {
      margin-right: 7px;
    }
  `,

  PasswordDot: styled.div`
    width: 5px;
    height: 5px;
    background-color: ${(props) => props.theme.color.normal};
    border-radius: 50%;
    margin: 0 24px 0 17px;
  `,
};

export default Styled;
