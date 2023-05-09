import { Modal } from '@d0dam/react-modal';
import styled from 'styled-components';
import CardRegistrationForm from '../components/CardRegistrationForm';
import TransParentButton from '../components/Common/Button/TransParentButton';
import Card from '../components/Common/Card';
import Header from '../components/Common/Header';
import ProfileButtonList from '../components/Common/Profile/ProfileButtonList';
import { useCardInformationStore } from '../context/CardInformationProvider';
import bankList from '../data/bankList';
import useBooleanState from '../hooks/useBooleanState';

function CardRegistration() {
  const { card, setBankName } = useCardInformationStore();
  const { value: isModalOpen, setTrue: openModal, setFalse: closeModal } = useBooleanState(true);

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
        <Modal isModalOpen={isModalOpen} closeModal={closeModal}>
          <ProfileButtonList
            profileList={bankList}
            getProfileName={handleBankName}
            profileSize={37}
            severalPerLine={4}
          />
        </Modal>
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
