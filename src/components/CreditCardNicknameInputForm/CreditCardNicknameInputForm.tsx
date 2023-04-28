/* eslint-disable @typescript-eslint/no-unused-vars */
import Box from 'components/Box';
import CreditCard from 'components/CreditCard/CreditCard';
import FlexBox from 'components/FlexBox';
import useCreditCardList from 'hooks/useCreditCardList';
import { useEffect, useState } from 'react';
import * as T from 'types';

interface CreditCardNicknameInputFormProps {
  creditCardForm: T.CreditCard;
}
function CreditCardNicknameInputForm({ creditCardForm }: CreditCardNicknameInputFormProps) {
  return (
    <FlexBox justifyContent="center">
      <CreditCard
        fullFilled
        creditCard={{
          companyId: creditCardForm.companyId,
          number: creditCardForm.number,
          expiry: creditCardForm.expiry,
          owner: creditCardForm.owner,
        }}
      />
    </FlexBox>

  );
}
export default CreditCardNicknameInputForm;
