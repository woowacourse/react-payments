import { useState } from 'react';

import TitleContainer from '../../common/TitleContainer/TitleContainer';

import { UpIcon, DownIcon } from '../../../assets';
import * as S from './CardCompanyInput.style';

const cardCompanyOptions = [
  'BC카드',
  '신한카드',
  '카카오뱅크',
  '현대카드',
  '우리카드',
  '롯데카드',
  '하나카드',
  '국민카드',
];

const CardCompanyInput = () => {
  const [isOptionOpen, setIsOptionOpen] = useState(false);

  const toggleOptionList = () => {
    setIsOptionOpen(!isOptionOpen);
  };

  return (
    <div>
      <TitleContainer title="카드사를 선택해 주세요." subTitle="현재 국내 카드사만 가능합니다." />
      <S.CardCompanyInputContainer>
        <S.SelectedCardCompanyBox>
          <p>BC카드</p>
          <button onClick={toggleOptionList}>{isOptionOpen ? <img src={UpIcon} /> : <img src={DownIcon} />}</button>
        </S.SelectedCardCompanyBox>
        {isOptionOpen && (
          <S.CardCompanyOptionList>
            {cardCompanyOptions.map((option, index) => (
              <S.CardCompanyOption key={index}>{option}</S.CardCompanyOption>
            ))}
          </S.CardCompanyOptionList>
        )}
      </S.CardCompanyInputContainer>
    </div>
  );
};

export default CardCompanyInput;
