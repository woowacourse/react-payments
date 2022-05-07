import styled from 'styled-components';
import SubmitButton from '../../Atoms/SubmitButton';
import NickNameInput from '../../Modules/NickNameInput';
import useCardNickNameForm from '../../../hooks/useCardNickNameForm';

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

function CardNickNameForm({ link }) {
  const { isValidForm, onNickNameSubmit } = useCardNickNameForm(link);

  return (
    <Form onSubmit={onNickNameSubmit}>
      <NickNameInput />
      <SubmitButtonWrapper>
        <SubmitButton hidden={!isValidForm}>확인</SubmitButton>
      </SubmitButtonWrapper>
    </Form>
  );
}

export default CardNickNameForm;
