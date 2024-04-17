import CardInformationForm from './components/CardInformationForm/CardInformationForm';
import CardInformationPreview from './components/CardInformationPreview/CardInformationPreview';
import useForm from './hooks/useForm';
import { Container } from './styles/App.style';

function App() {
  const {
    cardNumberState,
    setCardNumberState,
    cardNumberErrorState,
    expirationDateState,
    setExpirationDateState,
    expirationDateErrorState,
    userName,
    setUserName,
    userNameError,
    showImageCondition,
  } = useForm({
    cardNumber: [],
    expirationDate: [],
    userName: '',
  });

  return (
    <Container>
      <CardInformationPreview
        cardNumberState={cardNumberState}
        expirationDateState={expirationDateState}
        userNameState={userName}
        showImageCondition={showImageCondition}
      />
      <CardInformationForm
        cardNumberState={cardNumberState}
        handleCardNumbers={setCardNumberState}
        cardNumberErrorState={cardNumberErrorState}
        expirationDateState={expirationDateState}
        setExpirationDateState={setExpirationDateState}
        expirationDateErrorState={expirationDateErrorState}
        userNameState={userName}
        setUserNameState={setUserName}
        userNameErrorState={userNameError}
      />
    </Container>
  );
}

export default App;
