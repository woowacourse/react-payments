import { useContext } from 'react';
import styled from 'styled-components';
import SubmitButton from '../../Atoms/SubmitButton';
import NickNameInput from '../../Modules/NickNameInput';
import { NickNameContext } from '../../../context/NickNameContext';
import { useNavigate } from 'react-router';

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
  const nickNameProps = useContext(NickNameContext);

  const navigator = useNavigate();

  const onNickNameSubmit = event => {
    event.preventDefault();

    nickNameProps.validation
      ? navigator('/react-payments/cardList')
      : alert('카드 이름을 입력해주세요.');
  };

  return (
    <Form onSubmit={onNickNameSubmit}>
      <NickNameInput {...nickNameProps} />
      <SubmitButtonWrapper>
        <SubmitButton hidden={false}>확인</SubmitButton>
      </SubmitButtonWrapper>
    </Form>
  );
}

export default CardNickNameForm;
