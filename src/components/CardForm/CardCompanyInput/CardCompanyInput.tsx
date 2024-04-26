import React, { useState } from 'react';

import TitleContainer from '../../common/TitleContainer/TitleContainer';

import type { InputType } from '../../../hooks/useInput';
import { CARD_COMPANY } from '../../../constants/Condition';
import { UpIcon, DownIcon } from '../../../assets';

import * as S from './CardCompanyInput.style';

interface CardCompanyInputProps {
  company: InputType;
}

const CardCompanyInput = ({ company }: CardCompanyInputProps) => {
  const [isOptionOpen, setIsOptionOpen] = useState(false);

  const toggleOptionList = () => setIsOptionOpen(!isOptionOpen);

  const handleCompanyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    company.handleValue(e.target.value);
    setIsOptionOpen(false);
  };

  return (
    <div>
      <TitleContainer title="카드사를 선택해 주세요." subTitle="현재 국내 카드사만 가능합니다." />
      <S.CardCompanyInputContainer>
        <S.SelectedCardCompanyBox $isDefault={!company.value}>
          <p>{company.value || '카드사를 선택해 주세요'}</p>
          <button onClick={toggleOptionList}>
            <img src={isOptionOpen ? UpIcon : DownIcon} alt={isOptionOpen ? '옵션 닫기' : '옵션 열기'} />
          </button>
        </S.SelectedCardCompanyBox>
        {isOptionOpen && (
          <S.CardCompanyOptionList>
            {Object.keys(CARD_COMPANY).map((option) => (
              <S.CardCompanyOption key={option}>
                <input
                  type="radio"
                  id={option}
                  value={option}
                  checked={option === company.value}
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
