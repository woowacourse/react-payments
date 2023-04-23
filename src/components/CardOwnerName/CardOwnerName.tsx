import { useState } from 'react';
import CardInfoInput from '../CardInfoInput/CardInfoInput';
import Input from '../Input/Input';

type CardOwnerNameProps = {
  updateCardOwnerName: (cardOwnerName: string) => void;
};

const CardOwnerName = ({ updateCardOwnerName }: CardOwnerNameProps) => {
  const [cardOwnerName, setCardOwnerName] = useState('');

  const checkCardOwnerNameLength = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentCardOwnerName = e.target.value;

    setCardOwnerName(currentCardOwnerName);
    updateCardOwnerName(currentCardOwnerName);
  };

  return (
    <CardInfoInput title="카드 소유자 이름 (선택)" numberOfLetter={{ current: cardOwnerName.length, max: 30 }}>
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
