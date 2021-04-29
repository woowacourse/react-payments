import styled from 'styled-components';
import { COLOR } from '../../../constants/color';

const Styled = {
  Dimmer: styled.div(({ styles }) => ({
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: COLOR.GRAY_900_OPACITY_55,
    zIndex: '2',
    marginBottom: '0 !important',
    ...styles,
  })),
  BottomModal: styled.div(({ styles }) => ({
    position: 'absolute',
    bottom: '0px',
    width: '100%',
    height: '227px',
    backgroundColor: COLOR.GRAY_10,
    borderRadius: '5px 5px 0 0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transform: 'translateY(227px)',
    ...styles,
  })),
};

export default Styled;
