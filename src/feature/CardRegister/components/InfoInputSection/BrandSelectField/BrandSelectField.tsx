import styled from 'styled-components';
import {CARD_COMPANIES} from '../../../domain/cardPolicy';
import type {CardCompanyType} from '../../../domain/cardPolicy';

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
        <option value=''>선택해 주세요</option>
        {(Object.entries(CARD_COMPANIES) as [CardCompanyType, {name: string; color: string}][]).map(
          ([key, {name}]) => (
            <option key={key} value={key}>
              {name}
            </option>
          ),
        )}
      </Select>
    </StyledField>
  );
};

const StyledField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  width: 100%;
`;

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
