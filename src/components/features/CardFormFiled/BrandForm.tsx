import { css } from '@emotion/react';

import { CardFormProps } from './CardFormFiled.types';

import { CardInputLayout } from '../../common/CardInputLayout';
import { Flex } from '@/components/common/Flex';
import { Select } from '@/components/common/Select';
import { CARD_BRAND_COLORS, CardBrand } from '@/constants/brandColors';
import { useCardForm } from '@/hooks/useCardForm';

const categories = Object.keys(CARD_BRAND_COLORS);

export const BrandForm = ({ onNext }: CardFormProps) => {
  const { formData: brandFormData, dispatch: setBrandFormData } = useCardForm();

  const handleClickOption = (option: CardBrand) => {
    setBrandFormData({
      type: 'BRAND',
      payload: { ...brandFormData, brand: option },
    });
    onNext();
  };

  return (
    <CardInputLayout
      headerText="카드사를 선택해 주세요."
      description="현재 국내 카드사만 가능합니다."
    >
      <Flex
        direction="column"
        alignItems="flex-start"
        width="100%"
        gap="4px"
        css={css`
          margin-bottom: 20px;
        `}
      >
        <Select selectedOptions={brandFormData.brand ?? '전체'}>
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
