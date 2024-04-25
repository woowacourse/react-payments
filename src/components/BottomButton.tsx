import { COLOR } from '../styles/color';
import styled from '@emotion/styled';

const BottomButton = styled.button({
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  backgroundColor: COLOR.gray2,
  height: '52px',
  fontWeight: 700,
  fontSize: '16px',
  lineHeight: '52px',
  textAlign: 'center',
  border: '0px',

  color: COLOR.semiWhite,
});

export default BottomButton;
