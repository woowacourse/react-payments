import { useState } from 'react';
import styled from 'styled-components';

function Selector() {
  const cardIssuers = {
    bc: 'BC카드',
    shinhan: '신한카드',
    kakaobank: '카카오뱅크',
    hyundai: '현대카드',
    woori: '우리카드',
    lotte: '롯데카드',
    hana: '하나카드',
    kb: '국민카드',
  } as const;

  type CardIssuerKey = keyof typeof cardIssuers;

  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('카드사를 선택해주세요');

  const handleSelectCardIssuers = (e: React.MouseEvent<HTMLUListElement>) => {
    const targetId = (e.target as HTMLDivElement).id;
    setSelectedValue(cardIssuers[targetId as CardIssuerKey]);
    setIsOpen(false);
  };

  const cardIssuerOptions = Object.entries(cardIssuers).map(([key, label]) => ({
    value: key,
    label,
  }));

  return (
    <SelectorContainer>
      <DropDownDefault
        $isOpen={isOpen}
        $isDefaultValue={selectedValue === '카드사를 선택해주세요'}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {selectedValue}
      </DropDownDefault>
      <DropDownIcon
        src={`/img/${!isOpen ? 'chevron-up' : 'chevron-down'}.png`}
      />
      {isOpen && (
        <DropDownContainer onClick={(e) => handleSelectCardIssuers(e)}>
          {cardIssuerOptions.map((issuer) => (
            <DropDownOptions id={issuer.value}>{issuer.label}</DropDownOptions>
          ))}
        </DropDownContainer>
      )}
    </SelectorContainer>
  );
}

const DropDownIcon = styled.img`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 16px;
`;

const DropDownOptions = styled.li`
  font-family: Inter;
  font-weight: 400;
  font-size: 10.63px;
  color: #4f4f4f;
  padding: 8px;

  &:hover {
    background-color: #f3f3f3;
    cursor: pointer;
  }
`;

const DropDownDefault = styled.div<{
  $isOpen: boolean;
  $isDefaultValue: boolean;
}>`
  font-family: Inter;
  font-weight: 400;
  font-size: 10px;
  color: ${(props) => (props.$isDefaultValue ? '#acacac' : '#000')};
  padding: 10px;
  border: 1px solid #acacac;
  border-color: ${(props) => (props.$isOpen ? '#000' : '#acacac')};
  border-radius: 4px;
`;

const DropDownContainer = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  top: 36px;
  border: 1px solid #acacac;
  border-radius: 5px;
  background-color: white;
`;

const SelectorContainer = styled.div`
  position: relative;
`;

export default Selector;
