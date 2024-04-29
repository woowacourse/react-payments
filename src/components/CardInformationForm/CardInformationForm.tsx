import * as Styled from './style';
import { CardNumberStateType } from '../../hooks/useCardNumber';
import { ExpirationDateStateType } from '../../hooks/useExpirationDate';
import { UserNameStateType } from '../../hooks/useUserName';
import { SelectedCardStateType } from '../../hooks/useSelectedCardState';
import { CVCStateType } from '../../hooks/useCVC';
import { PasswordStateType } from '../../hooks/usePassword';
import { useNavigate } from 'react-router-dom';
import ConfirmationButton from '../ConfirmationButton/ConfirmationButton';
import CardNumber from '../FormField/CardNumber/CardNumber';
import ExpirationDate from '../FormField/ExpirationDate/ExpirationDate';
import UserName from '../FormField/UserName/UserName';
import CVC from '../FormField/CVC/CVC';
import Password from '../FormField/Password/Password';
import SelectedCard from '../FormField/SelectedCard/SelectedCard';
import useCardInformationAppearedCondition from '../../hooks/useCardInformationAppearedCondition';

interface CardInformationFormProps {
  cardNumberState: CardNumberStateType;
  expirationDateState: ExpirationDateStateType;
  selectedCardState: SelectedCardStateType;
  userNameState: UserNameStateType;
  cvcState: CVCStateType;
  passwordState: PasswordStateType;
}

type AppearedConditionType =
  | '카드번호'
  | '카드선택'
  | '유효기간'
  | '사용자이름'
  | 'cvc'
  | '비밀번호';

const CardInformationForm = ({
  cardNumberState,
  selectedCardState,
  expirationDateState,
  userNameState,
  cvcState,
  passwordState,
}: CardInformationFormProps) => {
  const navigate = useNavigate();

  const cardInformationValid = {
    isCardNumberValid: cardNumberState.isValid,
    isCardSelected: selectedCardState.value,
    isExpirationDateValid: expirationDateState.isValid,
    isUserNameValid: userNameState.isValid,
    isCVCValid: cvcState.isValid,
    isPasswordValid: passwordState.isValid,
  };
  const { cardInformationAppeardConditionState } = useCardInformationAppearedCondition({
    defaultValue: '카드번호',
    cardInformationValid,
  });

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
      {cardInformationAppeardConditionState.isSubmitButtonAppearedCondition && (
        <ConfirmationButton isSubmit={true} onClick={handleConfirmationButtonOnClick} />
      )}
      {cardInformationAppeardConditionState.isPasswordAppearedCondition && (
        <Password passwordState={passwordState} />
      )}
      {cardInformationAppeardConditionState.isCVCAppearedCondition && <CVC cvcState={cvcState} />}
      {cardInformationAppeardConditionState.isUserNameAppearedCondition && (
        <UserName userNameState={userNameState} />
      )}
      {cardInformationAppeardConditionState.isExpirationDateAppearedCondition && (
        <ExpirationDate expirationDateState={expirationDateState} />
      )}
      {cardInformationAppeardConditionState.isCardSelectedAppearedCondition && (
        <SelectedCard selectedCardState={selectedCardState} />
      )}
      <CardNumber cardNumberState={cardNumberState} />
    </Styled.CardInformationForm>
  );
};

export default CardInformationForm;
