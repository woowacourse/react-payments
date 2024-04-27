import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import CardNumbersInputContainer from './InputContainers/CardNumbersInputContainer';
import CardExpiryDateInputContainer from './InputContainers/CardExpiryDateInputContainer';
import CardholderNameInputContainer from './InputContainers/CardholderNameInputContainer';
import CvcInputContainer from './InputContainers/CvcInputContainer';
import PasswordInputContainer from './InputContainers/PasswordInputContainer';
import CardTypeSelectContainer from './InputContainers/CardTypeSelectContainer';

import useSequence from '../../hooks/useSequence';
import { ICardInfoInputsControl } from '../../hooks/useCardInfo/useCardInfoInputs';
import { ICardInfoCompletionStatus } from '../../hooks/useCardInfo/useCardInfoCompletionStatus';
import getObjectValues from '../../utils/getObjectValues';
import ROUTE_PATH from '../../pages/constants/routePath';

export interface ICardInfoFormProps {
  cardInfoControl: ICardInfoInputsControl;
  completionStatus: ICardInfoCompletionStatus;
  setIsCardFront: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CardInfoForm({ cardInfoControl, completionStatus, setIsCardFront }: ICardInfoFormProps) {
  const navigate = useNavigate();

  const { cardNumbers, cardType, expiryDate, cardholderName, cvc, password } = cardInfoControl;

  const sequence = useSequence(getObjectValues<boolean>(completionStatus));

  const completionFlags = getObjectValues<boolean>(completionStatus);
  const isSubmitable = completionFlags.every((v: boolean) => v);

  const onSubmit = () => {
    if (isSubmitable) {
      navigate(ROUTE_PATH.cardRegisterComplete, {
        state: { cardNumberPrefix: cardNumbers.value.first, cardType: cardType.value },
      });
    }
  };

  return (
    <form>
      {sequence >= 5 && <PasswordInputContainer {...password} />}
      {sequence >= 4 && <CvcInputContainer {...cvc} setIsCardFront={setIsCardFront} />}
      {sequence >= 3 && <CardholderNameInputContainer {...cardholderName} />}
      {sequence >= 2 && <CardExpiryDateInputContainer {...expiryDate} />}
      {sequence >= 1 && <CardTypeSelectContainer {...cardType} />}
      <CardNumbersInputContainer {...cardNumbers} />
      {isSubmitable && (
        <S.SubmitButton onClick={onSubmit} type="button">
          확인
        </S.SubmitButton>
      )}
    </form>
  );
}

const S = {
  SubmitButton: styled.button`
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #333333;
    color: #f3f3f3;
    padding: 20px 0;

    left: 0;
    font-size: 1.1rem;
  `,
};
