import { Label, Spacing, Title } from '@/components';
import { CARD_COMPANIES } from '@/constants';
import { RegisterType } from '@/hooks/useForm';
import { CardCompanyInputType } from '@/types';
import * as S from './CardCompany.styles';

interface CardCompanyProps {
  register: RegisterType<CardCompanyInputType>;
}

export default function CardCompany({ register }: CardCompanyProps) {
  return (
    <div>
      <Title>카드사를 선택해 주세요</Title>
      <Spacing size={24} />
      <Label id="card-company">카드사</Label>
      <Spacing size={8} />
      <S.SelectWrapper>
        {/* @ts-expect-error TODO: select 요소 onChange 타입 확장 필요  */}
        <S.Select
          {...register('company', {
            validation: {
              required: true,
              errorMessage: '카드사를 선택해주세요.',
            },
          })}
        >
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
