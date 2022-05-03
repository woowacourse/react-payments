import React, { useState, useRef, useEffect } from 'react';
import { HYPHEN_PRIMARY_COLOR } from '../style';
import Select from './common/Select';
import { InputContainer, InputWrapper, Span, Label } from './common/styled';

const MONTH = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
const MAX_YEAR_CARD_EXPIRATION = 5;

const getYears = (length, n) => Array.from({ length }, (_, i) => `${i + n}`.slice(2));

function DueDate({ dispatch, dimensions }) {
  const now = useRef(new Date());
  const months = useRef(MONTH);
  const years = useRef(getYears(MAX_YEAR_CARD_EXPIRATION, now.current.getFullYear()));

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
      <InputWrapper color={HYPHEN_PRIMARY_COLOR} width={'50%'}>
        <Span>
          <Select items={months.current} setItem={setMonth} placeholder={'MM'} dimensions={dimensions} />
        </Span>
        <Span>/</Span>
        <Span>
          <Select items={years.current} setItem={setYear} placeholder={'YY'} dimensions={dimensions} />
        </Span>
      </InputWrapper>
    </InputContainer>
  );
}

export default DueDate;
