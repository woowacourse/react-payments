import SectionTitle from "../../../entities/sectionTitle/ui/SectionTitle";
import Select from "../../../shared/select/Select";
import { CardTypeSectionProps } from "../types/CardType.types";
import { CARD_TYPES } from "../constants/CardType.constant";
import { StyledContainer } from "../css/CardTypeSection.css";

export default function CardTypeSection({ cardType }: CardTypeSectionProps) {
  const options = [
    ...Object.entries(CARD_TYPES).map(([key, value]) => ({
      value: key,
      label: value,
    })),
  ];

  return (
    <StyledContainer>
      <SectionTitle
        title="카드사를 선택해 주세요"
        subTitle="현재 국내 카드사만 가능합니다."
      />
      <Select
        onChange={(e) => cardType.changeValues("cardType", e.target.value)}
        value={cardType.values.cardType}
        width="100%"
        options={options}
        placeholder="카드사를 선택해주세요"
      />
    </StyledContainer>
  );
}
