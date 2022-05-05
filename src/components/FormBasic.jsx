import React from 'react';

export default function FormBasic({ onSubmitForm, payload, children }) {
  return <form onSubmit={(event) => onSubmitForm(event, payload)}>{children}</form>;
}
