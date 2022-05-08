import React, { useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import styled from 'styled-components';
import { CardShape, TextNav } from '../components';
import * as Common from '../components/common/styles';

import useDispatch from '../hooks/useDispatch';

function CardAddComplete() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const targetRef = useRef(null);
  const {
    state: {
      cardInfo: { number, ownerName, dueDate, company },
    },
  } = useLocation();

  const handleClick = data => {
    if (targetRef.current.value.trim().length === 0) {
      targetRef.current.focus();
      alert('카드 이름을 입력해 주세요.');
      return;
    }

    dispatch({
      type: 'ADD_CARD',
      card: data,
    });
    navigate(`/card-list`);
  };
  return (
    <S.Container>
      <S.TitleBox>
        <S.Title>카드등록이 완료되었습니다.</S.Title>
      </S.TitleBox>
      <CardShape type="USER_CARD" company={company} cardNumber={number} cardOwnerName={ownerName} dueDate={dueDate} />
      <S.UnderLineInputWrapperForm>
        <S.Span>
          <S.underLineInput ref={targetRef} />
        </S.Span>
      </S.UnderLineInputWrapperForm>
      <TextNav
        isAllCompleted={true}
        handleClick={() =>
          handleClick({
            number,
            ownerName,
            dueDate,
            company,
            name: targetRef.current.value,
          })
        }
        text={'확인'}
      />
    </S.Container>
  );
}

export default React.memo(CardAddComplete);

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.span`
  font-family: 400;
  font-size: 24px;
  line-height: 28px;
`;

const TitleBox = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const S = { ...Common, Container, Title, TitleBox };
