import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as Styled from './Header.styles';

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  let content;

  switch (location.pathname) {
    case '/':
      content = '보유카드';
      break;

    case '/registerCard':
      content = '카드 추가';
      break;

    case '/registerCard/alias':
      return null;

    default:
      content = 'Page Not Found :(';
      break;
  }

  return (
    <Styled.Root>
      {location.pathname !== '/' && <Styled.NavigationButton onClick={() => navigate(-1)}>&lt;</Styled.NavigationButton>}
      <Styled.HeaderTitle>{content}</Styled.HeaderTitle>
    </Styled.Root>
  );
}
