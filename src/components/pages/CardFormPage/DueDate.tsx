import React, { useContext } from "react";

import type { Month } from "types";

import { HYPHEN_PRIMARY_COLOR } from "style";

import {
  CardInfoContext,
  CardInfoDispatchContext,
} from "components/context/CardInfoProvider";

import Calendar from "components/common/Calendar";
import {
  InputContainer,
  InputWrapper,
  Span,
  Label,
} from "components/common/styled";

interface DueDateProps {
  dimensions: {
    width: number;
    height: number;
  };
}

const getYearList = (length: number, currentYear: number) =>
  Array.from({ length }, (_, i) => `${i + currentYear}`.slice(2));
const YEAR = getYearList(10, new Date().getFullYear());
const MONTH: Month[] = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
];

function DueDate({ dimensions }: DueDateProps) {
  const { cardDate } = useContext(CardInfoContext);
  const cardInfoDispatch = useContext(CardInfoDispatchContext);

  const setItem = (key: string) => (value: string) => {
    cardInfoDispatch({
      type: "UPDATE_DATE",
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
          setItem={setItem("month")}
          placeholder="MM"
          dimensions={dimensions}
        />
        <Span padding="8px">/</Span>
        <Calendar
          itemList={YEAR}
          item={cardDate.year}
          setItem={setItem("year")}
          placeholder="YY"
          dimensions={dimensions}
        />
      </InputWrapper>
    </InputContainer>
  );
}

export default DueDate;
