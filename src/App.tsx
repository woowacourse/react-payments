import { useState } from 'react';
import CardPreview from './components/CardPreview';
import CardForm from './components/CardForm';
import { useCardBrand } from './hooks/useCardBrand';
import type { CardNumberSegments } from './types';
import styled from '@emotion/styled';

const View = styled.div`
  width: 100%;
  max-width: 376px;
  margin: 0 auto;
  padding: 16px 32px;
  border: 1px solid black;
`;

function App() {
  const [formState, setFormState] = useState({
    cardNumberSegments: ['', '', '', ''] as CardNumberSegments,
    expiryMonth: '',
    expiryYear: '',
    cvc: '',
  });

  const brand = useCardBrand(formState.cardNumberSegments);

  return (
    <View>
      <CardPreview
        cardBrand={brand}
        cardNumberSegments={formState.cardNumberSegments}
        expiryMonth={formState.expiryMonth}
        expiryYear={formState.expiryYear}
      />
      <CardForm formState={formState} setFormState={setFormState} />
    </View>
  );
}

export default App;
