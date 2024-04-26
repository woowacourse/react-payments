import Button from '../../components/Button/Button';
import CardInformationForm from '../../components/CardInformationForm/CardInformationForm';
import CardInformationPreview from '../../components/CardInformationPreview/CardInformationPreview';
import useForm from '../../hooks/useForm';
import * as Styled from './style';

const CardRegisterForm = () => {
  const { previewProps, formProps, isFormError, resetForm, formValues } = useForm({
    cardNumbers: [],
    expirationDate: [],
    userName: '',
    cardBrand: null,
    cvcNumber: '',
    password: '',
  });

  return (
    <>
      <Styled.Container id="card-register-form">
        <CardInformationPreview {...previewProps} />
        <CardInformationForm {...formProps} />
      </Styled.Container>
      {!isFormError && (
        <Styled.Submit>
          <Button form="card-register-form" label="확인" />
        </Styled.Submit>
      )}
    </>
  );
};

export default CardRegisterForm;
