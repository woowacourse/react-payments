/* eslint-disable react/no-array-index-key */
import React from 'react';
import './style.css';
import { Button, Label, Modal } from '../../../../components';
import { handleCardCompanySelect, handleDimmedAreaClick } from './handler';
import { CARD_COMPANY_LIST } from '../../../../constants';

export const CardCompanySelectModal = ({ isOpen, setCardInfo, setIsModalOpen }) => {
  return (
    <Modal
      className="CardCompanySelectModal--bottom"
      isOpen={isOpen}
      onClick={(e) => handleDimmedAreaClick({ e, setIsModalOpen })}
    >
      <CardCompanyList setCardInfo={setCardInfo} setIsModalOpen={setIsModalOpen} />
    </Modal>
  );
};

export function CardCompanyList({ setCardInfo, setIsModalOpen }) {
  return (
    <ul className="CardCompanyList">
      {CARD_COMPANY_LIST.map((company, index) => (
        <CardCompanyItem key={index} company={company} setCardInfo={setCardInfo} setIsModalOpen={setIsModalOpen} />
      ))}
    </ul>
  );
}

function CardCompanyItem({ company, setCardInfo, setIsModalOpen }) {
  const { name, color } = company;

  return (
    <li className="CardCompanyItem">
      <Button
        name={name}
        backgroundColor={color}
        theme="card-company"
        onClick={(e) => handleCardCompanySelect({ e, setCardInfo, setIsModalOpen })}
      />
      <Label>{name}</Label>
    </li>
  );
}
