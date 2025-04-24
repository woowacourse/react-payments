import SectionTitle from "../../entities/sectionTitle/SectionTitle";
import Select from "../../shared/select/Select";
import { StyledContainer } from "./CardTypeSection.css";

type CardTypeSectionProps = {
  cardType: {
    values: { cardType: string };
    changeValues: (type: "cardType", cardType: string) => void;
    isFullFilled: () => boolean;
  };
};

const cardTypes = {
  BC카드: "BC카드",
  신한카드: "신한카드",
  카카오뱅크: "카카오뱅크",
  현대카드: "현대카드",
  우리카드: "우리카드",
  롯데카드: "롯데카드",
  하나카드: "하나카드",
  국민카드: "국민카드",
};

export default function CardTypeSection({ cardType }: CardTypeSectionProps) {
  const options = [
    { value: "", label: "카드사를 선택해주세요", default: true },
    ...Object.entries(cardTypes).map(([key, value]) => ({
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
      />
    </StyledContainer>
  );
}
