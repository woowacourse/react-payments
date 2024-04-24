import { CaptionText, TitleText } from "../styles/common";
import { CardIssuer, isCardIssuer } from "../types/cardInformation";

import Select from "./Select";
import styled from "styled-components";

const CardIssuerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

interface CardIssuerOption {
  value: CardIssuer;
  label: string;
}

const cardIssuerOptions: Array<CardIssuerOption> = [
  { value: "bc-card", label: "BC카드" },
  { value: "shinhan-card", label: "신한카드" },
  { value: "kakaobank-card", label: "카카오뱅크" },
  { value: "hyundai-card", label: "현대카드" },
  { value: "woori-card", label: "우리카드" },
  { value: "lotte-card", label: "롯데카드" },
  { value: "hana-card", label: "하나카드" },
  { value: "kb-card", label: "국민카드" },
] as const;

interface CardIssuerSelectProps {
  onChange: (inputValue: CardIssuer) => void;
}

export default function CardIssuerSelect({ onChange }: CardIssuerSelectProps) {
  const handleIssuerChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
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
        onChange={handleIssuerChange}
        placeholder="카드사를 선택해주세요"
      />
    </CardIssuerContainer>
  );
}
