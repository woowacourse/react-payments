import styled from 'styled-components';
import SubmitButton from '../../Atoms/SubmitButton';

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 19px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

function CardAddForm({ isValidForm, onCardInfoSubmit, children }) {
  return (
    <FormWrapper onSubmit={onCardInfoSubmit}>
      {children}
      <ButtonWrapper>
        <SubmitButton hidden={!isValidForm}>다음</SubmitButton>
      </ButtonWrapper>
    </FormWrapper>
  );
}

export default CardAddForm;
