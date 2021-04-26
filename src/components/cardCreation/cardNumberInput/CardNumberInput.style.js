import styled from 'styled-components';
import { COLOR } from '../../../constants/color';

const Styled = {
  InputLabelContainer: styled.div`
    font-size: 12px;
    font-weight: 500;
    margin-bottom: 4px;
    color: #525252;
  `,
  Dash: styled.span`
    font-size: 18px;
    color: #04c09e;
  `,
  InputContainer: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ecebf1;
    border-radius: 7px;
    border: ${({ isValidInput }) => (isValidInput ? `1px solid ${COLOR.VALID_GREEN}` : 'none')};
  `,
};

export default Styled;
