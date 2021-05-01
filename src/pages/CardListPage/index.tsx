import { useCards } from '../../context/CardContext';
import CreditCard from '../../components/shared/CreditCard';
import CardList from '../../components/cardList';
import Template from '../../components/shared/Template';
import { CARD_LIST_PAGE_TITLE } from '../../constants/title';

const CardListPage = () => {
  const { cards } = useCards();

  return (
    <Template title={CARD_LIST_PAGE_TITLE}>
      <CardList>
        {cards.map(card => (
          <li key={card.id} data-id={card.id}>
            <CreditCard
              cardBrand={card.cardBrand}
              ownerName={card.ownerName}
              cardNumber={card.cardNumber}
              expDate={card.expDate}
              nickname={card.nickname}
            />
            <span className="nickname">{card.nickname}</span>
          </li>
        ))}
      </CardList>
    </Template>
  );
};

export default CardListPage;
