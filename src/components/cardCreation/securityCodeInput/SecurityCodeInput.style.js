import styled from 'styled-components';
import { COLOR } from '../../../constants/color';

const Styled = {
  InputLabelContainer: styled.div`
    font-size: 12px;
    font-weight: 500;
    margin-bottom: 4px;
  `,
  Container: styled.div`
    display: flex;
    align-items: center;
  `,
  InputContainer: styled.div`
    display: flex;
    align-items: center;
    background-color: ${COLOR.GRAY_50};
    border-radius: 7px;
    width: 84px;
    margin-right: 11px;
    border: ${({ validColor }) => (validColor ? `1px solid ${validColor}` : 'none')};
  `,
};

export default Styled;
