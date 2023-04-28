import { PATHNAME } from '../../constants/pathname';
import { useHeaderTitle } from '../../hooks/useHeaderTitle';
import { useNavigationTo } from '../../hooks/useNavigationTo';

import * as styled from './Header.styled';

const Header = () => {
  const { isOnRegisterPage, pageTitle } = useHeaderTitle();
  const { navigationTo } = useNavigationTo(PATHNAME.HOME);

  return (
    <styled.Header>
      {isOnRegisterPage && (
        <styled.BackwardButton onClick={navigationTo}>{`<`}</styled.BackwardButton>
      )}
      <styled.HeaderTitle onClick={navigationTo}>{pageTitle}</styled.HeaderTitle>
    </styled.Header>
  );
};

export default Header;
