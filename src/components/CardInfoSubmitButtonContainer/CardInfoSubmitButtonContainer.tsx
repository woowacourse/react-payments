import { PATHNAME } from '../../constants/pathname';
import { useFormState } from '../../hooks/useFormState';
import { useNavigationTo } from '../../hooks/useNavigationTo';

import * as styled from './CardInfoSubmitButtonContainer.styled';

const CardInfoSubmitButtonContainer = () => {
  const { isFilledCardInfos } = useFormState();
  const { handleClick } = useNavigationTo(PATHNAME.CARD_ALIAS);

  return (
    <>
      {isFilledCardInfos() && (
        <styled.CardInfoSubmitButton onClick={handleClick} autoFocus>
          다음
        </styled.CardInfoSubmitButton>
      )}
    </>
  );
};

export default CardInfoSubmitButtonContainer;
