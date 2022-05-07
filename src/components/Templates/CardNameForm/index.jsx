import styled from 'styled-components';
import SubmitButton from '../../Atoms/SubmitButton';
import CardNameInput from '../../Modules/CardNameInput';
import useCardNameForm from '../../../hooks/Form/useCardNameForm';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 234px;
  width: 100%;
`;

const SubmitButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

function CardNameForm({ link }) {
  const { isValidForm, onCardNameSubmit } = useCardNameForm(link);

  return (
    <Form onSubmit={onCardNameSubmit}>
      <CardNameInput />
      <SubmitButtonWrapper>
        <SubmitButton hidden={!isValidForm}>확인</SubmitButton>
      </SubmitButtonWrapper>
    </Form>
  );
}

export default CardNameForm;
