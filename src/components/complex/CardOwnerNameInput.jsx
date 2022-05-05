import styled from 'styled-components';

import { Input } from '..';

import { CARD_RULE } from '../../constants';
import { CardInfoContext } from '../../contexts';

const OwnerNameLength = styled.div`
  color: #525252;
  font-size: 12px;
  float: right;
`;

export default function CardOwnerNameInput() {
  return (
    <CardInfoContext.Consumer>
      {({ cardOwnerName, setCardOwnerName }) => (
        <div>
          <OwnerNameLength>
            {cardOwnerName.length}/{CARD_RULE.OWNER_NAME_MAX_LENGTH}
          </OwnerNameLength>
          <Input
            description="카드 소유자 이름 (선택)"
            placeholder="카드에 표시된 이름과 동일하게 입력하세요."
            value={cardOwnerName}
            maxLength={CARD_RULE.OWNER_NAME_MAX_LENGTH}
            onChangeFunc={setCardOwnerName}
          />
        </div>
      )}
    </CardInfoContext.Consumer>
  );
}
