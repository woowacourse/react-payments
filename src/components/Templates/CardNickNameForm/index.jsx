import styled from 'styled-components';
import SubmitButton from '../../Atoms/SubmitButton';
import NickNameInput from '../../Modules/NickNameInput';

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

function CardNickNameForm() {
  return (
    <Form>
      <NickNameInput />
      <SubmitButtonWrapper>
        <SubmitButton hidden={false}>확인</SubmitButton>
      </SubmitButtonWrapper>
    </Form>
  );
}

export default CardNickNameForm;
