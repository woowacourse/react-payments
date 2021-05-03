import { useHistory, useLocation, Redirect, useRouteMatch, Link } from 'react-router-dom';
import Styled from './CardAddComplete.styles';
import { Card, Input, Button, Spinner } from '../../components';
import { API, MESSAGE, ROUTE } from '../../constants';
import { useFetch, useInput } from '../../hooks';
import { ScreenContainer } from '../../styles/common.styles';

const CardAddComplete = () => {
  const history = useHistory();
  const location = useLocation();
  const { path } = useRouteMatch();

  const nickname = useInput('');
  const [updateCard, fetchUpdateCard] = useFetch(`${API.BASE_URL}/${location?.state?.card?.id}`, {
    method: API.METHOD.PUT,
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
        alert(MESSAGE.NICKNAME_SUBMIT_FAILED);
      }
    }

    history.push(ROUTE.HOME);
  };

  return (
    <ScreenContainer>
      <Styled.Container>
        <Styled.Header>
          {path === ROUTE.COMPLETE && MESSAGE.CARD_ADD_COMPLETE}
          {path === ROUTE.EDIT && MESSAGE.CARD_NICKNAME_EDIT}
        </Styled.Header>
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
            {path === ROUTE.EDIT && (
              <Button as={Link} to="/">
                취소
              </Button>
            )}
            {updateCard.status === API.STATUS.PENDING ? <Spinner /> : <Button>확인</Button>}
          </Styled.ButtonContainer>
        </form>
      </Styled.Container>
    </ScreenContainer>
  );
};

export default CardAddComplete;
