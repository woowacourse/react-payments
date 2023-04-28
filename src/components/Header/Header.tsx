import { PATHNAME } from '../../constants/pathname';
import { useHeader } from '../../hooks/useHeader';
import { useNavigationTo } from '../../hooks/useNavigationTo';

import * as styled from './Header.styled';

const Header = () => {
  const { isOnRegisterPage, pageTitle } = useHeader();
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
