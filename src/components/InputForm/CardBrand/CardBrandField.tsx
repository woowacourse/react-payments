import styled from "@emotion/styled";
import { CardInfo } from "../../../hooks/useCardInfo";
import { CARD_BRAND_LIST } from "./constants";
import useDropDown from "../../../hooks/useDropDown";

interface CardBrandFieldProps {
  cardInfo: CardInfo;
  handleCardInfo: (
    key: keyof CardBrandFieldProps["cardInfo"],
    value: string
  ) => void;
}

function CardBrandField({ cardInfo, handleCardInfo }: CardBrandFieldProps) {
  const { isOpen, toggleDropdown, closeDropdown, dropdownRef } = useDropDown();

  const selectBrand = (value: string) => {
    handleCardInfo("cardBrand", value);
    closeDropdown();
  };

  const displayText = cardInfo.cardBrand || "카드사를 선택해주세요";

  return (
    <DropdownContainer ref={dropdownRef}>
      <DropdownButton
        autoFocus
        type="button"
        isOpen={isOpen}
        isSelected={!!cardInfo.cardBrand}
        onClick={toggleDropdown}
      >
        {displayText}
      </DropdownButton>

      {isOpen && (
        <DropdownList>
          {CARD_BRAND_LIST.map((brand) => (
            <DropdownItem
              tabIndex={0}
              key={brand}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  selectBrand(brand);
                }
              }}
              onClick={() => selectBrand(brand)}
              isSelected={cardInfo.cardBrand === brand}
            >
              {brand}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </DropdownContainer>
  );
}

export default CardBrandField;

const DropdownContainer = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 16px;
  font-size: 12px;
`;

const DropdownButton = styled.button<{ isOpen: boolean; isSelected: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: white;
  padding: 8px;
  border: ${({ isOpen, theme }) =>
    isOpen
      ? `1.5px solid ${theme.colors.black}`
      : `1px solid ${theme.colors.gray}`};
  border-radius: 2px;
  cursor: pointer;
  color: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.black : theme.colors.gray};
`;

const DropdownList = styled.ul`
  padding: 0;
  list-style: none;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  margin-top: 6px;
  border-radius: 2px;
`;

const DropdownItem = styled.li<{ isSelected: boolean }>`
  padding: 12px 8px;
  cursor: pointer;
  background-color: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.lightGray : "white"};
`;
