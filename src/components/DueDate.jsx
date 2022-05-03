import React, { useState, useRef, useEffect } from 'react';
import { HYPHEN_PRIMARY_COLOR } from '../style';
import Calendar from './common/Calendar';
import { InputContainer, InputWrapper, Span, Label } from './common/styled';

const getList = (length, n) => Array.from({ length }, (_, i) => `${i + n}`.slice(2));

const MONTH = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];

function DueDate({ dispatch, dimensions }) {
  const now = useRef(new Date());
  const months = useRef(MONTH);
  const years = useRef(getList(10, now.current.getFullYear()));

  const [month, setMonth] = useState('MM');
  const [year, setYear] = useState('YY');

  useEffect(() => {
    dispatch({
      type: 'DUE_DATE',
      dueDate: `${month} / ${year}`,
      isCorrectCardDate: !!(Number(month) && Number(year)),
    });
  }, [month, year, dispatch]);

  return (
    <InputContainer>
      <Label>만료일</Label>
      <InputWrapper color={HYPHEN_PRIMARY_COLOR} width="50%">
        <Calendar items={months.current} setItem={setMonth} placeholder="MM" dimensions={dimensions} />
        <Span>/</Span>
        <Calendar items={years.current} setItem={setYear} placeholder="YY" dimensions={dimensions} />
      </InputWrapper>
    </InputContainer>
  );
}

export default DueDate;
