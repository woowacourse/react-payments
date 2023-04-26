import { CardNumbers, ExpirationDate, OwnerName, Password, SecurityCode } from '../../types/state';
import { useFormState } from '../../hooks/useFormState';

import * as styled from './CardInfoSubmitButtonContainer.styled';

interface CardInfoSubmitButtonContainerProps {
  cardNumbers: CardNumbers;
  expirationDate: ExpirationDate;
  ownerName: OwnerName;
  securityCode: SecurityCode;
  password: Password;
}

const CardInfoSubmitButtonContainer = (props: CardInfoSubmitButtonContainerProps) => {
  const { handleOnClickSubmitButton, isFilledCardInfos } = useFormState(props);

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
