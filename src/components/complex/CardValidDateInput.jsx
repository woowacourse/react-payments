import { Input, InputContainer } from '..';

import { CardInfoContext } from '../../contexts';
import { NOW } from '../../constants';
import { preventEvent } from '../../utils';

export default function CardValidDateInput() {
  return (
    <CardInfoContext.Consumer>
      {({ validDate, setValidDate }) => (
        <InputContainer>
          <Input
            description="만료일"
            width="200px"
            id="validDate"
            type="month"
            value={validDate}
            min={`${NOW.YEAR}-${NOW.MONTH}`}
            onChangeFunc={setValidDate}
            onKeyDownFunc={preventEvent}
          />
        </InputContainer>
      )}
    </CardInfoContext.Consumer>
  );
}
