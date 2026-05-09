import styled from 'styled-components';
import {StyledField} from '../fieldStyles';
import {CARD_COMPANIES} from '../../../domain/cardCompany';
import type {CardCompanyType} from '../../../domain/cardCompany';

type Props = {
  selectedCompany: CardCompanyType | null;
  onChange: (value: CardCompanyType | null) => void;
};

const BrandSelectField = ({selectedCompany, onChange}: Props) => {
  return (
    <StyledField>
      <Select
        value={selectedCompany ?? ''}
        onChange={(e) => {
          const value = e.target.value;
          onChange(value ? (value as CardCompanyType) : null);
        }}
      >
        <option value=''>카드사를 선택해주세요</option>
        {(Object.entries(CARD_COMPANIES) as [CardCompanyType, {name: string; color: string}][]).map(([key, {name}]) => (
          <option key={key} value={key}>
            {name}
          </option>
        ))}
      </Select>
    </StyledField>
  );
};


const Select = styled.select`
  height: 32px;
  padding: 0 8px;
  border: 1px solid #acacac;
  border-radius: 4px;
  font-size: 11px;
  color: #000;
  background-color: #fff;
  outline: none;

  &:focus {
    border-color: #000;
  }
`;

export default BrandSelectField;
