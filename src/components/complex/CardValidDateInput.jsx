import CARD_RULE from '../../constants';
import { Input } from '../common';

export default function CardValidDateInput({ validDate, setValidDate }) {
  return (
    <div>
      <Input
        description="만료일"
        placeholder="MM / YY"
        width="137px"
        value={validDate}
        maxLength={CARD_RULE.VALID_DATE_MAX_LENGTH + 1}
        onChangeFunc={setValidDate}
      />
    </div>
  );
}
