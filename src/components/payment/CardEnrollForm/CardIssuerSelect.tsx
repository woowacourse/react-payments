import {
  CARD_ISSUERS,
  CardIssuer,
  cardIssuerMapper,
} from "../../../constants/cardIssuers";
import { CaptionText, TitleText } from "../../../styles/common";

import { CardIssuerErrorState } from "../../../hooks/useCardIssuer";
import ErrorMessage from "../../common/ErrorMessage";
import Select from "../../common/Select";
import styled from "styled-components";

export interface CardIssuerSelectProps {
  valueState: CardIssuer | "";
  errorState: CardIssuerErrorState;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onBlur: (event: React.FocusEvent<HTMLSelectElement>) => void;
}

export default function CardIssuerSelect({
  errorState,
  onChange,
  onBlur,
}: CardIssuerSelectProps) {
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
          onChange={onChange}
          onBlur={onBlur}
        />
        {errorState.isError && (
          <ErrorMessage message={errorState.errorMessage} />
        )}
      </CardIssuerBox>
    </CardIssuerContainer>
  );
}

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
