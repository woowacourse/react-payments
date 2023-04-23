import CardItem from '../components/CardItem/CardItem';
import Button from '../components/common/Button/Button';
import Input from '../components/common/Input/Input';
import { Issuer } from '../types';

function CardRegisteredPage() {
  const cardInformation = {
    issuer: '신한카드' as Issuer,
    cardNumber: '1234123412341234',
    expirationDate: {
      month: '05',
      year: '23',
    },
    ownerName: 'ASHLEY',
  };

  return (
    <>
      <h1>카드 등록이 완료되었습니다</h1>
      <CardItem
        information={{
          issuer: cardInformation.issuer,
          cardNumber: cardInformation.cardNumber,
          expirationDate: cardInformation.expirationDate,
          ownerName: cardInformation.ownerName,
        }}
      />
      <Input variant="underline" />
      <Button variant="primary">완료</Button>
    </>
  );
}

export default CardRegisteredPage;
