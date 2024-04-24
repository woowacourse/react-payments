import {
  CARD_ISSUERS,
  CardIssuer,
  cardIssuerMapper,
  isCardIssuer,
} from "../constants/cardIssuers";
import { CaptionText, TitleText } from "../styles/common";

import Select from "./Select";
import styled from "styled-components";

const CardIssuerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

const cardIssuerOptions = CARD_ISSUERS.map((cardIssuer) => ({
  value: cardIssuer,
  label: cardIssuerMapper[cardIssuer].label,
}));

interface CardIssuerSelectProps {
  onChange: (inputValue: CardIssuer) => void;
}

export default function CardIssuerSelect({ onChange }: CardIssuerSelectProps) {
  const onCardIssuerChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (!isCardIssuer(event.target.value)) {
      return;
    }
    onChange(event.target.value);
  };

  return (
    <CardIssuerContainer>
      <div>
        <TitleText>카드사를 선택해 주세요</TitleText>
        <CaptionText>현재 국내 카드사만 가능합니다.</CaptionText>
      </div>
      <Select
        options={cardIssuerOptions}
        onChange={onCardIssuerChange}
        placeholder="카드사를 선택해주세요"
      />
    </CardIssuerContainer>
  );
}
