import CardInformationForm from './components/CardInformationForm/CardInformationForm';
import CardInformationPreview from './components/CardInformationPreview/CardInformationPreview';
import useForm from './hooks/useForm';
import { Container } from './styles/App.style';

function App() {
  const { previewProps, formProps } = useForm({
    cardNumbers: [],
    expirationDate: [],
    userName: '',
  });

  return (
    <Container>
      <CardInformationPreview {...previewProps} />
      <CardInformationForm {...formProps} />
    </Container>
  );
}

export default App;
