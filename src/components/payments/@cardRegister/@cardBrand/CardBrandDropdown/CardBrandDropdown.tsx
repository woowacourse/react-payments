import Dropdown from '@components/common/Dropdown/Dropdown';

import type { CardBrand } from './CardBrandDropdown.type';
import { CARD_BRAND_MAP } from './CardBrandDropdown.constant';
import { isCardBrandName } from '@components/payments/@cardRegister/@cardBrand/CardBrandDropdown/CardBrandDropdown.util';

export interface CardBrandDropdownProps {
  isOpen: boolean;
  currentCardBrand: CardBrand | '';
  onToggleDropdown: () => void;
  onSelectCardBrand: (card: CardBrand) => void;
}

const CardBrandDropdown: React.FC<CardBrandDropdownProps> = ({
  isOpen,
  onToggleDropdown,
  currentCardBrand,
  onSelectCardBrand,
}) => {
  const targetCardBrand = currentCardBrand ? CARD_BRAND_MAP[currentCardBrand] : '';
  return (
    <Dropdown isOpen={isOpen} onToggleDropdown={onToggleDropdown}>
      <Dropdown.Trigger value={targetCardBrand} placeholder="카드사를 선택하세요" />
      <Dropdown.Menu>
        {Object.entries(CARD_BRAND_MAP).map(([cardKey, cardBrand]) => (
          <Dropdown.Option
            key={cardBrand}
            isSelected={currentCardBrand === cardKey}
            onHoverOption={() => {
              if (isCardBrandName(cardKey)) {
                onSelectCardBrand(cardKey);
              }
            }}
            onSelectOption={() => {
              if (isCardBrandName(cardKey)) onSelectCardBrand(cardKey);

              onToggleDropdown();
            }}
          >
            {cardBrand}
          </Dropdown.Option>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default CardBrandDropdown;
