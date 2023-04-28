/* eslint-disable @typescript-eslint/no-unused-vars */
import CreditCard from 'components/CreditCard/CreditCard';
import PreviewCreditCard from 'components/PreviewCreditCard';
import useCreditCardList from 'hooks/useCreditCardList';
import { useEffect, useState } from 'react';
import * as T from 'types';

interface CreditCardNicknameInputFormProps {
  creditCardForm: T.CreditCard;
}
function CreditCardNicknameInputForm({ creditCardForm }: CreditCardNicknameInputFormProps) {
  return (
    <PreviewCreditCard>
      <CreditCard
        fullFilled
        creditCard={{
          companyId: creditCardForm.companyId,
          number: creditCardForm.number,
          expiry: creditCardForm.expiry,
          owner: creditCardForm.owner,
        }}
      />
    </PreviewCreditCard>

  );
}
export default CreditCardNicknameInputForm;
