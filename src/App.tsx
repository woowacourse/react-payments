import CardPreview from './components/CardPreview/CardPreview';
import CardInputSection from './components/cardInfoForm/CardInputSection/CardInputSection';
import CardNumberField from './components/cardInfoForm/CardNumberField/CardNumberField';
import CardValidityPeriodField from './components/cardInfoForm/CardValidityPeriodField/CardValidityPeriodField';
import CardCVCField from './components/cardInfoForm/CardCVCField/CardCVCField';
import { useState } from 'react';

function App() {
  const [cardNumber, setCardNumber] = useState(['', '', '', '']);
  const [isError, setIsError] = useState([false, false, false, false]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>, n: number) => {
    const { value } = e.target;

    if (value.length > 4) {
      return;
    }

    const isNotValid =
      value.length < 4 || value.length > 4 || Number(value) < 0;
    const copyError = [...isError];
    copyError[n] = isNotValid;
    setIsError(copyError);

    const copy = [...cardNumber];
    copy[n] = value;
    setCardNumber(copy);
  };

  const checkCardNumberError = () => {
    return isError.some((v) => v === true);
  };

  const [cardValidityPeriod, setCardValidityPeriod] = useState({
    month: '',
    year: '',
  });
  const [isErrorCardValidityPeriod, setIsErrorCardValidityPeriod] = useState({
    month: false,
    year: false,
  });

  const onChangeCardValidityPeriod = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: 'month' | 'year',
  ) => {
    const { value } = e.target;

    if (type === 'month') {
      if (Number.parseInt(value, 10) > 12 || Number.parseInt(value, 10) < 1) {
        setIsErrorCardValidityPeriod((prev) => ({
          ...prev,
          month: true,
        }));
      } else {
        setIsErrorCardValidityPeriod((prev) => ({
          ...prev,
          month: false,
        }));
      }

      if (value.length < 2) {
        setIsErrorCardValidityPeriod((prev) => ({
          ...prev,
          month: true,
        }));
      }
    } else if (type === 'year') {
      if (
        Number.parseInt(value, 10) <
        Number.parseInt(new Date().getFullYear().toString().slice(2), 10)
      ) {
        setIsErrorCardValidityPeriod((prev) => ({
          ...prev,
          year: true,
        }));
      } else {
        setIsErrorCardValidityPeriod((prev) => ({
          ...prev,
          year: false,
        }));
      }

      if (value.length < 2) {
        setIsErrorCardValidityPeriod((prev) => ({
          ...prev,
          year: true,
        }));
      }
    }

    setCardValidityPeriod((prev) => ({
      ...prev,
      [type]: value.slice(0, 2),
    }));
  };

  const checkCardValidityPeriodError = () => {
    return Object.values(isErrorCardValidityPeriod).some((v) => v === true);
  };

  const [cardCVC, setCardCVC] = useState('');
  const [isCardCVCError, setIsCardCVCError] = useState(false);

  const onChangeCVC = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (value.length > 3) {
      return;
    }

    const isNotValid =
      value.length < 3 || value.length > 3 || Number(value) < 0;

    setIsCardCVCError(isNotValid);
    setCardCVC(value);
  };

  const checkCardCVCError = () => {
    return isCardCVCError;
  };

  return (
    <main>
      <CardPreview
        cardNumber={cardNumber}
        cardValidityPeriod={cardValidityPeriod}
      />
      <form>
        <CardInputSection
          title="결제할 카드 번호 입력"
          description="본인 명의의 카드만 결제 가능합니다."
          errorMessage={
            checkCardNumberError() ? '카드 번호는 16자리입니다.' : ''
          }
        >
          <CardNumberField
            cardNumber={cardNumber}
            isError={isError}
            onChange={onChange}
          />
        </CardInputSection>
        <CardInputSection
          title="카드 유효기간을 입력해 주세요"
          description="월/년도(MMYY)를 순서대로 입력해 주세요."
          errorMessage={
            checkCardValidityPeriodError() ? 'MM/YY는 4자리입니다.' : ''
          }
        >
          <CardValidityPeriodField
            cardValidityPeriod={cardValidityPeriod}
            isError={isErrorCardValidityPeriod}
            onChange={onChangeCardValidityPeriod}
          />
        </CardInputSection>
        <CardInputSection
          title="CVC 번호를 입력해 주세요"
          errorMessage={checkCardCVCError() ? 'CVC는 3자리입니다.' : ''}
        >
          <CardCVCField
            cardCVC={cardCVC}
            isError={isCardCVCError}
            onChange={onChangeCVC}
          />
        </CardInputSection>
      </form>
    </main>
  );
}

export default App;
