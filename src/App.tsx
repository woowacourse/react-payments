import CardInformationForm from './components/CardInformationForm/CardInformationForm';
import CardInformationPreview from './components/CardInformationPreview/CardInformationPreview';
import useCVCState from './hooks/useCVC';
import useCardNumber from './hooks/useCardNumber';
import useExpirationDate from './hooks/useExpirationDate';
import usePasswordState from './hooks/usePassword';
import useSelectedCardState from './hooks/useSelectedCardState';
import useUserName from './hooks/useUserName';
import { StyledContainer } from './styles/App.style';

function App() {
  const { cardNumberState } = useCardNumber([]);
  const { expirationDateState } = useExpirationDate([]);
  const { userNameState } = useUserName('');
  const { selectedCardState } = useSelectedCardState('');
  const { cvcState } = useCVCState(undefined);
  const { passwordState } = usePasswordState(undefined);

  const cardInformationProps = {
    cardNumberState,
    expirationDateState,
    userNameState,
    selectedCardState,
    cvcState,
    passwordState,
  };

  return (
    <StyledContainer>
      <CardInformationPreview {...cardInformationProps} />
      <CardInformationForm {...cardInformationProps} />
    </StyledContainer>
  );
}

export default App;
