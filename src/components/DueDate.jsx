import React, { useState, useRef, useEffect } from 'react';
import { hyphenPrimaryColor } from '../style';
import Calendar from './Calendar';
import { InputContainer, InputWrapper, Span, Label } from './common';

const getList = (length, n) => Array.from({ length }, (_, i) => `${i + n}`.slice(2));

const MONTH = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];

function DueDate({ dimensions, cardDateCallback, setIsCorrectCardDate }) {
  const now = useRef(new Date());
  const months = useRef(MONTH);
  const years = useRef(getList(10, now.current.getFullYear()));

  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  useEffect(() => {
    const isCorrect = month.length === 2 && year.length === 2;

    if (isCorrect) {
      cardDateCallback(`${month} / ${year}`);
    }
    setIsCorrectCardDate(isCorrect);
    // console.log('month', month);
    // console.log('year', year);
  }, [month, year, cardDateCallback, setIsCorrectCardDate]);

  return (
    <InputContainer>
      <Label>만료일</Label>
      <InputWrapper color={hyphenPrimaryColor} width="50%">
        <Calendar items={months.current} setItem={setMonth} placeholder="MM" dimensions={dimensions} />
        <Span>/</Span>
        <Calendar items={years.current} setItem={setYear} placeholder="YY" dimensions={dimensions} />
      </InputWrapper>
    </InputContainer>
  );
}

export default DueDate;
