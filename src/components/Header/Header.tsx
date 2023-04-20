import * as styled from './Header.styled';

import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const { pathname } = useLocation();
  const navigation = useNavigate();

  const onClickBackward = () => {
    navigation('/');
  };

  return (
    <styled.Header>
      {pathname === '/register' && (
        <styled.BackwardButton onClick={onClickBackward}>{'<'}</styled.BackwardButton>
      )}
      <styled.HeaderTitle>
        {pathname === '/register' ? '카드 추가' : '보유 카드'}
      </styled.HeaderTitle>
    </styled.Header>
  );
};

export default Header;
