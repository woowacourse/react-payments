import * as Styled from './style';
import { CardNumberStateType } from '../../hooks/useCardNumber';
import { ExpirationDateStateType } from '../../hooks/useExpirationDate';
import { UserNameStateType } from '../../hooks/useUserName';
import { SelectedCardStateType } from '../../hooks/useSelectedCardState';
import { CVCStateType } from '../../hooks/useCVC';
import { PasswordStateType } from '../../hooks/usePassword';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CONDITION from '../../constants/Condition';
import ConfirmationButton from '../ConfirmationButton/ConfirmationButton';
import CardNumber from '../FormField/CardNumber/CardNumber';
import ExpirationDate from '../FormField/ExpirationDate/ExpirationDate';
import UserName from '../FormField/UserName/UserName';
import CVC from '../FormField/CVC/CVC';
import Password from '../FormField/Password/Password';
import SelectedCard from '../FormField/SelectedCard/SelectedCard';

const { CARD_INFORMATION_APPEARED } = CONDITION;

interface CardInformationFormProps {
  cardNumberState: CardNumberStateType;
  expirationDateState: ExpirationDateStateType;
  selectedCardState: SelectedCardStateType;
  userNameState: UserNameStateType;
  cvcState: CVCStateType;
  passwordState: PasswordStateType;
}

const CardInformationForm = ({
  cardNumberState,
  expirationDateState,
  selectedCardState,
  userNameState,
  cvcState,
  passwordState,
}: CardInformationFormProps) => {
  const navigate = useNavigate();

  const [appearedCondition, setAppearedCondition] = useState<number>(
    CARD_INFORMATION_APPEARED.cardNumber,
  );

  const isCardSelectedAppearedCondition =
    appearedCondition >= CARD_INFORMATION_APPEARED.selectedCard;
  const isExpirationDateAppearedCondition =
    appearedCondition >= CARD_INFORMATION_APPEARED.expirationDate;
  const isUserNameAppearedCondition = appearedCondition >= CARD_INFORMATION_APPEARED.userName;
  const isCVCAppearedCondition = appearedCondition >= CARD_INFORMATION_APPEARED.cvc;
  const isPasswordAppearedCondition = appearedCondition >= CARD_INFORMATION_APPEARED.password;
  const isSubmitButtonAppearedCondition =
    cardNumberState.isValid &&
    selectedCardState.value &&
    expirationDateState.isValid &&
    userNameState.isValid &&
    cvcState.isValid &&
    passwordState.isValid;

  if (cardNumberState.isValid && !isCardSelectedAppearedCondition)
    setAppearedCondition(CARD_INFORMATION_APPEARED.selectedCard);
  if (selectedCardState.value && !isExpirationDateAppearedCondition)
    setAppearedCondition(CARD_INFORMATION_APPEARED.expirationDate);
  if (expirationDateState.isValid && !isUserNameAppearedCondition)
    setAppearedCondition(CARD_INFORMATION_APPEARED.userName);
  if (userNameState.isValid && !isCVCAppearedCondition)
    setAppearedCondition(CARD_INFORMATION_APPEARED.cvc);
  if (cvcState.isValid && !isPasswordAppearedCondition)
    setAppearedCondition(CARD_INFORMATION_APPEARED.password);

  const handleConfirmationButtonOnClick = () => {
    navigate('/registration', {
      state: {
        firstValue: cardNumberState.firstState.value,
        selectedCardValue: selectedCardState.value,
      },
    });
  };

  return (
    <Styled.CardInformationForm>
      {isSubmitButtonAppearedCondition && (
        <ConfirmationButton isSubmit={true} onClick={handleConfirmationButtonOnClick} />
      )}
      {isPasswordAppearedCondition && <Password passwordState={passwordState} />}
      {isCVCAppearedCondition && <CVC cvcState={cvcState} />}
      {isUserNameAppearedCondition && <UserName userNameState={userNameState} />}
      {isExpirationDateAppearedCondition && (
        <ExpirationDate expirationDateState={expirationDateState} />
      )}
      {isCardSelectedAppearedCondition && <SelectedCard selectedCardState={selectedCardState} />}
      <CardNumber cardNumberState={cardNumberState} />
    </Styled.CardInformationForm>
  );
};

export default CardInformationForm;
