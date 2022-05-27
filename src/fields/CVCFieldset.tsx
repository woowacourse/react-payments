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
      </FieldBody>
    </FieldSet>
  );
}

export default CVCFieldset;
