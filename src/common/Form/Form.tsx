import React, { PropsWithChildren } from 'react';

export type onSubmitFormType = (event: React.FormEvent<HTMLFormElement>, nickname: string) => void;
interface Props {
  onSubmitForm: onSubmitFormType;
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
