import styled from 'styled-components';
import { COLOR } from '../../../constants/color';

const Styled = {
  ButtonContainer: styled.div`
    max-width: 700px;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    & > button {
      border: 1px solid ${COLOR.WHITE};
    }
  `,
};

export default Styled;
