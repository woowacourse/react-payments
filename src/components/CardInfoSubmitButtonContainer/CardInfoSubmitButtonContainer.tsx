import { PATHNAME } from '../../constants/pathname';
import { useIsFilledForm } from '../../hooks/useIsFilledForm';
import { useNavigationTo } from '../../hooks/useNavigationTo';

import * as styled from './CardInfoSubmitButtonContainer.styled';

const CardInfoSubmitButtonContainer = () => {
  return (
    <>
      {useIsFilledForm() && (
        <styled.CardInfoSubmitButton onClick={() => useNavigationTo(PATHNAME.CARD_ALIAS)} autoFocus>
          다음
        </styled.CardInfoSubmitButton>
      )}
    </>
  );
};

export default CardInfoSubmitButtonContainer;
