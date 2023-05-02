import styled from "styled-components";

const St = {
  Backdrop: styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    background: rgba(0, 0, 0, 0.35);
  `,

  Container: styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    max-height: 90%;
    width: 100%;

    background: var(--grey-100);
  `,
};

export default St;
