import styled from '@emotion/styled';
import {
  CARD_COMPANY,
  CARD_COMPANY_NAME,
} from '../../../constants/cardCompany';

interface CardCompanySelectProps {
  cardCompany: keyof typeof CARD_COMPANY_NAME | undefined;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

function CardCompanySelect({ cardCompany, onChange }: CardCompanySelectProps) {
  return (
    <>
      <Label htmlFor="CardCompany">카드사</Label>
      <Select id="CardCompany" onChange={onChange}>
        <option value={cardCompany} disabled hidden selected>
          카드사를 선택해주세요
        </option>
        {CARD_COMPANY.map(({ name }) => (
          <option value={name}>{name}</option>
        ))}
      </Select>
    </>
  );
}

export default CardCompanySelect;

const Select = styled.select`
  width: 100%;
  height: 32px;
  border: 1px solid #acacac;
  border-radius: 3px;
  padding: 0px 8px;
  font-size: 11px;
  margin-top: 16px;
`;

const Label = styled.label`
  visibility: hidden;
  font-size: 0;
`;
