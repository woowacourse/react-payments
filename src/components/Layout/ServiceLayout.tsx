import styled from '@emotion/styled';
import PaymentForm from '../Form/PaymentForm';

export default function ServiceLayout() {
  return (
    <Layout>
      <PaymentForm />
    </Layout>
  );
}

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 376px;
  height: 100vh;
  padding: 77px; 30px; 19px; 30px;
  border: 1px solid #dddcdc;
 `;
