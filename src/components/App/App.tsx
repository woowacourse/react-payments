import CardNumberInput from '../CardNumberInput/CardNumberInput';
import CardExpirationInput from '../CardExpirationInput/CardExpirationInput';
import CardOwnerInput from '../CardOwnerInput/CardOwnerInput';
import CardPreviewBox from '../CardPreview/CardPreview';

import '../../styles/reset.css';
import '../../styles/common.css';

import * as S from './App.style';
import useChangeCardNumbers from '../../hooks/useChangeCardNumbers';
import useChangeOwner from '../../hooks/useChangeOwner';
import useChangeExpireDate from '../../hooks/useChangeExpireDate';

function App() {
  const { cardNumbers, cardNumbersValid, handleChangeCardNumbers } = useChangeCardNumbers();
  const { expireDate, expireMonthValid, expireYearValid, handleChangeDate } = useChangeExpireDate();
  const { owner, ownerValid, handleChangeOwner } = useChangeOwner();

  return (
    <S.AppLayout>
      <S.CardPreviewBox>
        <CardPreviewBox cardNumbers={cardNumbers} month={expireDate.month} year={expireDate.year} owner={owner} />
      </S.CardPreviewBox>
      <S.CardForm>
        <CardNumberInput isCardNumbersValid={cardNumbersValid} onChangeCardNumbers={handleChangeCardNumbers} />
        <CardExpirationInput
          isMonthValid={expireMonthValid}
          isYearValid={expireYearValid}
          onChangeExpireDate={handleChangeDate}
        />
        <CardOwnerInput isOwnerValid={ownerValid} onChangeOwner={handleChangeOwner} />
      </S.CardForm>
    </S.AppLayout>
  );
}

export default App;
