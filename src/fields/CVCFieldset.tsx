import React from 'react';

import CardFormLabel from 'components/card/CardFormLabel';
import CVCInputContainer from 'containers/card/CVCInputContainer';

import { FieldBody, FieldHead, FieldSet } from './style';

function CVCFieldset() {
  return (
    <FieldSet>
      <FieldHead style={{ marginBottom: '10px' }}>
        <CardFormLabel>보안 코드(CVC/CVV)</CardFormLabel>
      </FieldHead>
      <FieldBody style={{ marginBottom: '20px' }}>
        <CVCInputContainer />
        <div className="helptip">
          <div className="helptip-content">
            CVC(Card Validation Code)는 Visa, MasterCard, Discover 카드의 뒷면과 아메리칸 익스프레스
            카드의 앞면에 있는 3자리 또는 4자리 코드이다.
          </div>
        </div>
      </FieldBody>
    </FieldSet>
  );
}

export default CVCFieldset;
