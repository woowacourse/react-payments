import { Input } from '../common';

import CARD_RULE from '../../constants';
import { CardInfoContext } from '../../contexts';

export default function CardValidDateInput() {
  return (
    <CardInfoContext.Consumer>
      {({ validDate, setValidDate }) => (
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
      )}
    </CardInfoContext.Consumer>
  );
}
