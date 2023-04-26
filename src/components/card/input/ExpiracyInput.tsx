import React from 'react';
import styled from 'styled-components';
import { UseInputProps } from '../../../hooks/useInput';
import Input from '../../common/Input';
import Error from '../../common/Error';
import { TAB_INDEX_INFO } from '../../../constant';

interface ExpiracyInputProps {
  year: UseInputProps;
  month: UseInputProps;
}

const { addCardPage } = TAB_INDEX_INFO;

export default function ExpiracyInput({ year, month }: ExpiracyInputProps) {
  return (
    <Container>
      <Wrapper>
        <InputWrapper>
          <Input
            type="text"
            maxLength={2}
            id="expiracy"
            isNumber={true}
            required
            placeholder="MM"
            textAlign="center"
            autoComplete="off"
            tabIndex={addCardPage.month}
            {...month}
          />
        </InputWrapper>
        <Slash>/</Slash>
        <InputWrapper>
          <Input
            type="text"
            maxLength={2}
            isNumber={true}
            required
            placeholder="YY"
            textAlign="center"
            autoComplete="off"
            tabIndex={addCardPage.year}
            {...year}
          />
        </InputWrapper>
      </Wrapper>
      {month.error && <Error text={month.error} />}
      {year.error && <Error text={year.error} />}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  width: 137px;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #ecebf1;
  height: 45px;
  border-radius: 7px;
`;

const InputWrapper = styled.div`
  width: 40px;
`;

const Slash = styled.span`
  position: relative;
  left: 3px;
  margin: 0 5px;
  font-size: 18px;
  font-weight: 500;
  color: #737373;
`;
