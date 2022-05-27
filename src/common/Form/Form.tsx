import React, { PropsWithChildren } from 'react';

interface Props {
  onSubmitForm(event: React.FormEvent<HTMLFormElement>, nickname: string): void;
  nickname: string;
}

export default function Form({ onSubmitForm, nickname, children }: PropsWithChildren<Props>) {
  return (
    <form
      onSubmit={(event: React.FormEvent<HTMLFormElement>): void => onSubmitForm(event, nickname)}
    >
      {children}
    </form>
  );
}
