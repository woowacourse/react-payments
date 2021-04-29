import styled from 'styled-components';
import { COLOR } from '../../../constants/color';

const Styled = {
  Header: styled.div(({ styles }) => ({
    display: 'flex',
    alignItems: 'center',
    fontWeight: '500',
    marginBottom: '22px',
    color: COLOR.GRAY_700,
    ...styles,
  })),
};

export default Styled;
