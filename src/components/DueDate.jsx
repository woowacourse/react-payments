import React, { useState, useRef } from 'react';
import { hyphenPrimaryColor } from '../style';
import Calendar from './Calendar';
import { InputContainer, InputWrapper, Span, Label } from './common';

const getList = (length, n) => Array.from({ length }, (_, i) => `${i + n}`.slice(2));

const MONTH = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];

function DueDate() {
  const now = useRef(new Date());
  const months = useRef(MONTH);
  const years = useRef(getList(10, now.current.getFullYear()));

  const [month, setMonth] = useState();
  const [year, setYear] = useState();

  return (
    <InputContainer>
      <Label>만료일</Label>
      <InputWrapper color={hyphenPrimaryColor} width="50%">
        <Calendar items={months.current} setItem={setMonth} placeholder="MM" />
        <Span>/</Span>
        <Calendar items={years.current} setItem={setYear} placeholder="YY" />
      </InputWrapper>
    </InputContainer>
  );
}

export default DueDate;
