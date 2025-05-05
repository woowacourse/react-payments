import styled from 'styled-components';
import Button from '../../ui/Button/Button';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../constants/routes';
import { FORM_STEP } from '../../../pages/payments/AddCard';
import { CardIssuerSelectorType } from '../../../config/inputField';

interface StepCompleteButtonProps {
  step: number;
  cardNumber: string;
  cardIssuer: CardIssuerSelectorType | null;
}

export default function StepCompleteButton({
  step,
  cardNumber,
  cardIssuer,
}: StepCompleteButtonProps) {
  const navigate = useNavigate();

  return (
    <ButtonContainer>
      <Button
        isFocused={step === FORM_STEP.COMPLETE_BUTTON}
        buttonText="확인"
        buttonType="default"
        onClick={(e) => {
          e.preventDefault();
          navigate(ROUTES.CARD_COMPLETE, {
            state: {
              cardNumber,
              cardIssuer,
            },
          });
        }}
        type="submit"
      />
    </ButtonContainer>
  );
}

const ButtonContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 0px;
  width: 376px;
`;
