import styled from '@emotion/styled';

const Styled = {
  Dimmer: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
  `,
  Container: styled.div`
    background-color: #fdfdfd;
    border-radius: 5px 5px 0px 0px;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    min-height: 100px;
    padding: 34px;
    box-sizing: border-box;
  `,
};

export default Styled;
