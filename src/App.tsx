import { AppLayout } from './components/common/AppLayout';
import { Flex } from './components/common/Flex';
import { CardNumberForm } from './components/features/CardFormFiled/CardNumberForm';
import { CardPasswordForm } from './components/features/CardFormFiled/CardPasswordForm';
import { CVCForm } from './components/features/CardFormFiled/CVCForm';
import { ExpireDateForm } from './components/features/CardFormFiled/ExpireDateForm';
import { CardPreview } from './components/features/CardPreview';
import { useCardInput } from './hooks/useCardInput';
import { useExpireDateInput } from './hooks/useExpireDateInput';

function App() {
  const {
    value: cardNumbers,
    errorMessage: cardErrorMessage,
    handleChange,
    handleBlur,
  } = useCardInput('cardNumber');

  const {
    value: expireDate,
    errorMessage: expireDateErrorMessage,
    handleChange: handleExpireDateChange,
    handleBlur: handleExpireDateBlur,
  } = useExpireDateInput();

  const {
    value: cvcNumber,
    errorMessage: cvcErrorMessage,
    handleChange: handleCVCChange,
    handleBlur: handleCVCBlur,
  } = useCardInput('CVC');

  const {
    value: password,
    errorMessage: passwordErrorMessage,
    handleChange: handlePasswordChange,
    handleBlur: handlePasswordBlur,
  } = useCardInput('password');

  return (
    <AppLayout>
      <Flex padding="20px 0">
        <CardPreview cardNumbers={cardNumbers} expireDate={expireDate} />
      </Flex>
      <Flex direction="column" gap="10px" margin="30px 0">
        <CardPasswordForm
          password={password}
          errorMessage={passwordErrorMessage}
          onCardInputChange={handlePasswordChange}
          onCardInputBlur={handlePasswordBlur}
        />
        <CardNumberForm
          cardNumbers={cardNumbers}
          errorMessage={cardErrorMessage}
          onCardInputChange={handleChange}
          onCardInputBlur={handleBlur}
        />
        <ExpireDateForm
          expireDate={expireDate}
          errorMessage={expireDateErrorMessage}
          onCardExpireDateInputChange={handleExpireDateChange}
          onCardExpireDateInputBlur={handleExpireDateBlur}
        />
        <CVCForm
          cvcNumber={cvcNumber}
          errorMessage={cvcErrorMessage}
          onCardInputChange={handleCVCChange}
          onCardInputBlur={handleCVCBlur}
        />
      </Flex>
    </AppLayout>
  );
}

export default App;
