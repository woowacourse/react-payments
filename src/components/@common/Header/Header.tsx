import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as Styled from './Header.styles';

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  let content;

  if (location.pathname === '/') {
    content = '보유카드';
  } else if (location.pathname === '/registerCard') {
    content = '카드 추가';
  } else {
    content = 'Page not found';
  }

  return (
    <Styled.Root>
      {location.pathname !== '/' && (
        <Styled.NavigationButton onClick={() => navigate(-1)}>
          &lt;
        </Styled.NavigationButton>
      )}
      <Styled.HeaderTitle>{content}</Styled.HeaderTitle>
    </Styled.Root>
  );
}
