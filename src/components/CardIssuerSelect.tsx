import {
  CARD_ISSUERS,
  CardIssuer,
  cardIssuerMapper,
  isCardIssuer,
} from "../constants/cardIssuers";
import { CaptionText, TitleText } from "../styles/common";

import ErrorMessage from "./ErrorMessage";
import Select from "./Select";
import styled from "styled-components";

const CardIssuerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

const CardIssuerBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const cardIssuerOptions = CARD_ISSUERS.map((cardIssuer) => ({
  value: cardIssuer,
  label: cardIssuerMapper[cardIssuer].label,
}));

interface CardIssuerSelectProps {
  cardIssuer: CardIssuer | "";
  onChange: (inputValue: CardIssuer) => void;
  errorState: { isError: boolean; errorMessage: string };
  updateErrorState: ({
    isError,
    errorMessage,
  }: {
    isError: boolean;
    errorMessage: string;
  }) => void;
}

export default function CardIssuerSelect({
  cardIssuer,
  onChange,
  errorState,
  updateErrorState,
}: CardIssuerSelectProps) {
  const onCardIssuerChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (!isCardIssuer(event.target.value)) {
      return;
    }
    onChange(event.target.value);
    updateErrorState({
      isError: false,
      errorMessage: "",
    });
  };

  const onCardIssuerBlur = () => {
    if (cardIssuer === "") {
      updateErrorState({
        isError: true,
        errorMessage: "카드사를 선택해 주세요",
      });
    }
  };

  return (
    <CardIssuerContainer>
      <div>
        <TitleText>카드사를 선택해 주세요</TitleText>
        <CaptionText>현재 국내 카드사만 가능합니다.</CaptionText>
      </div>
      <CardIssuerBox>
        <Select
          placeholder="카드사를 선택해주세요"
          options={cardIssuerOptions}
          isError={errorState.isError}
          onChange={onCardIssuerChange}
          onBlur={onCardIssuerBlur}
        />
        {errorState.isError && (
          <ErrorMessage message={errorState.errorMessage} />
        )}
      </CardIssuerBox>
    </CardIssuerContainer>
  );
}
