import React from 'react';

function CardInputForm({ children }) {
  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  return <form onSubmit={handleOnSubmit}>{children}</form>;
}

export default CardInputForm;
