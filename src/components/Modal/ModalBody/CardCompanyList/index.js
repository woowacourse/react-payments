import React, { useContext } from 'react';

import { CardCompanyItem } from './CardCompanyItem';

import { CARD_COMPANIES } from '../../../../utils/constants/card.js';
import { CardFormContext } from '../../../../contexts/CardFormContextProvider.js';

import * as Styled from './style.js';

export const CardCompanyList = () => {
  const { company: selectedCompany, setCompany, setCompanyValidity } = useContext(CardFormContext);

  const handleCompanyChange = (companyName) => {
    setCompanyValidity((companyValidity) => ({ ...companyValidity, company: true }));
    setCompany(companyName);
  };

  return (
    <Styled.Container>
      {CARD_COMPANIES.map((company, idx) => (
        <CardCompanyItem
          key={idx}
          name={company.name}
          color={company.color}
          isSelected={selectedCompany === company.name}
          onClick={() => {
            handleCompanyChange(company.name);
          }}
        />
      ))}
    </Styled.Container>
  );
};
