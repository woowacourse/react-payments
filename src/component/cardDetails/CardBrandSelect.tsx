import React from 'react';
import styled from 'styled-components';
import Description from '../Description';

interface CardBrandSelectProps {
  selectedBrand: string;
  onBrandChange: (brand: string, color: string) => void;
}

const CardBrandsColor = {
  BC카드: '#F04651',
  신한카드: '#0046FF',
  카카오뱅크: '#FFE600',
  현대카드: '#000000',
  우리카드: '#007BC8',
  롯데카드: '#ED1C24',
  하나카드: '#009490',
  국민카드: '#6A6056',
};

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

const StyledSelect = styled.select`
  width: 100%;
  padding: 8px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 4px;
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.black};
  }
`;

const StyledOption = styled.option<{ $isPlaceholder?: boolean }>`
  color: ${({ $isPlaceholder, theme }) =>
    $isPlaceholder ? theme.colors.gray : theme.colors.black};
`;

export const CardBrandSelect: React.FC<CardBrandSelectProps> = ({
  selectedBrand,
  onBrandChange,
}) => {
  const handleCardBrandChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const brand = e.target.value;
    const color =
      CardBrandsColor[brand as keyof typeof CardBrandsColor] || '#000000';
    onBrandChange(brand, color);
  };

  return (
    <>
      <Description
        headText="카드사를 선택해주세요"
        detailText="현재 국내 카드사만 가능합니다."
      />
      <SelectContainer>
        <StyledSelect
          name="cardBrand"
          id="cardBrand"
          value={selectedBrand}
          onChange={handleCardBrandChange}
        >
          <StyledOption value="" $isPlaceholder>
            카드사를 선택해주세요
          </StyledOption>
          {Object.keys(CardBrandsColor).map(brand => (
            <StyledOption key={brand} value={brand}>
              {brand}
            </StyledOption>
          ))}
        </StyledSelect>
      </SelectContainer>
    </>
  );
};

export default CardBrandSelect;
