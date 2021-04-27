import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './style.js';
import { CardCompanyItem } from './CardCompanyItem';

/**
 * Primary UI component for user interaction
 */
export const CardCompanyList = ({ selectedCompany, handleCompanyChange }) => {
  const cardCompanies = [
    { name: '포코', color: '#E24141' },
    { name: '준', color: '#547CE4' },
    { name: '공원', color: '#73BC6D' },
    { name: '브랜', color: '#DE59B9' },
    { name: '로이드', color: '#94DACD' },
    { name: '도비', color: '#E76E9A' },
    { name: '콜린', color: '#F37D3B' },
    { name: '썬', color: '#FBCD58' },
  ];

  return (
    <Styled.Container>
      {cardCompanies.map((company, idx) => (
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
