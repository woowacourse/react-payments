import './App.css';
import { AppLayout } from './components/common/AppLayout';
import { Flex } from './components/common/Flex';
import { Card } from './components/features/Card';
import { CardNumberForm } from './components/features/CardFormFiled/CardNumberForm';
import { CVCForm } from './components/features/CardFormFiled/CVCForm';
import { ExpireDateForm } from './components/features/CardFormFiled/ExpireDateForm';
import { useCardInput } from './hooks/useCardInput';

function App() {
  const { value: cardNumbers, handleChange, handleBlur } = useCardInput(4);
  const {
    value: expireDate,
    handleChange: handleExpireDateChange,
    handleBlur: handleExpireDateBlur,
  } = useCardInput(2);

  return (
    <AppLayout>
      <Flex padding="80px 0 0 0 ">
        <Card cardNumbers={cardNumbers} expireDate={expireDate} />
      </Flex>
      <Flex direction="column" gap="40px" padding="60px 0 0 0">
        <CardNumberForm cardNumbers={cardNumbers} onChange={handleChange} onBlur={handleBlur} />
        <ExpireDateForm
          expireDate={expireDate}
          onChange={handleExpireDateChange}
          onBlur={handleExpireDateBlur}
        />
        <CVCForm />
      </Flex>
    </AppLayout>
  );
}

export default App;
