import styled from 'styled-components';

const Styled = {
  Dimmer: styled.div((props) => {
    return {
      position: 'fixed',
      top: '0px',
      left: '0px',
      right: '0px',
      bottom: '0px',
      backgroundColor: '#E5E5E5',
    };
  }),
  BottomModal: styled.div((props) => ({
    position: 'absolute',
    bottom: '0px',
    width: '100%',
    height: '227px',
    background: '#FDFDFD',
    borderRadius: '5px 5px 0px 0px',
    ...props,
  })),
};

export default Styled;
