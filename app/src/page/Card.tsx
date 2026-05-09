import { useState } from 'react';
import { CardPreview } from '../components/preview/CardPreview.tsx';
import { CardForm } from '../components/form/CardForm.tsx';
import styled from '@emotion/styled';
import { CardContext } from '../context/CardContext.ts';
import type { NetworkBrand } from '../context/CardContext.ts';

export function Card() {
  const [cardNumber, setCardNumber] = useState(['', '', '', '']);

  const [cardExpiryDate, setCardExpiryDate] = useState({
    'expiry-month': '',
    'expiry-year': '',
  });

  const [networkBrand, setNetworkBrand] = useState<NetworkBrand>('');

  return (
    <CardContext
      value={{
        cardNumber,
        cardExpiryDate,
        networkBrand,
        setCardNumber,
        setCardExpiryDate,
        setNetworkBrand,
      }}
    >
      <CardContainer>
        <CardPreview />
        <CardForm />
      </CardContainer>
    </CardContext>
  );
}

const CardContainer = styled.div`
  margin-bottom: auto;
  margin-top: auto;
`;
