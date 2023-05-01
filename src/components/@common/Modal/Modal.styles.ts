import styled from "styled-components";

export const Styled = {
  Dialog: styled.dialog`
    width: 100%;
    height: 100%;

    display: block;
    position: fixed;
    background: rgba(0, 0, 0, 0.55);

    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    margin: 0;
    padding: 0;

    border: none;

    &::backdrop {
      background: rgba(0, 0, 0, 0.5);
    }
  `,

  ModalContent: styled.div`
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 228px;
    padding: 34px 0;
    border-radius: 5px 5px 0px 0px;
    background: #fff;
  `,
};
