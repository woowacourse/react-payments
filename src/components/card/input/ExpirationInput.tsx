import React from 'react';
import styled from 'styled-components';
import { UseInputProps } from '../../../hooks/useInput';
import Input from '../../common/Input';
import Error from '../../common/Error';
import { TAB_INDEX_INFO } from '../../../constant';

interface ExpirationInputProps {
  yearInformation: UseInputProps;
  monthInformation: UseInputProps;
}

const { addCardPage } = TAB_INDEX_INFO;

export default function ExpirationInput({
  yearInformation,
  monthInformation,
}: ExpirationInputProps) {
  return (
    <Container>
      <Wrapper>
        <InputWrapper>
          <Input
            type="text"
            id="expiration"
            isNumber={true}
            placeholder="MM"
            textAlign="center"
            autoComplete="off"
            tabIndex={addCardPage.month}
            {...monthInformation}
          />
        </InputWrapper>
        <Slash>/</Slash>
        <InputWrapper>
          <Input
            type="text"
            isNumber={true}
            placeholder="YY"
            textAlign="center"
            autoComplete="off"
            tabIndex={addCardPage.year}
            {...yearInformation}
          />
        </InputWrapper>
      </Wrapper>
      {monthInformation.error && <Error text={monthInformation.error} />}
      {yearInformation.error && <Error text={yearInformation.error} />}
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
