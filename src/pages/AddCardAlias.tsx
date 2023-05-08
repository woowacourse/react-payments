import CardLabel from '../components/@common/CardLabel';
import Card from '../components/Card/Card';
import * as Styled from './AddCardAlias.styles';
import CardAliasInput from '../components/@common/CardAliasInput';
import React from 'react';
import SubmitButton from '../components/@common/SubmitButton';
import { useNavigate } from 'react-router-dom';
import { CardList } from '../types/general';
import AddCardLoadingSpinner from '../components/AddCardLoadingSpinner/AddCardLoadingSpinner';
import { Link } from 'react-router-dom';
import useAddCardAlias from '../hooks/useAddCardAlias';

const AddCardAlias = ({ cards, setCards }: CardList) => {
  const { cardAlias, isLoading, validateAlias } = useAddCardAlias();
  const navigate = useNavigate();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target instanceof HTMLInputElement)) return;

    validateAlias(e.target.value);
  };

  const handleSetAlias = () => {
    setCards((prev) => {
      cardAlias
        ? (prev[prev.length - 1]['cardAlias'] = cardAlias)
        : (prev[prev.length - 1]['cardAlias'] = '');
      return [...prev];
    });

    navigate('/');
  };

  if (cards.length === 0) {
    return (
      <Styled.Wrapper>
        <Styled.NoCardTitle>등록한 카드가 없어요. 😥</Styled.NoCardTitle>
        <Styled.NoCardText>
          아래의 링크를 눌러 카드를 먼저 등록해주세요.
        </Styled.NoCardText>
        <Link to={'/add-card'}>카드 등록하러 가기</Link>
      </Styled.Wrapper>
    );
  }

  return (
    <Styled.PageWrapper>
      {isLoading ? (
        <AddCardLoadingSpinner />
      ) : (
        <form onSubmit={handleSetAlias}>
          <Styled.Wrapper>
            <Styled.CardLabelWrapper>
              <CardLabel labelText="카드 등록을 완료했어요." />
            </Styled.CardLabelWrapper>
            <Styled.CardWrapper>
              <Card
                cardNumbers={cards[cards.length - 1].cardNumbers}
                expiredDates={cards[cards.length - 1].expiredDates}
                cardOwnerName={cards[cards.length - 1].cardOwnerName}
                cardCompany={cards[cards.length - 1].cardCompany}
              />
              <CardAliasInput
                type="text"
                value={cardAlias}
                maxLength={10}
                placeholder="(선택) 카드 별칭을 10글자 이내로 적어주세요."
                onChange={handleOnChange}
                autoFocus={true}
              />
              <Styled.ButtonWrapper>
                <SubmitButton textContent="확인" color={true} cursor={true} />
              </Styled.ButtonWrapper>
            </Styled.CardWrapper>
          </Styled.Wrapper>
        </form>
      )}
    </Styled.PageWrapper>
  );
};

export default AddCardAlias;
