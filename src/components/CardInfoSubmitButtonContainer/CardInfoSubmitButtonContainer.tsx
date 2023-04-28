import { PATHNAME } from '../../constants/pathname';
import { useIsFilledForm } from '../../hooks/useIsFilledForm';
import { useNavigationTo } from '../../hooks/useNavigationTo';

import * as styled from './CardInfoSubmitButtonContainer.styled';

const CardInfoSubmitButtonContainer = () => {
  const navigationToAliasPage = useNavigationTo(PATHNAME.CARD_ALIAS);

  return (
    <>
      {useIsFilledForm() && (
        <styled.CardInfoSubmitButton onClick={navigationToAliasPage} autoFocus>
          다음
        </styled.CardInfoSubmitButton>
      )}
    </>
  );
};

export default CardInfoSubmitButtonContainer;
