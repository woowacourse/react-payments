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

  const previewProps = {
    cardNumberState,
    expirationDateState,
    userNameState: userName,
    showImageCondition,
  };

  const formProps = {
    cardNumberState,
    setCardNumberState,
    cardNumberErrorState,
    expirationDateState,
    setExpirationDateState,
    expirationDateErrorState,
    userNameState: userName,
    setUserNameState: setUserName,
    userNameErrorState: userNameError,
  };

  return (
    <Container>
      <CardInformationPreview {...previewProps} />
      <CardInformationForm {...formProps} />
    </Container>
  );
}

export default App;
