import { Dispatch, SetStateAction, useState } from 'react';
import { CARD_BRAND } from '../constants/cardBrand';
import { CardBrand } from '../types/card';
import { ShowComponents } from '../types/showCompents';
import FieldTitle from './FieldTitle';
import InputField from './InputField';

interface Props {
  cardBrand: CardBrand;
  handleInput: Dispatch<SetStateAction<CardBrand>>;
  handleShowComponent: Dispatch<SetStateAction<ShowComponents>>;
}
export default function CardDropDown({
  cardBrand,
  handleInput,
  handleShowComponent,
}: Props) {
  const [view, setView] = useState(false);
  const [selected, setSelected] = useState('카드사를 선택해주세요');

  const handleSelectBrand = (brandName: string) => {
    const cardKey = 'cardBrand' as keyof CardBrand;
    handleInput((prevState: CardBrand) => {
      return {
        ...prevState,
        [cardKey]: {
          ...prevState[cardKey],
          value: brandName,
        },
      };
    });
    handleShowComponent((prev) => ({
      ...prev,
      expirationDateInput: true,
    }));
    setSelected(brandName);
  };

  return (
    <>
      <FieldTitle
        title='카드사를 선택해 주세요'
        subtitle='현재 국내 카드사만 가능합니다.'
      />
      <InputField
        label='카드사'
        count={4}
        errorMessages={''}
      >
        {
          <ul
            onClick={() => {
              setView(!view);
            }}
          >
            {selected} {view ? '⌃' : '⌄'}
            {view && (
              <>
                {Object.entries(CARD_BRAND).map(([brandName]) => {
                  return (
                    <li
                      key={brandName}
                      value={brandName}
                      onClick={() => handleSelectBrand(brandName)}
                    >
                      {brandName}
                    </li>
                  );
                })}
              </>
            )}
          </ul>
        }
      </InputField>
    </>
  );
}
