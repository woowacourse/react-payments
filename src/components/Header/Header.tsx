import { useLocation, useNavigate } from 'react-router-dom';

import { PAGE_TITLE, PATHNAME, PageTitle } from '../../constants/pathname';

import * as styled from './Header.styled';

const Header = () => {
  const { pathname } = useLocation();
  const navigation = useNavigate();

  const onClickBackward = () => {
    navigation('/');
  };

  return (
    <styled.Header>
      {pathname !== PATHNAME.HOME && <styled.BackwardButton onClick={onClickBackward}>{'<'}</styled.BackwardButton>}
      <styled.HeaderTitle onClick={onClickBackward}>{PAGE_TITLE[pathname as keyof PageTitle]}</styled.HeaderTitle>
    </styled.Header>
  );
};

export default Header;
