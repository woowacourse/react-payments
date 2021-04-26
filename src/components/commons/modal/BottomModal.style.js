import styled from 'styled-components';

const Styled = {
  Dimmer: styled.div(({ styles }) => ({
    position: 'fixed',
    top: '0px',
    left: '0px',
    right: '0px',
    bottom: '0px',
    backgroundColor: 'rgba(30, 30, 30, 0.55)',
    zIndex: '2',
    ...styles,
  })),
  BottomModal: styled.div(({ styles }) => ({
    position: 'absolute',
    bottom: '0px',
    width: '100%',
    height: '227px',
    backgroundColor: '#FDFDFD',
    borderRadius: '5px 5px 0px 0px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    ...styles,
  })),
};

export default Styled;
