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
