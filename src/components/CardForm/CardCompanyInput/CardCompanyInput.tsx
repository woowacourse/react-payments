import React, { useState } from 'react';

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

interface CardCompanyInputProps {
  company: string;
  handleCompany: (company: string) => void;
}

const CardCompanyInput = ({ company, handleCompany }: CardCompanyInputProps) => {
  const [isOptionOpen, setIsOptionOpen] = useState(false);

  const toggleOptionList = () => setIsOptionOpen(!isOptionOpen);

  const handleCompanyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleCompany(e.target.value);
    setIsOptionOpen(false);
  };

  return (
    <div>
      <TitleContainer title="카드사를 선택해 주세요." subTitle="현재 국내 카드사만 가능합니다." />
      <S.CardCompanyInputContainer>
        <S.SelectedCardCompanyBox $isDefault={!company}>
          <p>{company || '카드사를 선택해 주세요'}</p>
          <button onClick={toggleOptionList}>
            <img src={isOptionOpen ? UpIcon : DownIcon} alt={isOptionOpen ? '옵션 닫기' : '옵션 열기'} />
          </button>
        </S.SelectedCardCompanyBox>
        {isOptionOpen && (
          <S.CardCompanyOptionList>
            {cardCompanyOptions.map((option) => (
              <S.CardCompanyOption key={option}>
                <input
                  type="radio"
                  id={option}
                  value={option}
                  checked={option === company}
                  onChange={handleCompanyChange}
                ></input>
                <S.CardCompanyOptionLabel htmlFor={option}>{option}</S.CardCompanyOptionLabel>
              </S.CardCompanyOption>
            ))}
          </S.CardCompanyOptionList>
        )}
      </S.CardCompanyInputContainer>
    </div>
  );
};

export default CardCompanyInput;
