import { css } from '@emotion/react';
import styled from '@emotion/styled';

const simpleStyle = css`
  background: none;
  border: none;
  font-size: 18px;
  border-bottom-width: 1.5px;
  border-bottom-style: solid;
  border-bottom-color: ${(props) => props.theme.borderColor.simple};
`;

const defaultStyle = css`
  background-color: #ecebf1;
  border-radius: 7px;
  border: none;
`;

const Styled = {
  Input: styled.input`
    ${(props) => (props.simple ? simpleStyle : defaultStyle)};
    text-align: ${(props) => props.textAlign};
    box-sizing: border-box;
    width: 100%;
    padding: 12px;
  `,
};

export default Styled;
