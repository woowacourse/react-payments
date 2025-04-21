import { Label, Spacing, Title } from '@/components';
import { CARD_COMPANIES } from '@/constants';
import { CardCompanyType } from '@/types';
import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import * as S from './CardCompany.styles';

interface CardCompanyProps {
  selectedCompany: CardCompanyType | '';
  setSelectedCompany: Dispatch<SetStateAction<CardCompanyType | ''>>;
}

export default function CardCompany({ selectedCompany, setSelectedCompany }: CardCompanyProps) {
  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value as CardCompanyType | '';
    setSelectedCompany(value);
  };

  return (
    <div>
      <Title>카드사를 선택해 주세요</Title>
      <Spacing size={24} />
      <Label id="card-company">카드사</Label>
      <Spacing size={8} />
      <S.SelectWrapper>
        <S.Select value={selectedCompany} onChange={handleSelectChange}>
          <option value="">카드사를 선택해주세요</option>
          {CARD_COMPANIES.map((company) => (
            <option key={company.id} value={company.id}>
              {company.name}
            </option>
          ))}
        </S.Select>
      </S.SelectWrapper>
      <Spacing size={8} />
    </div>
  );
}
