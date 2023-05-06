import { useNavigate } from 'react-router-dom';
import * as Styled from './Header.styles';
import React from 'react';

interface HeaderProps {
  page: string;
  titleContent: string;
}

const Header = React.memo(({ page, titleContent }: HeaderProps) => {
  const navigate = useNavigate();

  return page === 'home' ? (
    <Styled.Title>{titleContent}</Styled.Title>
  ) : (
    <Styled.Title onClick={() => navigate(-1)}>{titleContent}</Styled.Title>
  );
});

export default Header;
