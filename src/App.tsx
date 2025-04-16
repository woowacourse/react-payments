import './App.css';
import { AppLayout } from './components/common/AppLayout';
import { Flex } from './components/common/Flex';
import { Card } from './components/features/Card';
import { CardNumberForm } from './components/features/CardFormFiled/CardNumberForm';
import { CVCForm } from './components/features/CardFormFiled/CVCForm';
import { useCardInput } from './hooks/useCardInput';

function App() {
  const { value: cardNumber, handleChange, handleBlur } = useCardInput(4);

  return (
    <AppLayout>
      <Flex padding="80px 0 0 0 ">
        <Card type={'VISA'} cardNumbers={cardNumber} expireDate={'04/12'} />
      </Flex>
      <Flex direction="column" gap="20px" padding="60px 0 0 0">
        <CardNumberForm cardNumber={cardNumber} onChange={handleChange} onBlur={handleBlur} />
        {/* <ExpireDateForm expireNumber={expireNumber} />
        <CVCForm cvcNumber={cvcNumber} /> */}
      </Flex>
    </AppLayout>
  );
}

export default App;
