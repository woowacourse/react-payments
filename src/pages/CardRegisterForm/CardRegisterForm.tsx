import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import CardInformationForm from '../../components/CardInformationForm/CardInformationForm';
import CardInformationPreview from '../../components/CardInformationPreview/CardInformationPreview';
import useForm from '../../hooks/useForm';
import * as Styled from './style';
import URLS from '../../constants/Urls';
import { SuccessCardInfoState } from '../../types/Types';

const CardRegisterForm = () => {
  const { previewProps, formProps, isFormError, resetForm, formValues } = useForm({
    cardNumbers: [],
    expirationDate: [],
    userName: '',
    cardBrand: null,
    cvcNumber: '',
    password: '',
  });

  const navigate = useNavigate();

  const registerAndGoToSuccessPage = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const cardInfo: SuccessCardInfoState = {
      firstCardNumbers: formValues.cardNumbers[0],
      cardBrand: formValues.cardBrand ?? '',
    };
    resetForm();
    navigate(URLS.success, { state: cardInfo });
  };

  return (
    <>
      <Styled.Container id="card-register-form" onSubmit={registerAndGoToSuccessPage}>
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
