import type { CardCompanyType } from "../../../../../common/types/CardCompany";
import styled from "styled-components";
import { colors } from "../../../../../styles/color";
import CardCompanyOption from "./CardCompanyOption/CardCompanyOption";

const mockCardCompany: CardCompanyType[] = [
  "BC카드",
  "신한카드",
  "카카오뱅크",
  "현대카드",
  "우리카드",
  "롯데카드",
  "하나카드",
  "국민카드",
];

const CardCompanySelectField = ({
  onSelect,
}: {
  onSelect: (cardCompany: CardCompanyType) => void;
}) => {
  return (
    <CardSelectBox>
      <CardSelectTrigger
        defaultValue={""}
        onChange={(e) => onSelect(e.target.value as CardCompanyType)}
      >
        <option value={""} disabled hidden>
          카드사를 선택해주세요
        </option>

        {mockCardCompany.map((cardCompany) => (
          <CardCompanyOption cardCompany={cardCompany} key={cardCompany} />
        ))}
      </CardSelectTrigger>
    </CardSelectBox>
  );
};

export default CardCompanySelectField;

const CardSelectBox = styled.div`
  display: flex;
  position: relative;
`;

const CardSelectTrigger = styled.select`
  appearance: base-select;
  width: 100%;
  border: 1px solid ${colors.border.default};
  border-radius: 4px;
`;
