import styled from 'styled-components';
import TitleContainer from '../../common/TitleContainer/TitleContainer';

import { UpIcon, DownIcon } from '../../../assets';
import { useState } from 'react';

const CardCompanyInputContainer = styled.div`
  position: relative;
`;

const SelectedCardCompanyBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 32px;
  padding: 8px;
  border-radius: 2px;
  border: 1px solid ${({ theme }) => theme.color.primary.light};
  font-size: ${({ theme }) => theme.fontSize.base};
`;

const CardCompanyOptionList = styled.ul`
  position: absolute;
  top: 38px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.color.primary.light};
  border-radius: 2px;
  font-size: ${({ theme }) => theme.fontSize.base};
`;

const CardCompanyOption = styled.li`
  width: 100%;
  padding: 8px;
  height: 32px;

  &:hover {
    background: #eeeeee;
  }
`;

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
      <CardCompanyInputContainer>
        <SelectedCardCompanyBox>
          <p>BC카드</p>
          <button onClick={toggleOptionList}>{isOptionOpen ? <img src={UpIcon} /> : <img src={DownIcon} />}</button>
        </SelectedCardCompanyBox>
        {isOptionOpen && (
          <CardCompanyOptionList>
            {cardCompanyOptions.map((option, index) => (
              <CardCompanyOption key={index}>{option}</CardCompanyOption>
            ))}
          </CardCompanyOptionList>
        )}
      </CardCompanyInputContainer>
    </div>
  );
};

export default CardCompanyInput;
