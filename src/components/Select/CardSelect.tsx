import { ChangeEvent } from 'react';
import styled from '@emotion/styled';
import { CARD_ISSUER_CONFIG } from '../../constants';
import { SelectFieldConfig } from '../../types/field';
import { CardIssuerType } from '../Form/PaymentForm';

interface Props {
  fieldConfig: SelectFieldConfig;
  onChange: (value: CardIssuerType | null) => void;
}

export default function CardSelect({ fieldConfig, onChange }: Props) {
  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) =>
    onChange(e.target.value as CardIssuerType);

  return (
    <>
      <Label htmlFor="card-select">카드사 선택</Label>

      <Select id="card-select" onChange={handleSelect}>
        <Option value="" hidden>
          {fieldConfig.placeholder}
        </Option>

        {Object.values(CARD_ISSUER_CONFIG).map((config) => (
          <Option key={config.name} value={config.name}>
            {config.name}
          </Option>
        ))}
      </Select>
    </>
  );
}

const Label = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;

const Select = styled.select`
  width: 100%;
  height: 32px;
  border: 1px solid #acacac;
  border-radius: 3px;
`;

const Option = styled.option`
  height: 30px;
  font-size: 11px;
`;
