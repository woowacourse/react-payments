import Card from '../../components/Card';
import { useCurrentCardContext } from '../../context/CurrentCardProvider';

const CardAliasPage = () => {
  const { currentCard } = useCurrentCardContext();
  return (
    <div>
      <h2>카드 등록이 완료되었습니다.</h2>
      <Card
        cardType={currentCard.cardType}
        cardFirstNumber={currentCard.cardNumber.first}
        cardSecondNumber={currentCard.cardNumber.second}
        cardThirdNumber={currentCard.cardNumber.third}
        cardFourthNumber={currentCard.cardNumber.fourth}
        cardOwner={currentCard.cardOwner}
        expireMonth={currentCard.expireMonth}
        expireYear={currentCard.expireYear}
      />
      ;
    </div>
  );
};

export default CardAliasPage;
