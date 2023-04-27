import { useContext } from 'react';
import CardInfoInput from '../CardInfoInput/CardInfoInput';
import Input from '../Input/Input';
import { CardInfoContext } from '../../context/CardInfoContext';

const CardOwnerName = () => {
  const { cardOwnerName, setCardOwnerName } = useContext(CardInfoContext);

  const checkCardOwnerNameLength = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentCardOwnerName = e.target.value;
    setCardOwnerName(currentCardOwnerName);
  };

  return (
    <CardInfoInput title="카드 소유자 이름 (선택)" numberOfLetter={[cardOwnerName.length, 30]}>
      <Input
        width="100%"
        onChange={checkCardOwnerNameLength}
        maxLength={30}
        value={cardOwnerName}
        name="cardOwnerName"
      />
    </CardInfoInput>
  );
};

export default CardOwnerName;
