import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
  height: 30px;

  border: none;
  background-color: inherit;

  color: #04c09e;
  font-size: 16px;
  line-height: 16px;
  font-weight: bold;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

interface Props {
  children: React.ReactNode;
  type?: 'submit' | 'button' | 'reset';
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({ children, ...props }: Props) {
  return <StyledButton {...props}>{children}</StyledButton>;
}

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};
