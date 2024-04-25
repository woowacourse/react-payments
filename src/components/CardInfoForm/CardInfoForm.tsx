import SequenceContainer from '../common/SequenceContainer';
import CardNumbersInputContainer from './CardNumbersInputContainer';
import CardExpiryDateInputContainer from './CardExpiryDateInputContainer';
import CardholderNameInputContainer from './CardholderNameInputContainer';
import CvcInputContainer from './CvcInputContainer';
import PasswordInputContainer from './PasswordInputContainer';
import { ICardInfoInputsControl } from '../../hooks/useCardInfo/useCardInfoInputs';
import { ICardInfoCompletionStatus } from '../../hooks/useCardInfo/useCardInfoCompletionStatus';
import styled from 'styled-components';
import getObjectValues from '../../utils/getObjectValues';
import { useNavigate } from 'react-router-dom';
import ROUTE_PATH from '../../pages/constants/routePath';

export interface ICardInfoFormProps {
  cardInfoControl: ICardInfoInputsControl;
  completionStatus: ICardInfoCompletionStatus;
}

export default function CardInfoForm({ cardInfoControl, completionStatus }: ICardInfoFormProps) {
  const navigate = useNavigate();
  const { cardNumbers, expiryDate, cardholderName, cvc, password } = cardInfoControl;

  const completionFlags = getObjectValues<boolean>(completionStatus);
  const isSubmitable = true || completionFlags.every((v: boolean) => v);

  const onSubmit = () => {
    if (isSubmitable) {
      navigate(ROUTE_PATH.cardRegisterComplete);
    }
  };

  return (
    <form>
      <SequenceContainer
        completionFlagQueue={completionFlags}
        componentQueue={[
          <CardNumbersInputContainer {...cardNumbers} />,
          <CardExpiryDateInputContainer {...expiryDate} />,
          <CardholderNameInputContainer {...cardholderName} />,
          <CvcInputContainer {...cvc} />,
          <PasswordInputContainer {...password} />,
        ]}
      />
      {isSubmitable && (
        <SubmitButton onClick={onSubmit} type="button">
          확인
        </SubmitButton>
      )}
    </form>
  );
}

const SubmitButton = styled.button`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #333333;
  color: #f3f3f3;
  padding: 20px 0;

  left: 0;
  font-size: 1.1rem;
`;
