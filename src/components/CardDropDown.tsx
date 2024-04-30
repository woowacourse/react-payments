import { useState } from 'react';
import { CARD_BRAND } from '../constants/cardBrand';
import FieldTitle from './FieldTitle';
import InputField from './InputComponent/InputField';
import styled from 'styled-components';
import arrow_bottom from '../assets/image/arrow-bottom.svg';
import arrow_top from '../assets/image/arrow-top.svg';

const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const DropdownHeader = styled.div<{ $clicked: boolean }>`
  padding: 10px;
  border: 1px solid ${(props) => (props.$clicked ? '#000' : '#ddd')};
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
  handleInput: {
    handleUpdateCardBrand: (brandName: string) => void;
    handleUpdateCardBrandIsNextField: () => void;
  };
}
export default function CardDropDown({
  handleInput: { handleUpdateCardBrand, handleUpdateCardBrandIsNextField },
}: Props) {
  const [view, setView] = useState<boolean>(false);
  const [selected, setSelected] = useState('카드사를 선택해주세요');

  const handleSelectBrand = (brandName: string) => {
    handleUpdateCardBrand(brandName);
    handleUpdateCardBrandIsNextField();
    setView(!view);
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
        <DropdownContainer>
          <DropdownHeader
            $clicked={view}
            onClick={() => setView(!view)}
          >
            <DropdownHeaderTitle>{selected}</DropdownHeaderTitle>
            <img src={view ? arrow_bottom : arrow_top} />
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
