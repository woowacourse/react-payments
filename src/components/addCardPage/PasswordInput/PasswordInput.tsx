import React from 'react';
import styled from 'styled-components';
import { type UseInputProps } from '@hooks/useInput';
import { Error } from '@components/common/Error';
import { Input } from '@components/common/Input';
import { TAB_INDEX_INFO } from '@constants/constant';

export interface PasswordInputProps {
  id: string;
  firstPasswordInformation: UseInputProps;
  secondPasswordInformation: UseInputProps;
}

const { ADD_CARD_PAGE_TAB_INDEX } = TAB_INDEX_INFO;

export default function PasswordInput({
  id,
  firstPasswordInformation,
  secondPasswordInformation,
}: PasswordInputProps) {
  return (
    <Container>
      <Wrapper>
        <GrayWrapper>
          <Input
            isNumber={true}
            id={id}
            type="text"
            isPassword={true}
            placeholder="0"
            textAlign="center"
            autoComplete="off"
            tabIndex={ADD_CARD_PAGE_TAB_INDEX.FIRST_PASSWORD}
            {...firstPasswordInformation}
          />
        </GrayWrapper>
        <GrayWrapper>
          <Input
            isNumber={true}
            placeholder="0"
            type="text"
            isPassword={true}
            textAlign="center"
            tabIndex={ADD_CARD_PAGE_TAB_INDEX.SECOND_PASSWORD}
            autoComplete="off"
            {...secondPasswordInformation}
          />
        </GrayWrapper>
        <WhiteWrapper>•</WhiteWrapper>
        <WhiteWrapper>•</WhiteWrapper>
      </Wrapper>
      {firstPasswordInformation.error && (
        <Error text={firstPasswordInformation.error} />
      )}
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
  border-radius: 7px;
  align-items: center;
  gap: 7px;
`;

const GrayWrapper = styled.div`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  padding: 8px;
  width: 45px;
  height: 45px;
  border-radius: 7px;
  background-color: ${({ theme }) => theme.colors.inputGray};
`;

const WhiteWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  border: solid 1px ${({ theme }) => theme.colors.inputGray};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 7px;
  cursor: not-allowed;
`;
