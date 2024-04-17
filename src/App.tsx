import CardInformationForm from './components/CardInformationForm/CardInformationForm';
import CardInformationPreview from './components/CardInformationPreview/CardInformationPreview';
import useForm from './hooks/useForm';
import { Container } from './styles/App.style';

function App() {
  const {
    cardNumberState,
    setCardNumberState,
    expirationDateState,
    setExpirationDateState,
    userName,
    setUserName,
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
      />
      <CardInformationForm
        cardNumberState={cardNumberState}
        handleCardNumbers={setCardNumberState}
        expirationDateState={expirationDateState}
        setExpirationDateState={setExpirationDateState}
        userNameState={userName}
        setUserNameState={setUserName}
      />
    </Container>
  );
}

export default App;
