import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Button from '../common/Button/Button';
import { StepType } from '../../constants/step';
import { useNavigate } from 'react-router';
import { PAGE_URL } from '../../constants/pageUrl';
import { CardCompanyName } from '../../hooks/useCardCompany';

interface CardInfoFormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  canSubmit: boolean;
  children: React.ReactElement<{ name: StepType }>[];
  step: Record<StepType, boolean>;
  cardNumber: string[];
  selectedCard: CardCompanyName | null;
}

function CardInfoForm({
  canSubmit,
  children,
  step,
  cardNumber,
  selectedCard,
}: CardInfoFormProps) {
  const completedSteps = new Set(
    Object.entries(step)
      .map(([componentName, isCompleted]) => {
        if (isCompleted) {
          return componentName;
        }
        return null;
      })
      .filter(Boolean),
  );

  const filteredChildren = children
    .filter((child) => completedSteps.has(child.props.name))
    .reverse();

  const navigate = useNavigate();

  const handleAddCardFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    navigate(PAGE_URL.ADD_CARD_SUCCESS, {
      state: {
        firstCardNumber: cardNumber[0],
        selectedCard,
      },
    });
  };

  return (
    <CardForm onSubmit={handleAddCardFormSubmit}>
      {filteredChildren}
      {canSubmit && (
        <CardFormButtonWrapper>
          <Button customStyle={cardFormButtonStyle} text="확인" type="submit" />
        </CardFormButtonWrapper>
      )}
    </CardForm>
  );
}

export default CardInfoForm;

const CardForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 38px;
  margin-top: 45px;
`;

const CardFormButtonWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`;

const cardFormButtonStyle = css`
  width: 376px;
  height: 50px;
  background-color: #000000ba;
  color: #ffffff;
  border: none;
  transition: background-color 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #000000;
  }
`;
