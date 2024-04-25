import { COLOR } from '../styles/color';
import styled from '@emotion/styled';

const Button = styled.button({
  width: '320px',
  height: '44px',
  backgroundColor: COLOR.gray2,
  border: 0,
  borderRadius: '5px',

  fontWeight: 700,
  fontSize: '15px',
  lineHeight: '21.72px',
  alignItems: 'center',
  color: COLOR.white,
});

export default Button;
