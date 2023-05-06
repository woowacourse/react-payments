import CardInfoInput from '../CardInfoInput/CardInfoInput';
import Input from '../Input/Input';
import { useCardStore } from '../../hook/useCardState';

const CardOwnerName = () => {
  const { get, setCardOwnerName } = useCardStore();
  const cardOwnerName = get().cardOwnerName;

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
