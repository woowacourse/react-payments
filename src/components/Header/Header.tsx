import { PATHNAME } from '../../constants/pathname';
import { useHeaderTitle } from '../../hooks/useHeaderTitle';
import { useNavigationTo } from '../../hooks/useNavigationTo';

import * as styled from './Header.styled';

const Header = () => {
  const { isOnRegisterPage, pageTitle } = useHeaderTitle();

  return (
    <styled.Header>
      {isOnRegisterPage && (
        <styled.BackwardButton
          onClick={() => useNavigationTo(PATHNAME.HOME)}
        >{`<`}</styled.BackwardButton>
      )}
      <styled.HeaderTitle onClick={() => useNavigationTo(PATHNAME.HOME)}>
        {pageTitle}
      </styled.HeaderTitle>
    </styled.Header>
  );
};

export default Header;
