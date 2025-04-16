import './App.css';
import { AppLayout } from './components/common/AppLayout';
import { Flex } from './components/common/Flex';
import { CardNumberForm } from './components/features/CardFormFiled/CardNumberForm';
import { CVCForm } from './components/features/CardFormFiled/CVCForm';
import { ExpireDateForm } from './components/features/CardFormFiled/ExpireDateForm';
import { CardPreview } from './components/features/CardPreview';
import { useCardInput } from './hooks/useCardInput';

function App() {
  const {
    value: cardNumbers,
    errorMessage: cardErrorMessage,
    handleChange,
    handleBlur,
  } = useCardInput(4, 4);
  const {
    value: expireDate,
    errorMessage: expireDateErrorMessage,
    handleChange: handleExpireDateChange,
    handleBlur: handleExpireDateBlur,
  } = useCardInput(2, 2);

  return (
    <AppLayout>
      <Flex padding="60px 0 0 0 ">
        <CardPreview cardNumbers={cardNumbers} expireDate={expireDate} />
      </Flex>
      <Flex direction="column" gap="20px" padding="60px 0 0 0">
        <CardNumberForm
          cardNumbers={cardNumbers}
          errorMessage={cardErrorMessage}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <ExpireDateForm
          expireDate={expireDate}
          errorMessage={expireDateErrorMessage}
          onChange={handleExpireDateChange}
          onBlur={handleExpireDateBlur}
        />
        <CVCForm />
      </Flex>
    </AppLayout>
  );
}

export default App;
