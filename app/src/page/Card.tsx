import { useState } from 'react';
import { CardPreview } from '../components/preview/CardPreview.tsx';
import { CardForm } from '../components/form/CardForm.tsx';
import styled from '@emotion/styled';
import { CardContext } from '../context/CardContext.ts';
import type { NetworkBrand } from '../context/CardContext.ts';
import type { CardCompany } from '../context/CardContext.ts';

export function Card() {
  const [cardCompany, setCardCompany] = useState<CardCompany>('');

  const [cardNumber, setCardNumber] = useState(['', '', '', '']);

  const [cardExpiryDate, setCardExpiryDate] = useState({
    'expiry-month': '',
    'expiry-year': '',
  });

  const [cardCVC, setCardCVC] = useState('');

  const [cardPassword, setCardPassword] = useState('');

  const [networkBrand, setNetworkBrand] = useState<NetworkBrand>('');

  return (
    <CardContext
      value={{
        cardNumber,
        cardExpiryDate,
        networkBrand,
        cardCompany,
        cardCVC,
        cardPassword,
        setCardNumber,
        setCardExpiryDate,
        setNetworkBrand,
        setCardCompany,
        setCardCVC,
        setCardPassword,
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
