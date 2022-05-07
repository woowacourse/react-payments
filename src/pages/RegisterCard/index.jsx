import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useInputValue from '../../hooks/useInputValue';
import Card from '../../components/Card';
import LinkButton from '../../components/LinkButton';
import * as styled from './index.styled';

const RegisterCard = () => {
  const navigate = useNavigate();
  const state = useLocation().state;
  const [alias, _, onChangeAlias] = useInputValue();
  useEffect(() => {
    if (!state) navigate('/');
  }, [state, navigate]);

  const onSubmitCardInformation = () => {};

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
        <LinkButton onClick={onSubmitCardInformation} to="/">
          확인
        </LinkButton>
      </styled.ButtonContainer>
    </styled.Container>
  ) : null;
};

export default RegisterCard;
