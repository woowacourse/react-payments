import { css } from '@emotion/react';

export const MultipleInputContainer = (props) => css`
  letter-spacing: -0.085em;
  color: ${props.theme.color.label};
  margin-bottom: 1.5em;

  input {
    box-shadow: ${props.isError ? '0 0 0 2px #ff0000 inset' : 'none'};
    box-sizing: border-box;
  }
`;

export const MultipleInputHeader = css`
  font-size: 12px;
  margin-bottom: 7px;
`;

export const Flex = ({
  direction = 'row',
  justify = 'flex-start',
  items = 'flex-start',
  flexWrap = 'nowrap',
}) => css`
  display: flex;
  flex-direction: ${direction};
  justify-content: ${justify};
  align-items: ${items};
  flex-wrap: ${flexWrap};
`;

export const shakingAnimation = css`
  transform: scale(1);
  animation: shake 1s infinite forwards;

  @keyframes shake {
    0% {
      transform: translate(1px, 1px) rotate(0deg);
    }
    10% {
      transform: translate(-1px, -2px) rotate(-1deg);
    }
    20% {
      transform: translate(-3px, 0px) rotate(1deg);
    }
    30% {
      transform: translate(3px, 2px) rotate(0deg);
    }
    40% {
      transform: translate(1px, -1px) rotate(1deg);
    }
    50% {
      transform: translate(-1px, 2px) rotate(-1deg);
    }
    60% {
      transform: translate(-3px, 1px) rotate(0deg);
    }
    70% {
      transform: translate(3px, 1px) rotate(-1deg);
    }
    80% {
      transform: translate(-1px, -1px) rotate(1deg);
    }
    90% {
      transform: translate(1px, 2px) rotate(0deg);
    }
    100% {
      transform: translate(1px, -2px) rotate(-1deg);
    }
  }
`;
