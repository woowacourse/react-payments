import React, { useRef } from 'react';
import CardInputSection from '../CardInputSection/CardInputSection';
import CardPasswordField from '../../cardInfoFields/CardPasswordField/CardPasswordField';

interface CardPasswordSectionProps {
  cardPassword: string;
  onChangeCardPassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isError: boolean;
  errorMessage: string;
  isValid: () => void;
}

function CardPasswordSection({
  cardPassword,
  onChangeCardPassword,
  isError,
  errorMessage,
  isValid,
}: CardPasswordSectionProps) {
  const showRef = useRef(false);

  if (!showRef.current && isValid()) {
    showRef.current = true;
  }
  const show = showRef.current;

  return (
    <>
      {show ? (
        <CardInputSection
          title="비밀번호를 입력해 주세요"
          description="앞의 2자리를 입력해주세요"
          errorMessage={errorMessage}
        >
          <CardPasswordField
            cardPassword={cardPassword}
            isError={isError}
            onChange={onChangeCardPassword}
          />
        </CardInputSection>
      ) : null}
    </>
  );
}

export default CardPasswordSection;
