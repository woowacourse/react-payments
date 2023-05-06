import styled from 'styled-components';
import Modal from '../common/Modal';
import { CARD_COMPANY_LOGO } from '../../constants/cardCompany';
import { CardCompany } from '../../@types';

type CardCompanyModalProps = {
  isModalOpen: boolean;
  closeModal: () => void;
  onClickLogo: (cardCompanyName: CardCompany) => void;
};

const CardCompanyModal = ({ onClickLogo, isModalOpen, closeModal }: CardCompanyModalProps) => {
  const handleClickLogo = (companyName: CardCompany) => {
    onClickLogo(companyName);
    closeModal();
  };

  return (
    <>
      {isModalOpen && (
        <Modal onCloseModal={closeModal}>
          <CardCompanyWrapper>
            {CARD_COMPANY_LOGO.map(({ name, logo }, index) => (
              <CardCompanyButton type="button" key={index} onClick={() => handleClickLogo(name)}>
                <img src={logo} alt={name} />
                <CardCompanyName>{name}</CardCompanyName>
              </CardCompanyButton>
            ))}
          </CardCompanyWrapper>
        </Modal>
      )}
    </>
  );
};

const CardCompanyWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 36px;
  grid-row-gap: 26px;
  @media screen and (max-width: 319px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const CardCompanyButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0;
  row-gap: 10px;
`;

const CardCompanyName = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.085em;

  color: #525252;
`;

export default CardCompanyModal;
