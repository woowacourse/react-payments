import React from 'react';
import { CardCompanyOption } from '../';
import { CARD_COMPANY } from '../../constants';
import './style.css';

export default function CardCompanySelection({ onSetCardCompany }) {
  return (
    <div className="card-company-selection">
      {Object.entries(CARD_COMPANY).map(([key, { NAME, COLOR }]) => (
        <CardCompanyOption
          key={key}
          cardCompanyKey={key}
          name={NAME}
          color={COLOR}
          onClick={(event) => {
            onSetCardCompany(event.currentTarget.dataset.cardCompanyKey);
          }}
        />
      ))}
    </div>
  );
}
