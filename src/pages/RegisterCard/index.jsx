import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useInputValue from '../../hooks/useInputValue';
import useAPI from '../../hooks/useAPI';
import Card from '../../components/Card';
import Button from '../../components/Button';
import * as Styled from './index.styled';
import { ENDPOINT, METHODS, PATH } from '../../constant';

const RegisterCard = () => {
  const navigate = useNavigate();
  const state = useLocation().state;

  const { isLoading, apiRequest, isError } = useAPI({
    uri: ENDPOINT,
    method: METHODS.POST,
  });

  const [alias, _, onChangeAlias] = useInputValue();
  useEffect(() => {
    if (!state) navigate(PATH.HOME);
  }, [state, navigate]);

  const onSubmitCardInformation = () => {
    apiRequest({
      body: JSON.stringify({ ...state, alias }),
      headers: { 'Content-Type': 'application/json' },
    }).then(() => {
      navigate(PATH.HOME);
    });
  };

  return state ? (
    <Styled.Container>
      {isError ? (
        <h3>죄송합니다. 잠시 후에 다시 시도해주세요.</h3>
      ) : (
        <h3>카드 등록이 완료되었습니다.👏🏻</h3>
      )}
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
      <Styled.CardAliasInput
        value={alias}
        onChange={onChangeAlias}
        placeholder="카드 별칭을 입력해주세요"
      />
      <Styled.ButtonContainer>
        <Button onClick={onSubmitCardInformation} disabled={isLoading}>
          {isLoading ? '등록중' : '확인'}
        </Button>
      </Styled.ButtonContainer>
    </Styled.Container>
  ) : null;
};

export default RegisterCard;
