import React, { useState, useRef, useEffect } from 'react';
import { HYPHEN_PRIMARY_COLOR } from '../theme';
import Select from './common/Select';

import * as S from './common/styles';

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
    <S.InputContainer>
      <S.Label>만료일</S.Label>
      <S.InputWrapper color={HYPHEN_PRIMARY_COLOR} width={'50%'}>
        <S.Span>
          <Select items={months.current} setItem={setMonth} placeholder={'MM'} dimensions={dimensions} />
        </S.Span>
        <S.Span>/</S.Span>
        <S.Span>
          <Select items={years.current} setItem={setYear} placeholder={'YY'} dimensions={dimensions} />
        </S.Span>
      </S.InputWrapper>
    </S.InputContainer>
  );
}

export default DueDate;
