import CardBrandDropdown, { CardBrandDropdownProps } from '@components/payments/CardBrandDropdown/CardBrandDropdown';

import { Spacer, TextField } from '@components/common';

const CardBrandTextField: React.FC<CardBrandDropdownProps> = ({
  isOpen,
  currentCardBrand,
  onSelectCardBrand,
  onToggleDropdown,
}) => {
  return (
    <section>
      <TextField.Title title="카드사를 선택해 주세요" />
      <TextField.SubTitle subTitle="현재 국내 카드사만 가능합니다." />
      <Spacer space={10} />
      <TextField.Content>
        <CardBrandDropdown
          isOpen={isOpen}
          currentCardBrand={currentCardBrand}
          onSelectCardBrand={onSelectCardBrand}
          onToggleDropdown={onToggleDropdown}
        />
      </TextField.Content>
      <Spacer space={22} />
    </section>
  );
};

export default CardBrandTextField;
