import styled from 'styled-components';
import Card from '../components/Card';
import PaymentsInputContainer from '../containers/PaymentsInputContainer';

const MainCardRegistration = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function CardRegistration() {
  return (
    <MainCardRegistration>
      <Card
        cardNumber={['1234', '1234', '1234', '1234']}
        expirationDate={{ year: 23, month: 4 }}
        owner="SUN"
        isAddForm
      />
      <PaymentsInputContainer />
    </MainCardRegistration>
  );
}

export default CardRegistration;
