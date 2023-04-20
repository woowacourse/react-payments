import { CardViewer } from '../components/CardViewer';
import { cardDataService } from '../domains/cardDataService';
import { Layout } from '../layout';

export const Main = () => {
  const cardList = cardDataService.getCardList();

  return (
    <Layout>
      <a href="/register">메인 페이지</a>
      {cardList.map((card) => {
        const { cardNumber, expirationDate, ownerName } = card;
        return (
          <CardViewer
            cardNumber={cardNumber}
            expirationDate={expirationDate}
            ownerName={ownerName}
          />
        );
      })}
    </Layout>
  );
};
