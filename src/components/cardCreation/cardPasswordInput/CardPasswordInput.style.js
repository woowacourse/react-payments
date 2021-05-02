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
    & > *:not(:last-child) {
      margin-right: 7px;
    }
  `,
  InputContainer: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 43px;
    background-color: #ecebf1;
    border-radius: 7px;
    border: ${({ isValidInput }) => (isValidInput ? `1px solid ${COLOR.VALID_GREEN}` : 'none')};
  `,
  CircleContainer: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 43px;
    background-color: transparent;
  `,
};

export default Styled;
