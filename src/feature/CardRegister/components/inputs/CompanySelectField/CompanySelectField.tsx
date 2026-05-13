import styled from 'styled-components';
import {CARD_COMPANIES, CARD_COMPANY_KEYS} from '@/domain/card/cardCompany';
import type {CardCompanyType} from '@/domain/card/cardCompany';
import InputContainer from '../InputContainer/InputContainer';
import {FieldLayout} from '../styles/inputFieldStyles';

type CompanySelectFieldProps = {
  selectedCompany: CardCompanyType | null;
  onChange: (value: CardCompanyType | null) => void;
};

const CompanySelectField = ({selectedCompany, onChange}: CompanySelectFieldProps) => {
  return (
    <InputContainer
      title='카드사를 선택해 주세요'
      description='현재 국내 카드사만 가능합니다.'
      label='카드사'
      labelFor='card-company'
    >
      <FieldLayout>
        <Select
          id='card-company'
          value={selectedCompany ?? ''}
          onChange={(e) => {
            onChange(e.target.value ? (e.target.value as CardCompanyType) : null);
          }}
        >
          <option value=''>카드사를 선택해주세요</option>
          {CARD_COMPANY_KEYS.map((key) => (
            <option key={key} value={key}>
              {CARD_COMPANIES[key].name}
            </option>
          ))}
        </Select>
      </FieldLayout>
    </InputContainer>
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

export default CompanySelectField;
