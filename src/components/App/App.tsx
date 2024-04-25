import { useState } from 'react';

import CardNumberInput from '../CardNumberInput/CardNumberInput';
import CardBrandInput from '../CardBrandInput/CardBrandInput';
import CardExpirationInput from '../CardExpirationInput/CardExpirationInput';
import CardOwnerInput from '../CardOwnerInput/CardOwnerInput';
import CardCVCInput from '../CardCVCInput/CardCVCInput';
import CardPINInput from '../CardPINInput/CardPINInput';
import CardPreviewBox from '../CardPreview/CardPreview';

import {
  useChangeCardNumbers,
  useChangeBrand,
  useChangeExpireDate,
  useChangeOwner,
  useChangeCVC,
  useChangePIN,
} from '../../hooks';

import '../../styles/reset.css';
import '../../styles/common.css';
import * as S from './App.style';

export default function App() {
  const { cardNumbers, cardNumbersValid, handleChangeCardNumbers } = useChangeCardNumbers();
  const { brand, brandValid, handleChangeBrand } = useChangeBrand();
  const { expireDate, expireMonthValid, expireYearValid, handleChangeDate } = useChangeExpireDate();
  const { owner, ownerValid, handleChangeOwner } = useChangeOwner();
  const { CVC, CVCValid, handleChangeCVC } = useChangeCVC();
  const { PINValid, handleChangePIN } = useChangePIN();

  const [showCardBackside, setShowCardBackside] = useState(false);

  const handleShowCardBackside = (isCVCFocus: boolean) => {
    setShowCardBackside(isCVCFocus);
  };

  return (
    <S.AppLayout>
      <S.CardPreviewBox>
        <CardPreviewBox
          cardNumbers={cardNumbers}
          brand={brand}
          month={expireDate.month}
          year={expireDate.year}
          owner={owner}
          CVC={CVC}
          showCardBackside={showCardBackside}
        />
      </S.CardPreviewBox>

      <S.CardForm>
        <CardPINInput isPINValid={PINValid} onChangePIN={handleChangePIN} />
        <CardCVCInput isCVCValid={CVCValid} onChangeCVC={handleChangeCVC} onChangeFocusCVC={handleShowCardBackside} />
        <CardOwnerInput isOwnerValid={ownerValid} onChangeOwner={handleChangeOwner} />
        <CardExpirationInput
          isMonthValid={expireMonthValid}
          isYearValid={expireYearValid}
          onChangeExpireDate={handleChangeDate}
        />
        <CardBrandInput isBrandValid={brandValid} onChangeBrand={handleChangeBrand} />
        <CardNumberInput isCardNumbersValid={cardNumbersValid} onChangeCardNumbers={handleChangeCardNumbers} />
      </S.CardForm>
    </S.AppLayout>
  );
}
