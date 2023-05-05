import React from 'react';
import Card from '../../components/@common/Card/Card';
import Input from '../../components/@common/Input/Input';
import Layout from '../../components/@common/Layout/Layout';
import { useCardRegisterContext } from '../../context/CardRegisterContext';
import { useCardAlias } from '../../hooks/card/card';
import * as Styled from './CardAlias.styles';

export default function CardAlias() {
  const { cardRegisterInfo } = useCardRegisterContext();
  const { alias, onChange, handleSubmit } = useCardAlias();

  return (
    <Layout header={false}>
      <Styled.Root>
        <Styled.Title>카드등록이 완료되었습니다.</Styled.Title>
        <Styled.CardSection>
          <Card type="card" {...cardRegisterInfo} />
        </Styled.CardSection>
        <Styled.Form onSubmit={handleSubmit}>
          <Input>
            <Input.Field value={alias} onChange={onChange} maxLength={6} asChild>
              <Styled.Alias />
            </Input.Field>
          </Input>
          <Styled.ConfirmBtn>확인</Styled.ConfirmBtn>
        </Styled.Form>
      </Styled.Root>
    </Layout>
  );
}
