import React, { useContext } from 'react';
import { CardInfoDispatchContext } from '../../context';
import { HYPHEN_PRIMARY_COLOR } from '../../style';
import Calendar from '../common/Calendar';
import { InputContainer, InputWrapper, Span, Label } from '../common/styled';

const getList = (length, n) => Array.from({ length }, (_, i) => `${i + n}`.slice(2));
const years = getList(10, new Date().getFullYear());
const MONTH = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];

function DueDate({ dimensions, cardDate }) {
  const cardInfoDispatch = useContext(CardInfoDispatchContext);

  const setItem = key => value => {
    cardInfoDispatch({
      type: 'UPDATE_DATE',
      cardDate: {
        ...cardDate,
        [key]: value,
      },
    });
  };

  return (
    <InputContainer>
      <Label>만료일</Label>
      <InputWrapper color={HYPHEN_PRIMARY_COLOR} width="50%">
        <Calendar
          itemList={MONTH}
          item={cardDate.month}
          setItem={setItem('month')}
          placeholder="MM"
          dimensions={dimensions}
        />
        <Span padding="8px">/</Span>
        <Calendar
          itemList={years}
          item={cardDate.year}
          setItem={setItem('year')}
          placeholder="YY"
          dimensions={dimensions}
        />
      </InputWrapper>
    </InputContainer>
  );
}

export default DueDate;
