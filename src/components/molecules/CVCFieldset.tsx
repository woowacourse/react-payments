import React from 'react';
import { css } from '@emotion/react';
import CVCInputContainer from '../atoms/card-cvc/CVCInputContainer';
import CardFormLabel from '../atoms/CardFormLabel';
import { FieldHead, FieldSet, FieldBody } from '../templates/Fieldset';

const bodyStyle = css({
  display: 'flex',
  justifyContent: 'flex-start',
});

function CVCFieldset() {
  return (
    <FieldSet>
      <FieldHead>
        <CardFormLabel>보안 코드(CVC/CVV)</CardFormLabel>
      </FieldHead>
      <FieldBody stlye={bodyStyle}>
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
