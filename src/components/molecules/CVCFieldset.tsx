import React from 'react';
import CVCInputContainer from '../atoms/card-cvc/CVCInputContainer';
import { FieldHead, FieldSet, FieldBody } from '../templates/Fieldset';

function CVCFieldset() {
  return (
    <FieldSet>
      <FieldHead>
        <label htmlFor="card-cvc-input">보안 코드(CVC/CVV)</label>
      </FieldHead>
      <FieldBody>
        <div className="d-flex align-items-center">
          <CVCInputContainer />
          <div className="helptip">
            <div className="helptip-content">
              CVC(Card Validation Code)는 Visa, MasterCard, Discover 카드의 뒷면과 아메리칸
              익스프레스 카드의 앞면에 있는 3자리 또는 4자리 코드이다.
            </div>
          </div>
        </div>
      </FieldBody>
    </FieldSet>
  );
}

export default CVCFieldset;
