/* eslint-disable react/no-array-index-key */
import React from 'react';
import './style.css';
import { Button, Label, Modal } from '../../../../components';
import { handleCardCompanySelect, handleDimmedAreaClick } from './handler';
import { CARD_COMPANY_LIST } from '../../../../constants';

export const CardCompanySelectModal = ({ isOpen, setCardCompany, setIsModalOpen }) => {
  return (
    <Modal
      className="CardCompanySelectModal--bottom"
      isOpen={isOpen}
      onClick={(e) => handleDimmedAreaClick({ e, setIsModalOpen })}
    >
      <CardCompanyList setCardCompany={setCardCompany} setIsModalOpen={setIsModalOpen} />
    </Modal>
  );
};

export function CardCompanyList({ setCardCompany, setIsModalOpen }) {
  return (
    <ul className="CardCompanyList">
      {CARD_COMPANY_LIST.map((cardCompany, index) => (
        <CardCompanyItem
          key={index}
          cardCompany={cardCompany}
          setCardCompany={setCardCompany}
          setIsModalOpen={setIsModalOpen}
        />
      ))}
    </ul>
  );
}

function CardCompanyItem({ cardCompany, setCardCompany, setIsModalOpen }) {
  const { name, color } = cardCompany;

  return (
    <li className="CardCompanyItem">
      <Button
        name={name}
        backgroundColor={color}
        theme="card-company"
        onClick={(e) => handleCardCompanySelect({ e, setCardCompany, setIsModalOpen })}
      />
      <Label>{name}</Label>
    </li>
  );
}
