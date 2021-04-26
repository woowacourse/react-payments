/* eslint-disable react/no-array-index-key */
import React from 'react';
import './style.css';
import { Button, Label, Modal } from '../../../../components';
import { CARD_COMPANY_LIST } from '../../../../constants';

export const CardCompanySelectModal = ({ isOpen }) => {
  return (
    <Modal className="CardCompanySelectModal--bottom" isOpen={isOpen}>
      <CardCompanyList />
    </Modal>
  );
};

export function CardCompanyList() {
  return (
    <ul className="CardCompanyList">
      {CARD_COMPANY_LIST.map((cardCompany, index) => (
        <CardCompanyItem key={index} cardCompany={cardCompany} />
      ))}
    </ul>
  );
}

function CardCompanyItem({ cardCompany }) {
  const { name, color } = cardCompany;

  return (
    <li className="CardCompanyItem">
      <Button backgroundColor={color} onClick={() => {}} theme="card-company" />
      <Label>{name}</Label>
    </li>
  );
}
