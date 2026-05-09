import { useCardContext } from '../../hooks/useCardContext';
import { useState } from 'react';
import styled from '@emotion/styled';
import chevronUp from '../../assets/chevron-up.svg';
import chevronDown from '../../assets/chevron-down.svg';
import { cardCompanyOptions } from '../../constants/cardCompanyOptions';

export function CardSelectionDropdown({ onSelect }: { onSelect: () => void }) {
  const { cardCompany, setCardCompany } = useCardContext();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const selectedLabel = cardCompanyOptions.find((option) => option.value === cardCompany)?.label;

  return (
    <Wrapper>
      <DropwdownBox
        type="button"
        $isOpen={isDropdownOpen}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        {selectedLabel ? (
          <span>{selectedLabel}</span>
        ) : (
          <Placeholder>카드사를 선택해주세요</Placeholder>
        )}
        <img src={isDropdownOpen ? chevronDown : chevronUp} alt="토글 이미지" />
      </DropwdownBox>
      {isDropdownOpen && (
        <OptionsBox>
          {cardCompanyOptions.map((option) => (
            <OptionItem
              key={option.value}
              onClick={() => {
                setCardCompany(option.value);
                setIsDropdownOpen(false);
                onSelect();
              }}
            >
              {option.label}
            </OptionItem>
          ))}
        </OptionsBox>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  box-sizing: border-box;
  padding-bottom: 1rem;
`;

const DropwdownBox = styled.button<{ $isOpen: boolean }>`
  border: 1px solid ${({ $isOpen }) => ($isOpen ? '#000000' : '#acacac')};
  border-radius: 3px;
  padding: 0.5rem;
  font-size: 11px;
  height: 44px;
  width: 100%;
  box-sizing: border-box;
  cursor: pointer;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Placeholder = styled.span`
  color: #acacac;
  font-size: 11px;
`;

const OptionsBox = styled.ul`
  position: absolute;
  top: 120%;
  width: 100%;
  overflow-y: auto;
  border: 1px solid #acacac;
  border-radius: 5px;
  background-color: #ffffff;
  padding: 0;
  margin: 0;
`;

const OptionItem = styled.li`
  list-style: none;
  padding: 0.9rem;
  box-sizing: border-box;
  font-size: 11px;
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
  }
`;
