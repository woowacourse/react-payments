import React from 'react';

function CardForm({ children }: { children: React.ReactNode }) {
  const handleSubmitCard = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('카드 등록완료');
  };

  return <form onSubmit={handleSubmitCard}>{children}</form>;
}

export default CardForm;
