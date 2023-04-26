import { CardInfo } from '../../types/state';
import { useFormState } from '../../hooks/useFormState';

import * as styled from './CardInfoSubmitButtonContainer.styled';

const CardInfoSubmitButtonContainer = ({ cardInfo }: { cardInfo: CardInfo }) => {
  const { handleOnClickSubmitButton, isFilledCardInfos } = useFormState(cardInfo);

  return (
    <styled.CardInfoSubmitButtonContainer>
      {isFilledCardInfos() && (
        <styled.CardInfoSubmitButton onClick={handleOnClickSubmitButton} autoFocus>
          다음
        </styled.CardInfoSubmitButton>
      )}
    </styled.CardInfoSubmitButtonContainer>
  );
};

export default CardInfoSubmitButtonContainer;
