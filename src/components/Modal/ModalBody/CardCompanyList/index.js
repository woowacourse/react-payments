import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './style.js';
import { CardCompanyItem } from './CardCompanyItem';
import { CARD_COMPANIES } from '../../../../utils/constants/card.js';

export const CardCompanyList = ({ selectedCompany, handleCompanyChange }) => {
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

CardCompanyList.propTypes = {
  selectedCompany: PropTypes.string,
  handleCompanyChange: PropTypes.func,
};

// CardCreateForm.defaultProps = {};
