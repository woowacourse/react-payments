/** @jsxImportSource @emotion/react */

import { Dispatch, SetStateAction } from 'react';

import CardExpiredDate from './CardExpiredDate';
import CardHolder from './CardHolder';
import CardNumbers from './CardNumbers';
import { css } from '@emotion/react';

const styledForm = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
};

interface props {
  setCardNumbers: React.Dispatch<
    React.SetStateAction<[string, string, string, string]>
  >;
  setCardExpiredDate: Dispatch<SetStateAction<[string, string]>>;
  setCardHolder: Dispatch<SetStateAction<string>>;
}
export default function CardForm({
  setCardNumbers,
  setCardExpiredDate,
  setCardHolder,
}: props) {
  return (
    // eslint-disable-next-line
    // @ts-ignore
    <form css={css(styledForm)}>
      <CardNumbers setCardNumbers={setCardNumbers} />
      <CardExpiredDate setCardExpiredDate={setCardExpiredDate} />
      <CardHolder setCardHolder={setCardHolder} />
    </form>
  );
}
