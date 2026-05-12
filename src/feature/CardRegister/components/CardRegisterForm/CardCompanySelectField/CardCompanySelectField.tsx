import type { CardCompanyType } from "../../../../../common/types/CardCompany";
import styled from "styled-components";
import { colors } from "../../../../../styles/color";

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
        required
        defaultValue=""
        onChange={(e) => onSelect(e.target.value as CardCompanyType)}
        autoFocus
      >
        <option value={""} disabled hidden>
          카드사를 선택해주세요
        </option>

        {mockCardCompany.map((cardCompany) => (
          <CardCompanyOption value={cardCompany} key={cardCompany}>
            {cardCompany}
          </CardCompanyOption>
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
  padding: 8px;
  border: 1px solid ${colors.border.default};
  border-radius: 4px;
  background: white;
  font-size: 12px;

  &::picker(select) {
    appearance: base-select;

    top: calc(anchor(bottom) + 4px);

    border: 1px solid ${colors.border.default};
    border-radius: 4px;
    background: white;
  }

  &:focus,
  &:open {
    border-color: ${colors.border.focus};
    outline: none;
  }

  &:focus::picker-icon,
  &:open::picker-icon {
    color: ${colors.border.focus};
  }

  &:open::picker-icon {
    rotate: 225deg;
  }

  &::picker-icon {
    content: "";
    margin-right: 4px;
    box-sizing: border-box;
    width: 10px;
    height: 10px;
    rotate: 45deg;
    border-right: 2px solid currentColor;
    border-bottom: 2px solid currentColor;
    color: ${colors.border.default};
    translate: 0 2px;

    transition:
      rotate 0.18s ease,
      color 0.18s ease;
  }

  &:invalid {
    color: #acacac;
  }
`;

const CardCompanyOption = styled.option`
  width: 100%;
  color: #4f4f4f;

  &:hover {
    background-color: #ededed;
  }
`;
