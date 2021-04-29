import styled from 'styled-components';
import { COLOR } from '../../../constants/color';

const Styled = {
  Dimmer: styled.div(({ styles }) => ({
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: COLOR.GRAY_900_OPACITY_55,
    zIndex: '2',
    marginBottom: '0 !important',
    ...styles,
  })),
  BottomModal: styled.div(({ styles }) => ({
    position: 'absolute',
    bottom: '0',
    width: '100%',
    height: '227px',
    backgroundColor: COLOR.GRAY_10,
    borderRadius: '5px 5px 0 0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    ...styles,
  })),
};

export default Styled;
