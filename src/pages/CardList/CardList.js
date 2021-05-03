import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Styled from './CardList.styles';
import { Card, CardAddButton, Header, Spinner, ErrorPage } from '../../components';
import { API, MESSAGE, ROUTE } from '../../constants';
import { ScreenContainer } from '../../styles/common.styles';
import { useFetch, useModal } from '../../hooks';

const CardList = () => {
  const [selectedCardId, setSelectedCardId] = useState(null);
  const { Modal, openModal, closeModal } = useModal();

  const [cardList, fetchCardList] = useFetch(API.BASE_URL);
  const [deleteCard, fetchDeleteCard] = useFetch(`${API.BASE_URL}/${selectedCardId}`, {
    method: API.METHOD.DELETE,
  });

  const sortedCardList = [...(cardList.data || [])].sort((a, b) =>
    b.createdAt.localeCompare(a.createdAt)
  );

  const handleDeleteCard = async () => {
    if (window.confirm(MESSAGE.CARD_DELETE_CONFIRM)) {
      try {
        await fetchDeleteCard();
        fetchCardList();
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
      }
    }

    closeModal();
  };

  const handleOpenCardMenu = (cardId) => {
    setSelectedCardId(cardId);
    openModal();
  };

  useEffect(() => {
    fetchCardList();
  }, [fetchCardList]);

  return (
    <ScreenContainer>
      <Header text="보유카드" />
      <Styled.Container>
        {cardList.status === API.STATUS.PENDING && (
          <Styled.Spinner>
            <Spinner />
          </Styled.Spinner>
        )}
        {cardList.status === API.STATUS.SUCCESS && cardList.data && (
          <Styled.CardList>
            <Styled.CardItem noCardName>
              <Link to={ROUTE.ADD}>
                <CardAddButton />
              </Link>
            </Styled.CardItem>
            {sortedCardList?.map?.((card) => {
              const {
                id,
                cardNumbers,
                cardCompanyName,
                cardCompanyColor,
                ownerName,
                expiryDate,
                nickname,
              } = card;

              return (
                <Styled.CardItem key={id} onClick={() => handleOpenCardMenu(id)}>
                  <Card
                    bgColor={cardCompanyColor}
                    companyName={cardCompanyName}
                    cardNumbers={cardNumbers}
                    ownerName={ownerName}
                    expiryDate={expiryDate}
                  />
                  <Styled.CardNickName>{nickname}</Styled.CardNickName>
                </Styled.CardItem>
              );
            })}
          </Styled.CardList>
        )}
        {cardList.status === API.STATUS.FAILURE && (
          <ErrorPage message={MESSAGE.ERROR_PAGE_CARD_LIST} />
        )}
      </Styled.Container>
      <Modal mobile>
        <Styled.CardMenu>
          <Styled.CardMenuItem>카드 별칭 수정</Styled.CardMenuItem>

          {deleteCard.status === API.STATUS.PENDING ? (
            <Styled.CardMenuItem>
              <Spinner />
            </Styled.CardMenuItem>
          ) : (
            <Styled.CardMenuItem delete onClick={handleDeleteCard}>
              카드 삭제
            </Styled.CardMenuItem>
          )}
        </Styled.CardMenu>
      </Modal>
    </ScreenContainer>
  );
};

export default CardList;
