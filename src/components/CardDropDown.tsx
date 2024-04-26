import { Dispatch, SetStateAction, useState } from 'react';
import { CARD_BRAND } from '../constants/cardBrand';
import { CardBrand } from '../types/card';
import { ShowComponents } from '../types/showCompents';
import FieldTitle from './FieldTitle';
import InputField from './InputField';
import styled from 'styled-components';

const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const DropdownHeader = styled.div`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  box-sizing: border-box;
`;

const DropdownHeaderTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
`;

const DropdownList = styled.ul`
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 0;
  margin: 10px 0;
  list-style-type: none;
  
`;

const ListItem = styled.li`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #f7f7f7;
  }
`;
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
    <InputField label='카드사' count={4} errorMessages={''}>
    <DropdownContainer>
      <DropdownHeader onClick={() => setView(!view)}>
        <DropdownHeaderTitle>{selected}</DropdownHeaderTitle>
        <span>{view ? '⌃' : '⌄'}</span>
      </DropdownHeader>
      {view && (
        <DropdownList>
          {Object.entries(CARD_BRAND).map(([brandName]) => {
            return (
              <ListItem
                key={brandName}
                onClick={() => handleSelectBrand(brandName)}
              >
                {brandName}
              </ListItem>
            );
          })}
        </DropdownList>
      )}
    </DropdownContainer>
    </InputField>
  </>
  );
}
