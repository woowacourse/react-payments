import styled from '@emotion/styled';

const Styled = {
  Dimmer: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 100%;
    max-width: ${(props) => (props.mobile ? '420px' : 'auto')};
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    visibility: ${(props) => (props.isOpened ? 'visible' : 'hidden')};
  `,
  Container: styled.div`
    background-color: #fdfdfd;
    border-radius: 5px 5px 0px 0px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 100%;
    min-height: 100px;
    padding: 34px;
    box-sizing: border-box;
    outline: none;
  `,
};

export default Styled;
