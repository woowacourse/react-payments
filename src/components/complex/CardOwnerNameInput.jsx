import React from 'react';
import styled from 'styled-components';

import { Input } from '../common';
import RULE from '../../constants';

const OwnerNameLength = styled.div`
  color: #525252;
  font-size: 12px;
  float: right;
`;

export default function CardOwnerNameInput({ ownerName, setOwnerName }) {
  return (
    <div>
      <OwnerNameLength>
        {ownerName.length}/{RULE.CARD_OWNER_NAME_MAX_LENGTH}
      </OwnerNameLength>
      <Input
        description="카드 소유자 이름 (선택)"
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        value={ownerName}
        onChangeFunc={setOwnerName}
      />
    </div>
  );
}
