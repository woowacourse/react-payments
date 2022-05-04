import CARD_RULE from '../../constants';
import { Input } from '../common';

export default function CardNumberInput({ number, setNumber }) {
  return (
    <div>
      <Input
        description="카드 번호"
        value={number}
        maxLength={CARD_RULE.NUMBER_MAX_LENGTH + 3}
        onChangeFunc={setNumber}
      />
    </div>
  );
}
