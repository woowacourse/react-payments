import { RegisterCardLoadingBar } from 'components/common/LodaingBar/RegisterCardLoadingBar';
import { AddCardNickNameForm } from 'components/Form/AddCardNickNameForm';
import { PageContainer } from 'components/style/PageContainer';
import { useCardAddForm } from 'contexts/CardAddFormProvider';
import { useHandleCardNickNameSubmit } from 'hooks/useHandleCardNickNameSubmit';
import styled from 'styled-components';

export const RegisterCardNickName = () => {
  const { card } = useCardAddForm();
  const { handleCardNickNameSubmit, isSubmitting } = useHandleCardNickNameSubmit();

  return (
    <Container>
      {!isSubmitting ? (
        <AddCardNickNameForm card={card} onSubmit={handleCardNickNameSubmit} />
      ) : (
        <RegisterCardLoadingBar />
      )}
    </Container>
  );
};

const Container = styled(PageContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
