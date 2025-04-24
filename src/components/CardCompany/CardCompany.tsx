import { Label, Select, Spacing, Title } from '@/components';
import { CARD_COMPANIES } from '@/constants';
import { RegisterType } from '@/hooks';
import { CardCompanyInputType } from '@/types';

interface CardCompanyProps {
  register: RegisterType<CardCompanyInputType>;
}

export default function CardCompany({ register }: CardCompanyProps) {
  const { onChange, value } = register('company', {
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
      <Select
        options={CARD_COMPANIES}
        value={value}
        onChange={onChange}
        name="company"
        placeholder="카드사를 선택해주세요"
        validation={{
          required: true,
          errorMessage: '카드사를 선택해주세요.',
        }}
      />
      <Spacing size={8} />
    </div>
  );
}
