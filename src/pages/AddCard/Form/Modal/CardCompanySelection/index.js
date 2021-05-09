import React from 'react';
import { CARD_COMPANY } from '../../../../../constants';
import CardCompanyOption from '../CardCompanyOption';
import './style.css';

export default function CardCompanySelection({ setCardCompany }) {
  return (
    <div className="card-company-selection">
      {Object.entries(CARD_COMPANY).map(([key, { NAME, COLOR }]) => (
        <CardCompanyOption
          key={key}
          name={NAME}
          color={COLOR}
          onClick={() => {
            setCardCompany(key);
          }}
        />
      ))}
    </div>
  );
}
