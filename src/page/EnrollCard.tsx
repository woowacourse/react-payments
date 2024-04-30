import styled from 'styled-components';
import CardView from '../components/CardView';
import InputForm from '../components/InputForm';
import useCardForm from '../hooks/useCardForm';
import { validateButton } from '../domain/InputValidation';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

const Page = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.form`
  margin: 50px;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 45px;

  @media screen and (max-width: 500px) {
    width: 85vw;
  }
`;

export default function EnrollCard() {
  const {
    cardNumbers,
    handleUpdateCardNumberInput,
    handleUpdateCardNumberErrorMessages,
    expirationDate,
    handleUpdateExpirationDateInput,
    handleUpdateExpirationDateErrorMessages,
    userName,
    handleUpdateUserNameIsNextPage,
    handleUpdateUserNameInput,
    handleUpdateUserNameErrorMessages,
    cardBrand,
    handleUpdateCardBrand,
    handleUpdateCardBrandIsNextField,
    CVC,
    handleUpdateCVCInput,
    handleUpdateCVCErrorMessages,
    password,
    handleUpdatePasswordInput,
    handleUpdatePasswordErrorMessages,
  } = useCardForm({});
  const navigate = useNavigate();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate('/card-registration-confirmation', {
      state: { ...cardNumbers.cardNumberFields, ...cardBrand.cardBrandField },
    });
  };

  const buttonFlag = validateButton({
    cardNumbers,
    expirationDate,
    userName,
    cardBrand,
    CVC,
    password,
  });
  console.log(password);

  return (
    <Page>
      <Container onSubmit={handleSubmit}>
        <CardView
          cardNumbers={cardNumbers}
          expirationDate={expirationDate}
          userName={userName}
          cardBrand={cardBrand}
          CVC={CVC}
        />
        <InputForm
          cardInfo={{
            cardNumbers,
            expirationDate,
            userName,
            cardBrand,
            CVC,
            password,
          }}
          handleInput={{
            handleUpdateCardNumberInput,
            handleUpdateCardNumberErrorMessages,
            handleUpdateExpirationDateInput,
            handleUpdateExpirationDateErrorMessages,
            handleUpdateUserNameIsNextPage,
            handleUpdateUserNameInput,
            handleUpdateUserNameErrorMessages,
            handleUpdateCardBrand,
            handleUpdateCardBrandIsNextField,
            handleUpdateCVCInput,
            handleUpdateCVCErrorMessages,
            handleUpdatePasswordInput,
            handleUpdatePasswordErrorMessages,
          }}
        />
        {buttonFlag && (
          <Button
            value={'제출'}
            layoutType='bottom'
          ></Button>
        )}
      </Container>
    </Page>
  );
}
