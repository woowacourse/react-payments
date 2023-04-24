import styled from 'styled-components';
import CardRegistrationForm from '../components/CardRegistrationForm';
import useCardForm from '../components/CardRegistrationForm/hooks/useCardForm';
import Card from '../components/Common/Card';
import Header from '../components/Common/Header';

function CardRegistration() {
  const { card, setCardNumber, setExpirationDate, setOwner, setPassword, setSecurityCode } = useCardForm();

  return (
    <>
      <Header title="카드 추가" hasBackHistory />
      <StyledMainCardRegistration>
        <Card cardInformation={card} isAddForm />
        <CardRegistrationForm
          card={card}
          setCardNumber={setCardNumber}
          setExpirationDate={setExpirationDate}
          setOwner={setOwner}
          setSecurityCode={setSecurityCode}
          setPassword={setPassword}
        />
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
