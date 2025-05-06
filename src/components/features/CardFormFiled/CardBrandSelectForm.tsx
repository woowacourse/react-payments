import { CardInputLayout } from '@/components/common/CardInputLayout';
import { Select, SelectProps } from '@/components/common/Select';
const cardBrandOptions = [
  'BC카드',
  '신한카드',
  '카카오뱅크',
  '현대카드',
  '우리카드',
  '롯데카드',
  '하나카드',
  '국민카드',
];

export type CardBrandSelectFormProps = Pick<SelectProps, 'selectedItem' | 'onItemSelect'>;

export const CardBrandSelectForm = (props: CardBrandSelectFormProps) => {
  return (
    <CardInputLayout
      headerText="카드 회사를 선택해 주세요."
      description="현재 국내 카드사만 가능합니다."
    >
      <Select options={cardBrandOptions} placeholder="카드사를 선택하세요." {...props} />
    </CardInputLayout>
  );
};
