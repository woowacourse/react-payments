import styled from '@emotion/styled';

const Styled = {
  Input: styled.input`
    text-align: ${(props) => props.textAlign};
    padding: 12px;
    background-color: #ecebf1;
    border-radius: 7px;
    border: none;
    width: ${(props) => props.width};
    box-sizing: border-box;
  `,
};

export default Styled;
