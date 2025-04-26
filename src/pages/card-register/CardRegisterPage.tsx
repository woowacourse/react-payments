import { useRef, useState } from 'react';
import styled from '@emotion/styled';
import CardNumbers from '../../components/CardNumbers';
import ExpirationPeriod from '../../components/ExpirationPeriod';
import CVCNumbers from '../../components/CVCNumbers';
import Preview from '../../components/Preview';
import CardBrandSelector from '../../components/CardBrand/CardBrandSelector';
import CardPassword from '../../components/CardPassword';
import SubmitButton from '../../components/SubmitButton/SubmitButton';
import CardRegisterForm from '../../components/CardRegisterForm/CardRegisterForm';

type CardNumber = {
  first: string;
  second: string;
  third: string;
  fourth: string;
};

type Period = {
  month: string;
  year: string;
};

const CardRegisterPage = () => {
  const [cardNumbers, setCardNumbers] = useState<CardNumber>({
    first: '',
    second: '',
    third: '',
    fourth: '',
  });
  const [period, setPeriod] = useState<Period>({
    month: '',
    year: '',
  });
  const [cvcNumbers, setCvcNumbers] = useState<string>('');
  const separatorRef = useRef<HTMLDivElement>(null);
  const [cardFrameColor, setCardFrameColor] = useState('#333333');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [isCardNumbersFilled, setIsCardNumbersFilled] = useState(false);
  const [isPeriodFilled, setIsPeriodFilled] = useState(false);
  const [passwordNumbers, setPasswordNumbers] = useState('');
  const [isCVCFilled, setIsCVCFilled] = useState(false);
  //유효성 검증을 관리하는 상태
  const [cardNumbersError, setCardNumbersError] = useState(false);
  const [expirationPeriodError, setExpirationPeriodError] = useState(false);
  const [cvcError, setCvcError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const isAllValid =
    !cardNumbersError &&
    !expirationPeriodError &&
    !cvcError &&
    !passwordError &&
    isCardNumbersFilled &&
    selectedBrand &&
    isPeriodFilled &&
    isCVCFilled &&
    passwordNumbers.length === 2;

  return (
    <Main>
      <Preview
        cardNumbers={cardNumbers}
        period={period}
        separatorRef={separatorRef}
        cardFrameColor={cardFrameColor}
      />
      <CardRegisterForm>
        {isCVCFilled && (
          <CardPassword
            passwordNumbers={passwordNumbers}
            setPasswordNumbers={setPasswordNumbers}
            setPasswordError={setPasswordError}
          ></CardPassword>
        )}
        {isPeriodFilled && (
          <CVCNumbers
            cvcNumbers={cvcNumbers}
            setCvcNumbers={setCvcNumbers}
            onComplete={() => setIsCVCFilled(true)}
            setCvcError={setCvcError}
          />
        )}
        {selectedBrand && (
          <ExpirationPeriod
            period={period}
            setPeriod={setPeriod}
            separatorRef={separatorRef}
            onComplete={() => setIsPeriodFilled(true)}
            setExpirationPeriodError={setExpirationPeriodError}
          />
        )}
        {isCardNumbersFilled && (
          <CardBrandSelector
            setCardFrameColor={setCardFrameColor}
            setSelectedBrand={setSelectedBrand}
          />
        )}
        <CardNumbers
          cardNumbers={cardNumbers}
          setCardNumbers={setCardNumbers}
          onComplete={() => setIsCardNumbersFilled(true)}
          setCardNumbersError={setCardNumbersError}
        />

        {isAllValid && (
          <SubmitButton
            cardFirstPartNumbers={cardNumbers.first}
            cardBrandName={selectedBrand}
          >
            확인
          </SubmitButton>
        )}
      </CardRegisterForm>
    </Main>
  );
};

export default CardRegisterPage;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 43px 28px 0;
  margin: 0 auto;
  width: 376px;
  height: auto;
  min-height: 100dvh;
  background-color: #f9f9f9;
  gap: 24px;
  padding-bottom: 52px;
`;
