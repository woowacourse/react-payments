import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useInputValue from '../../hooks/useInputValue';
import Card from '../../components/Card';
import Button from '../../components/Button';
import * as styled from './index.styled';
import { API_ADD_CARD } from '../../api';

// fetch('https://moonheekim-payments-server.herokuapp.com/cards/', {
// methods: 'DELETE',
// })

const RegisterCard = () => {
  const navigate = useNavigate();
  const state = useLocation().state;

  const [isLoading, setIsLoading] = useState(false);

  const [alias, _, onChangeAlias] = useInputValue();
  useEffect(() => {
    if (!state) navigate('/');
  }, [state, navigate]);

  const onSubmitCardInformation = () => {
    setIsLoading(true);
    API_ADD_CARD({ ...state, alias }).then(() => {
      setIsLoading(false);
      navigate('/');
    });
  };

  return state ? (
    <styled.Container>
      <h3>카드 등록이 완료되었습니다.👏🏻</h3>
      <Card
        firstCardNumber={state.firstCardNumber}
        secondCardNumber={state.secondCardNumber}
        thirdCardNumber={state.thirdCardNumber}
        fourthCardNumber={state.fourthCardNumber}
        expiredMonth={state.expiredMonth}
        expiredYear={state.expiredYear}
        cardType={state.cardType}
        ownerName={state.ownerName}
      />
      <styled.CardAliasInput
        value={alias}
        onChange={onChangeAlias}
        placeholder="카드 별칭을 입력해주세요"
      />
      <styled.ButtonContainer>
        <Button onClick={onSubmitCardInformation} disabled={!isLoading}>
          {isLoading ? '등록중' : '확인'}
        </Button>
      </styled.ButtonContainer>
    </styled.Container>
  ) : null;
};

export default RegisterCard;
