import styled from "@emotion/styled";
import { COLOR_PALETTE } from "@/styles/colorPalette";
import arrowDownIcon from "@/assets/arrowDownIcon.svg";
import { useEffect, useRef, useState } from "react";
import { CARD_COMPANIES } from "@/constants/cardCompanies";
import type { CardCompany } from "@/constants/cardCompanies";
import FormField from "@components/common/FormField";
import type { AddCardFormStepKey } from "@/constants/addCardForm";

interface CardCompanySelectorProps {
  cardCompany: CardCompany | null;
  onSelect: (cardCompany: CardCompany) => void;
  onNextStep: (currentStepKey: AddCardFormStepKey) => void;
}

function CardCompanySelector({
  cardCompany,
  onSelect,
  onNextStep,
}: CardCompanySelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const selectWrapperRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleSelect = (company: CardCompany) => {
    onSelect(company);
    setIsOpen(false);

    onNextStep("COMPANY");
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (!selectWrapperRef.current) return;

      if (!selectWrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <FormField
      title="카드사를 선택해 주세요"
      caption="현재 국내 카드사만 가능합니다."
    >
      <SelectWrapper ref={selectWrapperRef}>
        <SelectButton type="button" onClick={handleToggle}>
          <SelectedText state={cardCompany ? "selected" : "placeholder"}>
            {cardCompany?.name ?? "카드사를 선택해주세요"}
          </SelectedText>
          <ArrowIcon src={arrowDownIcon} alt="" />
        </SelectButton>

        {isOpen && (
          <OptionList>
            {CARD_COMPANIES.map((company) => (
              <OptionItem key={company.name}>
                <OptionButton
                  type="button"
                  onClick={() => handleSelect(company)}
                >
                  {company.name}
                </OptionButton>
              </OptionItem>
            ))}
          </OptionList>
        )}
      </SelectWrapper>
    </FormField>
  );
}

const SelectWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const SelectButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0.5rem;
  border: 1px solid ${COLOR_PALETTE.GREY};
  border-radius: 0.16rem;
  background-color: ${COLOR_PALETTE.WHITE};
  &:focus {
    border: 1px solid ${COLOR_PALETTE["BLACK-900"]};
  }
`;

interface SelectedTextProps {
  state?: "placeholder" | "selected";
}

const SelectedText = styled.span<SelectedTextProps>`
  color: ${({ state }) =>
    state === "placeholder" ? COLOR_PALETTE.GREY : COLOR_PALETTE["BLACK-900"]};

  font-weight: 400;
  font-size: 0.65rem;
`;

const ArrowIcon = styled.img`
  width: 0.5rem;
  height: 0.25rem;
`;

const OptionList = styled.ul`
  position: absolute;
  top: calc(110%);
  left: 0;
  z-index: 10;
  box-sizing: border-box;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  border-radius: 0.35rem;
  border: 1px solid ${COLOR_PALETTE.GREY};
  background-color: ${COLOR_PALETTE.WHITE};
`;

const OptionItem = styled.li`
  width: 100%;
`;

const OptionButton = styled.button`
  width: 100%;
  padding: 0.5rem 0.67rem;
  border: 0;
  border-radius: 0.35rem;
  background-color: ${COLOR_PALETTE.WHITE};
  color: #4f4f4f;
  font-weight: 400;
  font-size: 0.67rem;
  text-align: left;
  cursor: pointer;
`;

export default CardCompanySelector;
