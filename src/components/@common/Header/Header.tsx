import React from 'react';
import { useLocation } from 'react-router-dom';
import { HEADER, ROUTES } from '../../../constants/routes';
import useNavigation from '../../../hooks/@common/useHistory';
import * as Styled from './Header.styles';

export default function Header() {
  const location = useLocation();
  const { goBack } = useNavigation();

  const content = HEADER[location.pathname as keyof typeof HEADER];

  return (
    <Styled.Root>
      {location.pathname !== ROUTES.MY_CARD_LIST && (
        <Styled.NavigationButton onClick={goBack}>&lt;</Styled.NavigationButton>
      )}
      <Styled.HeaderTitle>{content}</Styled.HeaderTitle>
    </Styled.Root>
  );
}
