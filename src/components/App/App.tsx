import CardNumberInput from '../CardNumberInput/CardNumberInput';
import CardBrandInput from '../CardBrandInput/CardBrandInput';
import CardExpirationInput from '../CardExpirationInput/CardExpirationInput';
import CardOwnerInput from '../CardOwnerInput/CardOwnerInput';
import CardPreviewBox from '../CardPreview/CardPreview';

import { useChangeCardNumbers, useChangeBrand, useChangeExpireDate, useChangeOwner } from '../../hooks';

import '../../styles/reset.css';
import '../../styles/common.css';
import * as S from './App.style';

export default function App() {
  const { cardNumbers, cardNumbersValid, handleChangeCardNumbers } = useChangeCardNumbers();
  const { brand, brandValid, handleChangeBrand } = useChangeBrand();
  const { expireDate, expireMonthValid, expireYearValid, handleChangeDate } = useChangeExpireDate();
  const { owner, ownerValid, handleChangeOwner } = useChangeOwner();

  return (
    <S.AppLayout>
      <S.CardPreviewBox>
        <CardPreviewBox cardNumbers={cardNumbers} month={expireDate.month} year={expireDate.year} owner={owner} />
      </S.CardPreviewBox>
      <S.CardForm>
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
