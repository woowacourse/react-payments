import { useNavigate } from 'react-router-dom';

import * as styled from './NicknameForm.styled';

import { useCardInfoActions, useCardInfoValue } from '../../../context/CardInfoContext';
import { useCardListActions } from '../../../context/CardListContext';
import useForm from '../../../hooks/useForm';

const NicknameForm = () => {
  const navigate = useNavigate();
  const [cardInfo, { setCardInfo, initCardInfo }] = [useCardInfoValue(), useCardInfoActions()];
  const { setCardList } = useCardListActions();

  const { onChange, onSubmit } = useForm({
    submitAction: () => {
      setCardList((prev) => [cardInfo, ...prev]);
      navigate('/');
      initCardInfo();
    },
    changeAction: (name: string, value: string) => {
      setCardInfo((prev) => ({ ...prev, [name]: value }));
    },
    errorOptions: {},
  });

  return (
    <styled.NicknameForm onSubmit={onSubmit}>
      <styled.NicknameInput name="nickname" onChange={onChange} />
      <styled.NicknameSubmitButton>완료</styled.NicknameSubmitButton>
    </styled.NicknameForm>
  );
};

export default NicknameForm;
