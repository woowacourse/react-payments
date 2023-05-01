import React from 'react';
import styled from 'styled-components';
import { TAB_INDEX_INFO } from '../../../constants/constant';
import { UseInputProps } from '../../../hooks/useInput';
import { Error } from '../../common/Error';
import { Input } from '../../common/Input';

export interface OwnerInputProps {
  ownerInformation: UseInputProps;
}

const { addCardPage } = TAB_INDEX_INFO;

export default function OwnerInput({ ownerInformation }: OwnerInputProps) {
  return (
    <Container>
      <Wrapper>
        <Input
          type="text"
          id="owner"
          placeholder="카드에 표시된 이름과 동일하게 입력하세요."
          tabIndex={addCardPage.owner}
          autoComplete="off"
          autoCapitalize="characters"
          lang="en"
          enterKeyHint="next"
          {...ownerInformation}
        />
      </Wrapper>
      {ownerInformation.error && <Error text={ownerInformation.error} />}
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
  padding: 0 8px;
  box-sizing: border-box;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.inputGray};
  height: 45px;
  border-radius: 7px;
`;
