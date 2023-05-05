import { useNavigate } from 'react-router-dom';

import { PATHNAME } from '../../constants/pathname';

import * as styled from './Header.styled';

const Header = ({
  shouldRenderBackwardBox,
  pageTitle,
}: {
  shouldRenderBackwardBox: boolean;
  pageTitle: string;
}) => {
  const navigation = useNavigate();

  return (
    <styled.Header>
      {shouldRenderBackwardBox ? (
        <styled.BackwardBox
          onClick={() => navigation(PATHNAME.HOME)}
        >{`<`}</styled.BackwardBox>
      ) : null}
      <styled.HeaderTitle onClick={() => navigation(PATHNAME.HOME)}>
        {pageTitle}
      </styled.HeaderTitle>
    </styled.Header>
  );
};

export default Header;
