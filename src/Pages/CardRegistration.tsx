import styled from 'styled-components';
import BankProfileButtonList from '../components/BankProfileButtonList';
import CardRegistrationForm from '../components/CardRegistrationForm';
import useCardForm from '../components/CardRegistrationForm/hooks/useCardForm';
import Card from '../components/Common/Card';
import Header from '../components/Common/Header';
import Modal from '../components/Common/Modal';
import bankList from '../data/bankList';
import useModal from '../hooks/useModal';

function CardRegistration() {
  const {
    card,
    checkValidator,
    errorMessage,
    isVisited,
    setCardNumber,
    setExpirationDate,
    setOwner,
    setPassword,
    setSecurityCode,
  } = useCardForm();
  const { isModalOpen, closeModal } = useModal(true);

  return (
    <>
      <Header title="카드 추가" hasBackHistory />
      <StyledMainCardRegistration>
        <Card cardInformation={card} isAddForm />
        <CardRegistrationForm
          card={card}
          checkValidator={checkValidator}
          errorMessage={errorMessage}
          isVisited={isVisited}
          setCardNumber={setCardNumber}
          setExpirationDate={setExpirationDate}
          setOwner={setOwner}
          setSecurityCode={setSecurityCode}
          setPassword={setPassword}
        />
        {isModalOpen && (
          <Modal closeModal={closeModal}>
            <BankProfileButtonList bankList={bankList} onClick={closeModal} profileSize={37} />
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
