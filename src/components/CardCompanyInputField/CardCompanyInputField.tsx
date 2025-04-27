import { Label, Select, Spacing, Title } from '@/components';
import { CARD_COMPANIES } from '@/constants';
import { RegisterType } from '@/hooks';
import { CardCompanyInputType } from '@/types';

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
      <Select
        {...register('company', {
          validation: {
            required: true,
            errorMessage: '카드사를 선택해주세요.',
          },
        })}
        data-sequence="5"
        options={CARD_COMPANIES}
        name="company"
        placeholder="카드사를 선택해주세요"
      />
      <Spacing size={8} />
    </div>
  );
}
