import React from 'react';
import CardRegisterPage from './CardRegisterPage';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'CardRegisterPage',
  component: CardRegisterPage,
};

export function Register() {
  return <CardRegisterPage navigate={() => {}} />;
}
