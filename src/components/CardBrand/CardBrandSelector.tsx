import styled from '@emotion/styled';
import FormLabel from '../common/FormLabel';
import SingleSelect from '../common/SingleSelect';
import { useEffect, useState } from 'react';

const options = [
  { id: 1, name: 'BC카드', color: '#F04651' },
  { id: 2, name: '신한카드', color: '#0046FF' },
  { id: 3, name: '카카오뱅크', color: '#FFE600' },
  { id: 4, name: '현대카드', color: '#000000' },
  { id: 5, name: '우리카드', color: '#007BC8' },
  { id: 6, name: '롯데카드', color: '#ED1C24' },
  { id: 7, name: '하나카드', color: '#009490' },
  { id: 8, name: '국민카드', color: '#6A6056' },
];

interface CardBrandSelectorProps {
  setCardFrameColor: React.Dispatch<React.SetStateAction<string>>;
  setSelectedBrand: React.Dispatch<React.SetStateAction<string>>;
}

const CardBrandSelector = ({
  setCardFrameColor,
  setSelectedBrand,
}: CardBrandSelectorProps) => {
  const [selectedCardBrand, setSelectedCardBrand] = useState('');

  useEffect(() => {
    const selectedOption = options.find(
      (option) => option.name === selectedCardBrand
    );
    if (selectedOption) {
      setCardFrameColor(selectedOption.color);
    }
  }, [selectedCardBrand]);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    setSelectedCardBrand(selectedValue);
    setSelectedBrand(selectedValue);
  };

  return (
    <Container>
      <FormLabel
        title='카드사를 선택해 주세요'
        caption='현재 국내 카드사만 가능합니다.'
      />
      <SingleSelect
        options={options}
        placeHolder='카드 브랜드를 선택해 주세요'
        selectedCardBrand={selectedCardBrand}
        onChange={handleSelectChange}
      />
    </Container>
  );
};

export default CardBrandSelector;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  padding-bottom: 12px;
`;
