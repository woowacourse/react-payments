import styled from '@emotion/styled';

const Styled = {
  Container: styled.div`
    width: ${(props) => props.width};
    font-size: 16px;
    letter-spacing: -0.085em;
    color: ${(props) => props.theme.color.label};
    position: relative;

    &::after {
      content: '${(props) => props.errorMessage}';
      color: red;
      display: block;
      position: absolute;
      font-size: 12px;
    }

    input {
      box-shadow: ${(props) => (props.errorMessage ? '0 0 0 2px #ff0000 inset' : 'none')};
      box-sizing: border-box;
    }
  `,

  Header: styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 7px;
    font-size: 12px;
  `,
};

export default Styled;
