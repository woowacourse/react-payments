import { RegisterCardNameForm } from 'components/Form/RegisterCardNameForm';
import { PageContainer } from 'components/style/PageContainer';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function RegisterCardName() {
  const navigate = useNavigate();
  const goHome = () => {
    navigate('/');
  };

  return (
    <PageContainer>
      <CardNameFormContainer>
        <RegisterCardNameForm onSubmit={goHome} />
      </CardNameFormContainer>
    </PageContainer>
  );
}

const CardNameFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default RegisterCardName;
