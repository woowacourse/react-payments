/* eslint-disable react/no-array-index-key */
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
  return (
    <li className="CardCompanyList__Item">
      <Button
        className="CardCompanyList__Item__Button"
        name={company.name}
        style={{ backgroundColor: company.color }}
        onClick={(e) => handleCardCompanySelect({ e, setCardInfo, setIsModalOpen })}
      />
      <Label>{company.name}</Label>
    </li>
  );
}
