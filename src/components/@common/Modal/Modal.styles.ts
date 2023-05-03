import styled, { CSSProp, css, keyframes } from "styled-components";
import { Dicrection } from ".";

interface StyleInputProps {
  customInputStyle?: CSSProp;
  direction: Dicrection;
  width?: string;
  height?: string;
}

const animationDirection = {
  top: keyframes`
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translateY(0);
    }
  `,
  bottom: keyframes`
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  `,
  right: keyframes`
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  `,
  left: keyframes`
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0%);
    }
  `,
  center: keyframes`
   from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
    `,
};

export const cssDirection = {
  top: css`
    top: 0;
    border-radius: 0 0 5px 5px;
  `,
  bottom: css`
    bottom: 0;
    border-radius: 5px 5px 0 0;
  `,
  right: css`
    right: 0;
    border-radius: 5px 0 0 5px;
  `,
  left: css`
    left: 0;
    border-radius: 0 5px 5px 0;
  `,
  center: css`
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
  `,
};

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

  ModalContent: styled.div<StyleInputProps>`
    position: fixed;
    display: flex;
    justify-content: center;

    width: ${({ width }) => width ?? "100%"};
    height: ${({ height }) => height ?? "100%"};

    padding: 34px 0;
    background: #fff;

    animation: ${(props) => animationDirection[props.direction]} 1s ease-in-out
      0s both;

    ${({ customInputStyle }) => customInputStyle && customInputStyle};
  `,
};
