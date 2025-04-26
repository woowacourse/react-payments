import styled from '@emotion/styled';
import Button from '../common/Button/Button';
import { StepType } from '../../App';

interface CardInfoFormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  canSubmit: boolean;
  children: React.ReactElement<{ name: StepType }>[];
  step: Record<StepType, boolean>;
}

function CardInfoForm(props: CardInfoFormProps) {
  const { canSubmit, children, step } = props;

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

  return (
    <CardForm>
      {filteredChildren}
      {canSubmit && (
        <CardFormButtonWrapper>
          <Button customStyle={cardFormButtonStyle} text="확인" />
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

const cardFormButtonStyle = {
  width: '376px',
  height: '50px',
  backgroundColor: '#000000',
  color: '#ffffff',
  border: 'none',
  transition: 'background-color 0.3s ease-in-out',
  cursor: 'pointer',

  ':hover': {
    backgroundColor: '#697a9080',
  },
};
