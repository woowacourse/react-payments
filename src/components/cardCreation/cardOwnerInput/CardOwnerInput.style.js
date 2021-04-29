import styled from 'styled-components';
import { COLOR } from '../../../constants/color';

const Styled = {
  InputLabelContainer: styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    font-weight: 500;
    margin-bottom: 4px;
  `,
  InputContainer: styled.div`
    display: flex;
    align-items: center;
    padding: 0px 12px;
    background-color: ${COLOR.GRAY_50};
    border-radius: 7px;
  `,
};

export default Styled;
