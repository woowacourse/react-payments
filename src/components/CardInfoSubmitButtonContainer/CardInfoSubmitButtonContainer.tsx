import { PATHNAME } from '../../constants/pathname';
import { useIsFilledForm } from '../../hooks/useIsFilledForm';
import { useNavigationTo } from '../../hooks/useNavigationTo';

import * as styled from './CardInfoSubmitButtonContainer.styled';

const CardInfoSubmitButtonContainer = () => {
  const { navigationTo } = useNavigationTo(PATHNAME.CARD_ALIAS);

  return (
    <>
      {useIsFilledForm() && (
        <styled.CardInfoSubmitButton onClick={navigationTo} autoFocus>
          다음
        </styled.CardInfoSubmitButton>
      )}
    </>
  );
};

export default CardInfoSubmitButtonContainer;
