import styled from '@emotion/styled';
import { useEffect, useRef, useState } from 'react';

type CustomDropdownProps = {
  selected: string;
  onChange: (value: string) => void;
};

const StyledDropdownWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 30px;
`;

const StyledSelectedOption = styled.div`
  border: 1px solid #ccc;
  padding: 8px;
  background: white;
  cursor: pointer;
  font-size: 12px;
`;

const StyledArrowButton = styled.button`
  position: absolute;
  top: 5px;
  right: 10px;
  width: 1rem;
  height: 1rem;
  border: none;
  background-color: transparent;
`;

const StyledArrowImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledOptionList = styled.ul`
  position: absolute;
  top: 100;
  left: 0;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  border: 1px solid #ccc;
  background: white;
  z-index: 10;
`;

const StyledOptionItem = styled.li`
  padding: 8px;
  cursor: pointer;
  font-size: 12px;

  &:hover {
    background: #f2f2f2;
  }
`;

const cardCompanies = [
  'BC카드',
  '신한카드',
  '카카오뱅크',
  '현대카드',
  '우리카드',
  '롯데카드',
  '하나카드',
  '국민카드',
];
const Dropdown = ({ selected, onChange }: CustomDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <StyledDropdownWrapper ref={wrapperRef}>
      <StyledArrowButton>
        <StyledArrowImage src="./arrow.png"></StyledArrowImage>
      </StyledArrowButton>
      <StyledSelectedOption onClick={() => setIsOpen(!isOpen)}>
        {selected || '카드사를 선택하세요'}
      </StyledSelectedOption>
      {isOpen && (
        <StyledOptionList>
          {cardCompanies.map((value, idx) => (
            <StyledOptionItem
              key={idx}
              onClick={() => {
                onChange(value);
                setIsOpen(false);
              }}
            >
              {value}
            </StyledOptionItem>
          ))}
        </StyledOptionList>
      )}
    </StyledDropdownWrapper>
  );
};

export default Dropdown;
