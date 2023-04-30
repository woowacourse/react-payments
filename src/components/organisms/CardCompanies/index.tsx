import React from 'react';
import styled from 'styled-components';
import CardIconButton from '../../molecules/CardIconButton';
import { Center } from '../../layout/flexbox';

/* component */
const CardCompanies: React.FC = () => {
  return (
    <StyledCompaniesWrapper>
      <div>
        <StyledCompaniesBox>
          <CardIconButton cardName="BC" />
          <CardIconButton cardName="SHINHAN" />
          <CardIconButton cardName="KAKAO" />
          <CardIconButton cardName="HYUNDAI" />
        </StyledCompaniesBox>
        <StyledCompaniesBox>
          <CardIconButton cardName="WORRI" />
          <CardIconButton cardName="LOTTE" />
          <CardIconButton cardName="HANA" />
          <CardIconButton cardName="KB" />
        </StyledCompaniesBox>
      </div>
    </StyledCompaniesWrapper>
  );
};

export default CardCompanies;

/* styles */
const StyledCompaniesBox = styled.div`
  display: flex;

  button + button {
    margin-left: 8px;
  }
`;

const StyledCompaniesWrapper = styled.div`
  ${Center}

  width: 100%;
  height: 224px;
  background-color: #fff;

  ${StyledCompaniesBox} + ${StyledCompaniesBox} {
    margin-top: 20px;
  }
`;
