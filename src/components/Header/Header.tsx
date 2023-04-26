import { useHeader } from '../../hooks/useHeader';
import * as styled from './Header.styled';

const Header = () => {
  const { isOnHomePage, onClickBackward, pageTitle } = useHeader();

  return (
    <styled.Header>
      {!isOnHomePage && <styled.BackwardButton onClick={onClickBackward}>{'<'}</styled.BackwardButton>}
      <styled.HeaderTitle onClick={onClickBackward}>{pageTitle}</styled.HeaderTitle>
    </styled.Header>
  );
};

export default Header;
