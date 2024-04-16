import CardInformationForm from './components/CardInformationForm/CardInformationForm';
import CardInformationPreview from './components/CardInformationPreview/CardInformationPreview';
import { Container } from './styles/App.style';

function App() {
  return (
    <Container>
      <CardInformationPreview />
      <CardInformationForm />
    </Container>
  );
}

export default App;
