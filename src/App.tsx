import Button from './components/Button/Button';
import CardInformationForm from './components/CardInformationForm/CardInformationForm';
import CardInformationPreview from './components/CardInformationPreview/CardInformationPreview';
import useForm from './hooks/useForm';
import * as Styled from './styles/App.style';

function App() {
  const { previewProps, formProps, isFormError } = useForm({
    cardNumbers: [],
    expirationDate: [],
    userName: '',
    cardBrand: null,
    cvcNumber: '',
    password: '',
  });

  return (
    <Styled.Container>
      <Styled.FormInner>
        <CardInformationPreview {...previewProps} />
        <CardInformationForm {...formProps} />
      </Styled.FormInner>
      {!isFormError && (
        <Styled.Submit>
          <Button label="확인" />
        </Styled.Submit>
      )}
    </Styled.Container>
  );
}

export default App;
