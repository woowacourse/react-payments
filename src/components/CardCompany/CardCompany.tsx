import { Label, Spacing, Title } from '@/components';
import { CARD_COMPANIES } from '@/constants';
import { RegisterType } from '@/hooks/useForm';
import { CardCompanyInputType } from '@/types';
import * as S from './CardCompany.styles';
import { useState, ChangeEvent } from 'react';

interface CardCompanyProps {
  register: RegisterType<CardCompanyInputType>;
}

export default function CardCompany({ register }: CardCompanyProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');
  const { onChange } = register('company', {
    validation: {
      required: true,
      errorMessage: '카드사를 선택해주세요.',
    },
  });

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    setIsOpen(false);
    const event = {
      target: {
        value,
        name: 'company',
      },
    } as ChangeEvent<HTMLSelectElement>;
    onChange(event);
  };

  const selectedCompany = CARD_COMPANIES.find((company) => company.id === selectedValue);
  const displayText = selectedCompany ? selectedCompany.name : '카드사를 선택해주세요';

  return (
    <div>
      <Title>카드사를 선택해 주세요</Title>
      <Spacing size={24} />
      <Label id="card-company">카드사</Label>
      <Spacing size={8} />
      <S.SelectWrapper>
        <S.SelectButton type="button" onClick={() => setIsOpen(!isOpen)}>
          {displayText}
        </S.SelectButton>
        <S.DropdownList isOpen={isOpen}>
          <S.DropdownItem isSelected={selectedValue === ''} onClick={() => handleSelect('')}>
            카드사를 선택해주세요
          </S.DropdownItem>
          {CARD_COMPANIES.map((company) => (
            <S.DropdownItem
              key={company.id}
              isSelected={selectedValue === company.id}
              onClick={() => handleSelect(company.id)}
            >
              {company.name}
            </S.DropdownItem>
          ))}
        </S.DropdownList>
        <S.HiddenSelect
          {...register('company', {
            validation: {
              required: true,
              errorMessage: '카드사를 선택해주세요.',
            },
          })}
          value={selectedValue}
          onChange={(e) => handleSelect(e.target.value)}
        >
          <option value="">카드사를 선택해주세요</option>
          {CARD_COMPANIES.map((company) => (
            <option key={company.id} value={company.id}>
              {company.name}
            </option>
          ))}
        </S.HiddenSelect>
      </S.SelectWrapper>
      <Spacing size={8} />
    </div>
  );
}
