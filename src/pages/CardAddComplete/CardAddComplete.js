import { useHistory, useLocation, Redirect } from 'react-router-dom';
import Styled from './CardAddComplete.styles';
import { Card, Input, Button, Spinner } from '../../components';
import { API, MESSAGE, ROUTE } from '../../constants';
import { useFetch, useInput } from '../../hooks';
import { ScreenContainer } from '../../styles/common.styles';

const CardAddComplete = () => {
  const history = useHistory();
  const location = useLocation();
  const nickname = useInput('');
  const [updateCard, fetchUpdateCard] = useFetch(`${API.BASE_URL}/${location?.state?.card?.id}`, {
    method: 'put',
  });

  if (!location.state?.card) return <Redirect to={ROUTE.HOME} />;

  const {
    cardCompanyName,
    cardCompanyColor,
    ownerName,
    expiryDate,
    cardNumbers,
  } = location.state.card;

  const handleSubmit = async (event) => {
    event.preventDefault();

    const targetCard = location.state.card;

    if (nickname.value) {
      targetCard.nickname = nickname.value;
      const response = await fetchUpdateCard(targetCard);

      if (response.status === API.STATUS.FAILURE) {
        // eslint-disable-next-line no-alert
        alert('카드는 등록되었지만 닉네임을 설정하지 못했어요! 추후에 닉네임을 수정해주세요');
      }
    }

    history.push(ROUTE.HOME);
  };

  return (
    <ScreenContainer>
      <Styled.Container>
        <Styled.Header>{MESSAGE.CARD_ADD_COMPLETE}</Styled.Header>
        <Card
          size="large"
          bgColor={cardCompanyColor}
          companyName={cardCompanyName}
          cardNumbers={cardNumbers}
          ownerName={ownerName}
          expiryDate={expiryDate}
        />
        <form onSubmit={handleSubmit}>
          <Styled.InputContainer>
            <Input
              simple
              textAlign="center"
              placeholder="카드 별칭 (선택)"
              autoFocus
              maxLength={10}
              value={nickname.value}
              onChange={nickname.onChange}
            />
          </Styled.InputContainer>
          <Styled.ButtonContainer>
            {updateCard.status === API.STATUS.PENDING ? <Spinner /> : <Button>확인</Button>}
          </Styled.ButtonContainer>
        </form>
      </Styled.Container>
    </ScreenContainer>
  );
};

export default CardAddComplete;
