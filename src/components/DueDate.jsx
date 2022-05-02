import React from 'react';
import { HYPHEN_PRIMARY_COLOR } from '../style';
import Calendar from './common/Calendar';
import { InputContainer, InputWrapper, Span, Label } from './common/styled';

const getList = (length, n) => Array.from({ length }, (_, i) => `${i + n}`.slice(2));
const years = getList(10, new Date().getFullYear());
const MONTH = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];

function DueDate({ dimensions, setCardDate }) {
  const setItem = key => value =>
    setCardDate(prevDate => ({
      ...prevDate,
      [key]: value,
    }));

  return (
    <InputContainer>
      <Label>만료일</Label>
      <InputWrapper color={HYPHEN_PRIMARY_COLOR} width="50%">
        <Calendar items={MONTH} setItem={setItem('month')} placeholder="MM" dimensions={dimensions} />
        <Span>/</Span>
        <Calendar items={years} setItem={setItem('year')} placeholder="YY" dimensions={dimensions} />
      </InputWrapper>
    </InputContainer>
  );
}

export default DueDate;
