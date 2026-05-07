import { useEffect, useState } from 'react';
import CardPreview from '../components/cardPreview/CardPreview';
import CardNumberSection from '../components/cardNumberSection/CardNumberSection';
import ExpirationDateSection from '../components/expirationDateSection/ExpirationDateSection';
import CvcSection from '../components/cvcSection/CvcSection';
import { getCardBrand, getCardNumberArrayByBrand } from '../utils/Validation';
import CardCompanySection from '../components/cardCompanySection/CardCompanySection';
import PasswordSection from '../components/passwordSection/PasswordSection';
import type { CardCompany } from '../components/cardCompanySection/CardCompanyConstants';
import { useNavigate } from 'react-router-dom';
import { FormLayout, SubmitButton } from './CardAddPage.styles';

const CardAddPage = () => {
  const navigate = useNavigate();

  const [cardNumber, setCardNumber] = useState<string[]>(['', '', '', '']);
  const [cardCompany, setCardCompany] = useState<CardCompany | ''>('');
  const [expirationDate, setExpirationDate] = useState({ month: '', year: '' });
  const [cvc, setCvc] = useState('');
  const [password, setPassword] = useState('');
  const [maxStep, setMaxStep] = useState(1);

  const brand = getCardBrand(cardNumber.join(''));
  const format = getCardNumberArrayByBrand(brand);

  const isCardNumberCorrect =
    cardNumber.length === format.length &&
    cardNumber.every((num, index) => num.length === format[index]);
  const isCardCompanyCorrect = cardCompany !== '';
  const isExpirationDateCorrect =
    expirationDate.month.length === 2 && expirationDate.year.length === 2;
  const isCvcCorrect = cvc.length === 3;
  const isPasswordCorrect = password.length === 2;

  const isFormValid =
    isCardNumberCorrect &&
    isCardCompanyCorrect &&
    isExpirationDateCorrect &&
    isCvcCorrect &&
    isPasswordCorrect;

  useEffect(() => {
    // 올바른 카드번호 입력
    if (isCardNumberCorrect) {
      setMaxStep((prev) => Math.max(prev, 2));
    }
    // 올바른 카드사 입력
    if (isCardNumberCorrect && isCardCompanyCorrect) {
      setMaxStep((prev) => Math.max(prev, 3));
    }
    // 올바른 유효기간 입력
    if (
      isCardNumberCorrect &&
      isCardCompanyCorrect &&
      isExpirationDateCorrect
    ) {
      setMaxStep((prev) => Math.max(prev, 4));
    }
    // 올바른 CVC 입력
    if (
      isCardNumberCorrect &&
      isCardCompanyCorrect &&
      isExpirationDateCorrect &&
      isCvcCorrect
    ) {
      setMaxStep((prev) => Math.max(prev, 5));
    }
  }, [
    isCardNumberCorrect,
    isCardCompanyCorrect,
    isExpirationDateCorrect,
    isCvcCorrect,
  ]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isFormValid) return;
    // 라우팅 페이지 연결
    navigate('/complete', {
      state: { cardNumber, cardCompany, expirationDate, cvc, password },
    });
  };

  return (
    <>
      <CardPreview
        cardNumber={cardNumber}
        expirationDate={expirationDate}
        cardCompany={cardCompany}
      />
      <FormLayout onSubmit={handleSubmit}>
        {maxStep >= 5 && (
          <PasswordSection value={password} setValue={setPassword} />
        )}
        {maxStep >= 4 && <CvcSection value={cvc} setValue={setCvc} />}
        {maxStep >= 3 && (
          <ExpirationDateSection
            value={expirationDate}
            setValue={setExpirationDate}
          />
        )}
        {maxStep >= 2 && (
          <CardCompanySection value={cardCompany} setValue={setCardCompany} />
        )}
        <CardNumberSection value={cardNumber} setValue={setCardNumber} />

        {isFormValid && <SubmitButton type="submit">확인</SubmitButton>}
      </FormLayout>
    </>
  );
};

export default CardAddPage;
