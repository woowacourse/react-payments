import React, { useContext } from 'react';
import styled from 'styled-components';

import { CardInfoContext } from '../../context';
import { LABEL_PRIMARY_COLOR, PLACEHOLDER_PRIMARY_COLOR } from '../../style';
import Card from '../common/Card';

import Footer from '../common/Footer';
import TextButton from '../common/TextButton';

const SubmitContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  gap: 16px;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
`;

const LinedInput = styled.input`
  text-align: center;
  border: none;
  border-bottom: 1px solid #000;
  width: 80%;
  font-size: 1.25rem;
  padding: 8px;

  &:focus {
    outline: 1px solid ${PLACEHOLDER_PRIMARY_COLOR};
  }
`;

function CardSubmitPage() {
  const { cardCompany, cardNumbers, owner, cardDate } = useContext(CardInfoContext);

  return (
    <>
      <SubmitContainer>
        <Title>카드 등록이 완료되었습니다.</Title>
        <Card
          large
          handleClickBox={() => {}}
          cardCompany={cardCompany}
          cardNumbers={cardNumbers}
          cardOwner={owner}
          cardDate={cardDate}
        />
        <LinedInput type="text" minLength={1} maxLength={30} placeholder="카드 별칭" required />
      </SubmitContainer>
      <Footer>
        <TextButton type="button" hexColor={LABEL_PRIMARY_COLOR} isVisible onClick={() => alert('완료:D')}>
          확인
        </TextButton>
      </Footer>
    </>
  );
}

export default CardSubmitPage;
