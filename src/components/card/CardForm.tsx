import React from 'react';

function CardForm({
  children,
  onSubmit,
  onChange,
}: {
  children: React.ReactNode;
  onSubmit: any;
  onChange: any;
}) {
  return (
    <form onSubmit={onSubmit} onChange={onChange}>
      {children}
    </form>
  );
}

export default CardForm;
