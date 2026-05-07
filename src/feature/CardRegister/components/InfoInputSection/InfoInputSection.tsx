import { useState } from 'react';
import CvcField from './CvcField/CvCField';
import ExpiryField from './ExpiryField/ExpiryField';
import NumberField from './NumberField/NumberField';
import type {
  CardFormHandlersType,
  CardPreviewInfoType,
} from '../../../../common/types/CardPreviewInfoType';
import styled from 'styled-components';
import FieldSection from './FieldSection/FieldSection';
import { hasCardFormError } from '../../utils/cardFormValidator';

const InfoInputSection = ({
  cardPreviewInfo,
  cardFormHandlers,
}: {
  cardPreviewInfo: CardPreviewInfoType;
  cardFormHandlers: CardFormHandlersType;
}) => {
  const [cvcNumber, setCvcNumber] = useState('');
  // const [isError, setIsError] = useState(false);

  const { cardNumbers, expiryMonth, expiryYear } = cardPreviewInfo;
  const { setCardNumbers, setExpiryMonth, setExpiryYear } = cardFormHandlers;

  // if (isError) {
  //   console.log('error');
  // }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const hasError = hasCardFormError({
      cardNumbers,
      expiryMonth,
      expiryYear,
      cvcNumber,
    });

    if (hasError) return;

    // form에 필요한 데이터: 카드번호 첫 4자리, 카드 브랜드
    console.log('제출');
  };

  return (
    <Container onSubmit={handleSubmit}>
      <FieldSection
        title="결제할 카드 번호를 입력해 주세요"
        description="본인 명의의 카드만 결제 가능합니다."
      >
        <NumberField
          cardNumbers={cardNumbers}
          setCardNumbers={setCardNumbers}
        />
      </FieldSection>
      <FieldSection
        title="카드 유효기간을 입력해 주세요"
        description="월/년도(MMYY)를 순서대로 입력해 주세요."
      >
        <ExpiryField
          expiryMonth={expiryMonth}
          expiryYear={expiryYear}
          setExpiryMonth={setExpiryMonth}
          setExpiryYear={setExpiryYear}
        />
      </FieldSection>
      <FieldSection title="CVC 번호를 입력해 주세요">
        <CvcField cvcNumber={cvcNumber} setCvcNumber={setCvcNumber} />
      </FieldSection>
    </Container>
  );
};

const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 30px;

  width: 100%;
`;

export default InfoInputSection;
