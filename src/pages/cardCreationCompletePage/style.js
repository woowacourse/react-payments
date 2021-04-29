import styled from 'styled-components';
import { COLOR } from '../../constants/color';

const Styled = {
  Title: styled.div`
    margin-top: 105px;
    margin-bottom: 80px;
    font-size: 24px;
    text-align: center;
    color: ${COLOR.GRAY_700};
  `,
  InputContainer: styled.div`
    margin: 0 auto;
    margin-top: 30px;
    width: 240px;
    border-bottom: 1px solid ${COLOR.BLACK};
  `,
  ButtonContainer: styled.div`
    position: absolute;
    bottom: 0;
    right: 25px;
  `,
};

export default Styled;
