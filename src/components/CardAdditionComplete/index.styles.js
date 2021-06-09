import styled from 'styled-components';
import { FONT_SIZE, FONT_WEIGHT } from '../../constants/style';

export const CardAdditionCompleteWrapper = styled.form`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CardFormButtons = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: flex-end;
  width: 100%;

  button {
    cursor: pointer;
    width: 3rem;
    height: 2rem;
  }
`;

export const FormColumn = styled.div`
  width: 80%;
  margin-bottom: 2rem;
  text-align: center;
`;

export const CardAdditionTitle = styled(FormColumn)`
  font-size: ${FONT_SIZE.XLARGE};
  font-weight: ${FONT_WEIGHT.BOLD};
`;

export const CardInfo = styled(FormColumn)`
  height: 12rem;
`;
