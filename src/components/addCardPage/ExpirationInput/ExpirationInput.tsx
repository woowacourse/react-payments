import React from 'react';
import styled from 'styled-components';
import { TAB_INDEX_INFO } from '@constants/constant';
import { type UseInputProps } from '@hooks/useInput';
import { Error } from '@components/common/Error';
import { Input } from '@components/common/Input';

interface ExpirationInputProps {
  yearInformation: UseInputProps;
  monthInformation: UseInputProps;
}

const {
  ADD_CARD_PAGE: { MONTH, YEAR },
} = TAB_INDEX_INFO;

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
            tabIndex={MONTH}
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
            tabIndex={YEAR}
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
  background-color: ${({ theme }) => theme.colors.inputGray};
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
  color: ${({ theme }) => theme.colors.placeholder};
`;
