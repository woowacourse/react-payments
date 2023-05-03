import { useNavigate } from 'react-router-dom';

import { PATHNAME } from '../../constants/pathname';
import { useHeader } from '../../hooks/useHeader';

import * as styled from './Header.styled';

const Header = () => {
  const { isOnRegisterPage, pageTitle } = useHeader();
  const navigation = useNavigate();

  return (
    <styled.Header>
      {isOnRegisterPage && (
        <styled.BackwardBox
          onClick={() => navigation(PATHNAME.HOME)}
        >{`<`}</styled.BackwardBox>
      )}
      <styled.HeaderTitle onClick={() => navigation(PATHNAME.HOME)}>
        {pageTitle}
      </styled.HeaderTitle>
    </styled.Header>
  );
};

export default Header;
