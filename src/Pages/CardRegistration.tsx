import styled from 'styled-components';
import BankProfileButtonList from '../components/BankProfileButtonList';
import CardRegistrationForm from '../components/CardRegistrationForm';
import TransParentButton from '../components/Common/Button/TransParentButton';
import Card from '../components/Common/Card';
import Header from '../components/Common/Header';
import Modal from '../components/Common/Modal';
import { useCardInformationStore } from '../context/CardInformationProvider';
import bankList from '../data/bankList';
import useModal from '../hooks/useModal';

function CardRegistration() {
  const { card, setBankName } = useCardInformationStore();
  const { isModalOpen, openModal, closeModal } = useModal(true);

  const handleBankName = (name: string) => {
    setBankName(name);
    closeModal();
  };

  return (
    <>
      <Header title="카드 추가" hasBackHistory />
      <StyledMainCardRegistration>
        <TransParentButton onClick={openModal}>
          <Card cardInformation={card} isAddForm />
        </TransParentButton>
        <CardRegistrationForm />
        {isModalOpen && (
          <Modal closeModal={closeModal}>
            <BankProfileButtonList bankList={bankList} getBankName={handleBankName} profileSize={37} />
          </Modal>
        )}
      </StyledMainCardRegistration>
    </>
  );
}

const StyledMainCardRegistration = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > * {
    margin: 12px;
  }
`;

export default CardRegistration;
