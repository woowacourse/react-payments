import { cardBrandOptions } from '../CardPreview/cardBrand';
import { CardInputLayout } from '@/components/common/CardInputLayout';
import { Select, SelectProps } from '@/components/common/Select';

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
