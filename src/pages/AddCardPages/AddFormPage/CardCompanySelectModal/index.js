/* eslint-disable react/no-array-index-key */
import React from 'react';
import './style.css';
import { Button, Label, Modal } from '../../../../components';

const CARD_COMPANY_LIST = [
  { name: '포코 카드', color: '#e24141' },
  { name: '준 카드', color: '#547CE4' },
  { name: '공원카드', color: '#73BC6D' },
  { name: '브랜 카드', color: '#DE59B9' },
  { name: '로이드 카드', color: '#94DACD' },
  { name: '도비 카드', color: '#E76E9A' },
  { name: '콜린 카드', color: '#F37D3B' },
  { name: '썬 카드', color: ' #FBCD58' },
];

const CardCompanyItem = ({ cardCompany }) => {
  const { name, color } = cardCompany;

  return (
    <li className="CardCompanyItem">
      <Button backgroundColor={color} onClick={() => {}} theme="card-company" />
      <Label>{name}</Label>
    </li>
  );
};

export const CardCompanyList = () => {
  return (
    <ul className="CardCompanyList">
      {CARD_COMPANY_LIST.map((cardCompany, index) => (
        <CardCompanyItem key={index} cardCompany={cardCompany} />
      ))}
    </ul>
  );
};

export const CardCompanySelectModal = ({ isOpen }) => {
  return (
    <Modal isOpen={isOpen}>
      <CardCompanyList />
    </Modal>
  );
};
