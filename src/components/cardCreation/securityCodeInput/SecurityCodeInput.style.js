import styled from 'styled-components';
import { COLOR } from '../../../constants/color';

const Styled = {
  InputLabelContainer: styled.div`
    font-size: 12px;
    font-weight: 500;
    margin-bottom: 4px;
    color: #525252;
  `,
  Container: styled.div`
    display: flex;
    align-items: center;
  `,
  InputContainer: styled.div`
    display: flex;
    align-items: center;
    background-color: #ecebf1;
    border-radius: 7px;
    width: 84px;
    margin-right: 11px;
    border: ${({ isValidInput }) => (isValidInput ? `1px solid ${COLOR.VALID_GREEN}` : 'none')};
  `,
};

export default Styled;
