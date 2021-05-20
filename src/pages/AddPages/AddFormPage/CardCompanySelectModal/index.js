/* eslint-disable react/no-array-index-key */
import { useContext } from 'react';
import { CardInfoContext } from '../../../../contexts';
import { Button, Label, Modal } from '../../../../components';
import { CARD_COMPANY_LIST } from '../../../../constants';

export const CardCompanySelectModal = (props) => {
  const { isOpen, setIsModalOpen } = props;
  const { setCompany } = useContext(CardInfoContext);

  return (
    <Modal
      className="CardCompanySelectModal--bottom"
      isOpen={isOpen}
      onClick={(e) => handleDimmedAreaClick({ e, setIsModalOpen })}
    >
      <CardCompanyList setCompany={setCompany} setIsModalOpen={setIsModalOpen} />
    </Modal>
  );
};

export function CardCompanyList({ setCompany, setIsModalOpen }) {
  return (
    <ul className="CardCompanyList">
      {CARD_COMPANY_LIST.map((company, index) => (
        <CardCompanyItem key={index} company={company} setCompany={setCompany} setIsModalOpen={setIsModalOpen} />
      ))}
    </ul>
  );
}

function CardCompanyItem({ company, setCompany, setIsModalOpen }) {
  return (
    <li className="CardCompanyList__Item">
      <Button
        className="CardCompanyList__Item__Button"
        name={company.name}
        style={{ backgroundColor: company.color }}
        onClick={(e) => handleCardCompanySelect({ e, setCompany, setIsModalOpen })}
      />
      <Label>{company.name}</Label>
    </li>
  );
}

function handleCardCompanySelect({ e, setCompany, setIsModalOpen }) {
  const name = e.target.name;
  const color = e.target.style.backgroundColor;

  setCompany({ name, color });
  setIsModalOpen(false);
}

function handleDimmedAreaClick({ e, setIsModalOpen }) {
  const Modal = e.currentTarget;
  const ModalViewPort = Modal.firstChild;

  if (e.target === Modal || e.target === ModalViewPort) {
    setIsModalOpen(false);
  }
}
