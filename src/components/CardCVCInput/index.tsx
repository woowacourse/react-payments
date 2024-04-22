import React, { useState } from 'react';

import { CARD_CVC_MESSAGE } from '../../constants';
import CardInputSection from '../CardInputSection';
import Input from '../Input';

function CardCVCInput() {
  const [cvcError, setCVCError] = useState(false);

  return (
    <CardInputSection
      title={CARD_CVC_MESSAGE.title}
      childrenLabel={CARD_CVC_MESSAGE.label}
    >
      <Input
        label={CARD_CVC_MESSAGE.label}
        placeholder={CARD_CVC_MESSAGE.placeholder}
        error={cvcError}
      />
    </CardInputSection>
  );
}

export default CardCVCInput;
