import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Message from '../../atomics/Message';

/* types */
type HeaderProps = {
  title: string;
};

/* components */
const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <StyledHeader>
      <StyledLeftArrowButton to="/" title={title} />
      <Message fontWeight={500} lineHeight="18px" color="#383838">
        {title}
      </Message>
    </StyledHeader>
  );
};

/* styles */
export const StyledLeftArrowButton = styled(Link)`
  display: ${(props) => (props.title === '보유카드' ? 'none' : 'block')};

  position: relative;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;

  margin-right: 8px;

  &::after {
    content: ' ';
    position: absolute;
    width: 10px;
    height: 10px;
    top: 0%;
    left: 54%;
    border-right: 1.5px solid #525252;
    border-bottom: 1.5px solid #525252;
    transform: translate(-50%, -50%) rotate(135deg);
  }
`;

const StyledHeader = styled.header`
  display: flex;
  height: 70px;
  align-items: center;
  padding: 22px;
`;

export default Header;
