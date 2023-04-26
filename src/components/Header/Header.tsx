import { useHeaderTitle } from '../../hooks/useHeaderTitle';
import { useNavigationTo } from '../../hooks/useNavigationTo';
import * as styled from './Header.styled';

const Header = () => {
  const { isOnHomePage, pageTitle } = useHeaderTitle();
  const { handleClick } = useNavigationTo('/');

  return (
    <styled.Header>
      {!isOnHomePage && <styled.BackwardButton onClick={handleClick}>{`<`}</styled.BackwardButton>}
      <styled.HeaderTitle onClick={handleClick}>{pageTitle}</styled.HeaderTitle>
    </styled.Header>
  );
};

export default Header;
