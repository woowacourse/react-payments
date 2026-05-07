import CardPreview from '../components/CardPreview';
import CardInput from '../components/CardInput';
import { useCardNumber } from '../hooks/useCardNumber';
import { useExpiryDate } from '../hooks/useExpiryDate';
import { useCardCvc } from '../hooks/useCardCvc';
import { useState } from 'react';
import type { CardIssuerType } from '../types/cardStausTypes';

export default function RegisterCard() {
  const [cardStatus, setCardStatus] = useCardNumber();
  const [cardExpiry, setCardExpiry] = useExpiryDate();
  const [cardCvc, setCardCvc] = useCardCvc();
  const [cardIssuer, setCardIssuer] = useState<CardIssuerType | ''>('');

  const handleCardIssuer = (issuer: CardIssuerType) => {
    setCardIssuer(issuer);
  };

  return (
    <div
      css={(theme) => ({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '45px',
        backgroundColor: theme.colors.white,
        width: '376px',
        height: '100vh',
        margin: '0 auto',
      })}
    >
      <CardPreview
        cardNumbers={cardStatus.cardNumbers}
        cardExpiryDate={cardExpiry.cardExpiryDate}
        cardBrand={cardStatus.cardBrand}
        cardIssuer={cardIssuer}
      />
      <CardInput
        cardStatus={cardStatus}
        setCardStatus={setCardStatus}
        cardExpiry={cardExpiry}
        setCardExpiry={setCardExpiry}
        cardCvc={cardCvc}
        setCardCvc={setCardCvc}
        cardIssuer={cardIssuer}
        handleCardIssuer={handleCardIssuer}
      />
    </div>
  );
}
