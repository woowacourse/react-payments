import styled from 'styled-components';
import Card from '../components/Card';
import Header from '../components/Header';
import PaymentsInputContainer from '../containers/PaymentsInputContainer';

const MainCardRegistration = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > * {
    margin: 12px;
  }
`;

function CardRegistration() {
  return (
    <>
      <Header title="카드 추가" hasBackHistory />
      <MainCardRegistration>
        <Card isAddForm />
        <PaymentsInputContainer />
      </MainCardRegistration>
    </>
  );
}

export default CardRegistration;
