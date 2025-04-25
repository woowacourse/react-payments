import { CardFormProps, FormData } from './CardFormFiled.types';

import { CardInputLayout } from '../../common/CardInputLayout';
import { Flex } from '@/components/common/Flex';
import { Select } from '@/components/common/Select';
import { CARD_BRAND_COLORS, CardBrand } from '@/constants/brandColors';
import { CardForm } from '@/hooks/useCardFormState';

const categories = Object.keys(CARD_BRAND_COLORS);
type Props<T> = CardFormProps & FormData<T>;
export const BrandForm = ({ context, onNext }: Props<CardForm['brand']>) => {
  const { state: brandFormData, setState: setBrandFormData } = context;

  const handleClickOption = (option: CardBrand) => {
    setBrandFormData(option);
    onNext();
  };

  return (
    <CardInputLayout
      headerText="카드사를 선택해 주세요."
      description="현재 국내 카드사만 가능합니다."
    >
      <Flex direction="column" alignItems="flex-start" width="100%" gap="4px">
        <Select selectedOptions={brandFormData ?? '전체'}>
          {categories.map((category) => (
            <Select.Option
              key={category}
              option={category}
              onSelectOption={() => handleClickOption(category as CardBrand)}
            >
              {category}
            </Select.Option>
          ))}
        </Select>
      </Flex>
    </CardInputLayout>
  );
};
