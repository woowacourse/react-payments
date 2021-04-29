import styled from 'styled-components';
import { COLOR } from '../../../constants/color';

const Styled = {
  Dimmer: styled.div(({ styles }) => ({
    position: 'fixed',
    top: '0px',
    left: '0px',
    right: '0px',
    bottom: '0px',
    backgroundColor: COLOR.GRAY_900_OPACITY_55,
    zIndex: '2',
    marginBottom: '0px !important',
    ...styles,
  })),
  BottomModal: styled.div(({ styles }) => ({
    position: 'absolute',
    bottom: '0px',
    width: '100%',
    height: '227px',
    backgroundColor: COLOR.GRAY_10,
    borderRadius: '5px 5px 0px 0px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    ...styles,
  })),
};

export default Styled;
