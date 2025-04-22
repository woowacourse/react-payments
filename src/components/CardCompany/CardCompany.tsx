import { Label, Spacing, Title } from '@/components';
import { CARD_COMPANIES } from '@/constants';
import { RegisterType } from '@/hooks/useForm';
import { CardCompanyInputType } from '@/types';
import * as S from './CardCompany.styles';

interface CardCompanyProps {
  register: RegisterType<{ company: CardCompanyInputType }>;
}

export default function CardCompany({ register }: CardCompanyProps) {
  const { value, onChange } = register('company', {
    validation: {
      required: true,
      errorMessage: '카드사를 선택해주세요.',
    },
  });

  return (
    <div>
      <Title>카드사를 선택해 주세요</Title>
      <Spacing size={24} />
      <Label id="card-company">카드사</Label>
      <Spacing size={8} />
      <S.SelectWrapper>
        <S.Select value={value} onChange={onChange}>
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
