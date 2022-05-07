import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { LAYOUT } from 'styles/theme';

const ALIGN_TRANSFORM = {
  top: css`
    top: -0.5rem;
    left: 50%;
    transform: translateX(-50%) translateY(-100%);

    &::after {
      border-top: 5px solid #000;
      border-right: 5px solid transparent;
      border-left: 5px solid transparent;
      bottom: -4px;

      left: 50%;
      transform: translateX(-50%);
    }
  `,

  bottom: css`
    bottom: -0.5rem;
    left: 50%;
    transform: translateX(-50%) translateY(100%);

    &::after {
      border-bottom: 5px solid #000;
      border-right: 5px solid transparent;
      border-left: 5px solid transparent;
      top: -4px;

      left: 50%;
      transform: translateX(-50%);
    }
  `,

  left: css`
    top: 50%;
    left: -0.5rem;
    transform: translateX(-100%) translateY(-50%);

    &::after {
      border-bottom: 5px solid transparent;
      border-top: 5px solid transparent;
      border-left: 5px solid #000;
      right: -4px;

      top: 50%;
      transform: translateY(-50%);
    }
  `,

  right: css`
    top: 50%;
    right: -0.5rem;
    transform: translateX(100%) translateY(-50%);

    &::after {
      border-bottom: 5px solid transparent;
      border-top: 5px solid transparent;
      border-right: 5px solid #000;
      left: -4px;

      top: 50%;
      transform: translateY(-50%);
    }
  `,
};

const Container = styled.div`
  position: relative;
  display: inline;
  overflow: visible;

  > .tool-tip-text {
    position: absolute;
    visibility: hidden;
    border-radius: ${LAYOUT.BORDER_RADIUS}px;
    text-align: center;
    background-color: #000;
    color: #fff;
    white-space: nowrap;
    padding: 0.425rem;
    font-size: 0.75rem;

    opacity: 0;
    transition: opacity 0.3s ease;

    ${({ isDisabled }) =>
      isDisabled &&
      css`
        display: none;
      `}

    &::after {
      content: '';
      position: absolute;
    }

    ${({ align }) => ALIGN_TRANSFORM[align] || ALIGN_TRANSFORM.top};
  }

  &:hover {
    .tool-tip-text {
      visibility: visible;
      opacity: 1;
    }
  }
`;

export default Container;
