import CardInformationForm from './components/CardInformationForm/CardInformationForm';
import CardInformationPreview from './components/CardInformationPreview/CardInformationPreview';
import useCardNumber from './hooks/useCardNumber';
import useExpirationDate from './hooks/useExpirationDate';
import useUserName from './hooks/useUserName';
import * as StyledApp from './styles/App.style';

function App() {
  const { cardNumberState, showImageCondition } = useCardNumber([]);
  const { expirationDateState } = useExpirationDate([]);
  const { userNameState } = useUserName('');

  const previewProps = {
    cardNumberState,
    expirationDateState,
    userNameState,
    showImageCondition,
  };

  const formProps = {
    cardNumberState,
    expirationDateState,
    userNameState,
  };

  return (
    <StyledApp.Container>
      <CardInformationPreview {...previewProps} />
      <CardInformationForm {...formProps} />
    </StyledApp.Container>
  );
}

export default App;
