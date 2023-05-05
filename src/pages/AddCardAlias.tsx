import CardLabel from '../components/@common/CardLabel';
import Card from '../components/Card/Card';
import * as Styled from './AddCardAlias.styles';
import CardAliasInput from '../components/@common/CardAliasInput';
import React, { useEffect, useState } from 'react';
import SubmitButton from '../components/@common/SubmitButton';
import { useNavigate } from 'react-router-dom';
import CardList from '../types/CardList';
import { REG_EXP } from '../constants/regexp';
import { LoadingSpinner } from '../components/LoadingSpinner/LoadingSpinner';

const AddAlias = ({ cards, setCards }: CardList) => {
  const [cardAlias, setCardAlias] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target instanceof HTMLInputElement)) return;

    validateAlias(e.target.value);
  };

  const validateAlias = (alias: string) => {
    if (REG_EXP.cardAliasForm.test(alias)) return;

    setCardAlias(alias);
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

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  });

  return (
    <Styled.PageWrapper>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <form onSubmit={handleSetAlias}>
          <Styled.Wrapper>
            <Styled.CardLabelWrapper>
              <CardLabel labelText="카드등록이 완료되었습니다." />
            </Styled.CardLabelWrapper>
            <Styled.CardWrapper>
              <Card
                cardNumbers={cards[cards.length - 1].cardNumbers}
                expiredDates={cards[cards.length - 1].expiredDates}
                cardOwnerName={cards[cards.length - 1].cardOwnerName}
                cardCompany={cards[cards.length - 1].cardCompany}
              />
            </Styled.CardWrapper>
            <CardAliasInput
              type="text"
              value={cardAlias}
              maxLength={10}
              placeholder="10글자 이내의 카드 별칭을 적어주세요."
              onChange={handleOnChange}
              autoFocus={true}
            />
            <Styled.ButtonWrapper>
              <SubmitButton textContent="확인" color={true} cursor={true} />
            </Styled.ButtonWrapper>
          </Styled.Wrapper>
        </form>
      )}
    </Styled.PageWrapper>
  );
};

export default AddAlias;
